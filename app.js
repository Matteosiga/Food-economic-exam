const STORAGE_KEY = "foodEconomicsTrainerProgress.v1";
const EXAM_SIZE = 11;
const POINTS_PER_QUESTION = 3;
const PASS_SCORE = 18;

const MODES = {
  past: {
    title: "Past Exam Questions",
    description: "Practice questions taken from previous written exams.",
    size: 15,
    pool: () => QUESTION_BANK.filter((q) => q.source === "past")
  },
  mixed: {
    title: "Mixed Practice",
    description: "Historical questions mixed with generated questions from Sassi's book.",
    size: 20,
    pool: () => QUESTION_BANK
  },
  exam: {
    title: "Real Exam Simulation",
    description: "11 questions, 3 points each. You pass with at least 18/33.",
    size: EXAM_SIZE,
    pool: () => QUESTION_BANK
  },
  review: {
    title: "Mistakes Review",
    description: "Practice the questions you have missed. If there are none, this uses the full bank.",
    size: 15,
    pool: (progress) => {
      const missed = QUESTION_BANK.filter((q) => progress.questions[q.id]?.wrong > 0);
      return missed.length ? missed : QUESTION_BANK;
    }
  }
};

let progress = loadProgress();
let mode = "past";
let session = [];
let currentIndex = 0;
let selected = null;
let sessionCorrect = 0;
let answeredIds = new Set();

const els = {
  seenCount: document.getElementById("seenCount"),
  accuracyRate: document.getElementById("accuracyRate"),
  weakTopic: document.getElementById("weakTopic"),
  modeTitle: document.getElementById("modeTitle"),
  modeDescription: document.getElementById("modeDescription"),
  questionCounter: document.getElementById("questionCounter"),
  questionTopic: document.getElementById("questionTopic"),
  questionText: document.getElementById("questionText"),
  answers: document.getElementById("answers"),
  feedback: document.getElementById("feedback"),
  explanation: document.getElementById("explanation"),
  infoButton: document.getElementById("infoButton"),
  nextQuestion: document.getElementById("nextQuestion"),
  newSession: document.getElementById("newSession"),
  quizPanel: document.getElementById("quizPanel"),
  resultsPanel: document.getElementById("resultsPanel"),
  resultsTitle: document.getElementById("resultsTitle"),
  resultsText: document.getElementById("resultsText"),
  resultScore: document.getElementById("resultScore"),
  restartAfterResults: document.getElementById("restartAfterResults"),
  examStrip: document.getElementById("examStrip"),
  liveScore: document.getElementById("liveScore"),
  liveCorrect: document.getElementById("liveCorrect"),
  liveStatus: document.getElementById("liveStatus"),
  resetProgress: document.getElementById("resetProgress")
};

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    mode = tab.dataset.mode;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    startSession();
  });
});

els.newSession.addEventListener("click", startSession);
els.restartAfterResults.addEventListener("click", startSession);
els.nextQuestion.addEventListener("click", goNext);
els.infoButton.addEventListener("click", () => els.explanation.classList.toggle("hidden"));
els.resetProgress.addEventListener("click", () => {
  const ok = window.confirm("Reset all saved progress?");
  if (!ok) return;
  progress = { totalAnswered: 0, totalCorrect: 0, questions: {}, topics: {} };
  saveProgress();
  updateStats();
  startSession();
});

function startSession() {
  const config = MODES[mode];
  const pool = config.pool(progress);
  session = pickQuestions(pool, config.size);
  currentIndex = 0;
  selected = null;
  sessionCorrect = 0;
  answeredIds = new Set();
  els.modeTitle.textContent = config.title;
  els.modeDescription.textContent = config.description;
  els.quizPanel.classList.remove("hidden");
  els.resultsPanel.classList.add("hidden");
  els.examStrip.classList.toggle("hidden", mode !== "exam");
  renderQuestion();
  updateExamStrip();
  updateStats();
}

function renderQuestion() {
  const q = session[currentIndex];
  selected = null;
  els.feedback.className = "feedback hidden";
  els.feedback.textContent = "";
  els.explanation.classList.add("hidden");
  els.explanation.textContent = q.explanation;
  els.nextQuestion.textContent = currentIndex === session.length - 1 ? "Finish" : "Next";
  els.questionCounter.textContent = `Question ${currentIndex + 1} of ${session.length}`;
  els.questionTopic.textContent = q.topic;
  els.questionText.textContent = q.question;
  els.answers.innerHTML = "";

  q.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.innerHTML = `<span class="answer-label">${String.fromCharCode(65 + index)}</span>${escapeHtml(option)}`;
    button.addEventListener("click", () => answerQuestion(index));
    els.answers.appendChild(button);
  });
}

function answerQuestion(index) {
  if (selected !== null) return;
  selected = index;
  const q = session[currentIndex];
  const isCorrect = index === q.answer;
  const buttons = [...els.answers.querySelectorAll(".answer-button")];

  buttons.forEach((button, buttonIndex) => {
    button.disabled = true;
    if (buttonIndex === q.answer) button.classList.add("correct");
    if (buttonIndex === index && !isCorrect) button.classList.add("wrong");
  });

  els.feedback.className = `feedback ${isCorrect ? "good" : "bad"}`;
  els.feedback.textContent = isCorrect ? "Correct." : "Wrong. Tap the info button for the explanation.";

  if (!answeredIds.has(q.id)) {
    answeredIds.add(q.id);
    recordAnswer(q, isCorrect);
    if (isCorrect) sessionCorrect += 1;
    saveProgress();
    updateStats();
    updateExamStrip();
  }
}

function goNext() {
  if (selected === null) {
    els.feedback.className = "feedback bad";
    els.feedback.textContent = "Choose an answer before continuing.";
    return;
  }

  if (currentIndex < session.length - 1) {
    currentIndex += 1;
    renderQuestion();
    return;
  }

  finishSession();
}

function finishSession() {
  els.quizPanel.classList.add("hidden");
  els.resultsPanel.classList.remove("hidden");

  if (mode === "exam") {
    const score = sessionCorrect * POINTS_PER_QUESTION;
    const passed = score >= PASS_SCORE;
    els.resultsTitle.textContent = passed ? "Exam passed" : "Exam not passed";
    els.resultsText.textContent = passed
      ? "You reached the minimum score required to pass."
      : "You need at least 18 points. Review your mistakes and try another simulation.";
    els.resultScore.textContent = `${score}/33 · ${sessionCorrect}/11 correct`;
    return;
  }

  els.resultsTitle.textContent = "Session complete";
  els.resultsText.textContent = "Progress saved in this browser.";
  els.resultScore.textContent = `${sessionCorrect}/${session.length} correct`;
}

function updateExamStrip() {
  if (mode !== "exam") return;
  const score = sessionCorrect * POINTS_PER_QUESTION;
  els.liveScore.textContent = `${score}/33`;
  els.liveCorrect.textContent = `${sessionCorrect}/11`;
  els.liveStatus.textContent = score >= PASS_SCORE ? "Passing" : "In progress";
}

function recordAnswer(q, isCorrect) {
  progress.totalAnswered += 1;
  if (isCorrect) progress.totalCorrect += 1;

  if (!progress.questions[q.id]) {
    progress.questions[q.id] = { seen: 0, correct: 0, wrong: 0 };
  }
  progress.questions[q.id].seen += 1;
  progress.questions[q.id][isCorrect ? "correct" : "wrong"] += 1;

  if (!progress.topics[q.topic]) {
    progress.topics[q.topic] = { seen: 0, correct: 0, wrong: 0 };
  }
  progress.topics[q.topic].seen += 1;
  progress.topics[q.topic][isCorrect ? "correct" : "wrong"] += 1;
}

function updateStats() {
  els.seenCount.textContent = progress.totalAnswered;
  const accuracy = progress.totalAnswered ? Math.round((progress.totalCorrect / progress.totalAnswered) * 100) : 0;
  els.accuracyRate.textContent = `${accuracy}%`;
  els.weakTopic.textContent = getWeakTopic();
}

function getWeakTopic() {
  const topics = Object.entries(progress.topics);
  if (!topics.length) return "None";
  topics.sort((a, b) => {
    const aw = a[1].wrong / Math.max(a[1].seen, 1);
    const bw = b[1].wrong / Math.max(b[1].seen, 1);
    return bw - aw || b[1].wrong - a[1].wrong;
  });
  return topics[0][1].wrong ? topics[0][0] : "None";
}

function pickQuestions(pool, size) {
  const weighted = [...pool].sort((a, b) => questionWeight(b) - questionWeight(a));
  const priority = weighted.slice(0, Math.ceil(size / 3));
  const rest = shuffle(weighted.slice(Math.ceil(size / 3)));
  return shuffle([...priority, ...rest]).slice(0, Math.min(size, pool.length));
}

function questionWeight(q) {
  const state = progress.questions[q.id];
  if (!state) return q.source === "past" ? 2 : 1;
  return state.wrong * 5 - state.correct + (q.source === "past" ? 2 : 1);
}

function shuffle(items) {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function loadProgress() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (stored && stored.questions && stored.topics) return stored;
  } catch {
    // Ignore invalid saved data and start clean.
  }
  return { totalAnswered: 0, totalCorrect: 0, questions: {}, topics: {} };
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

startSession();
