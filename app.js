const STORAGE_KEY = "foodEconomicsTrainerProgress.v1";
const LANGUAGE_KEY = "foodEconomicsTrainerLanguage.v1";
const EXAM_SIZE = 11;
const POINTS_PER_QUESTION = 3;
const PASS_SCORE = 18;

const CORE_SOURCES = new Set(["past", "generated"]);

const MODES = {
  past: {
    size: 15,
    pool: () => QUESTION_BANK.filter((q) => q.source === "past")
  },
  agro: {
    size: EXAM_SIZE,
    pool: () => QUESTION_BANK.filter((q) => q.source === "agro")
  },
  mixed: {
    size: 20,
    pool: () => QUESTION_BANK.filter((q) => CORE_SOURCES.has(q.source))
  },
  exam: {
    size: EXAM_SIZE,
    pool: () => QUESTION_BANK.filter((q) => CORE_SOURCES.has(q.source))
  },
  review: {
    size: 15,
    pool: (progress) => {
      const coreQuestions = QUESTION_BANK.filter((q) => CORE_SOURCES.has(q.source));
      const missed = coreQuestions.filter((q) => progress.questions[q.id]?.wrong > 0);
      return missed.length ? missed : coreQuestions;
    }
  }
};

const UI_TEXT = {
  it: {
    htmlLang: "it",
    appTitle: "Allenatore Esame",
    resetProgress: "Azzera progressi",
    statsAria: "Progressi salvati",
    seenLabel: "Domande viste",
    accuracyLabel: "Precisione",
    weakTopicLabel: "Argomento debole",
    none: "Nessuno",
    modeTabsAria: "Modalità di studio",
    modes: {
      past: {
        tab: "Domande passate",
        title: "Domande degli esami passati",
        description: "Allenati con le domande già uscite negli scritti precedenti."
      },
      agro: {
        tab: "Domande AGRO",
        title: "Domande AGRO",
        description: "Simulazione con 11 domande AGRO, 3 punti ciascuna, punteggio finale in /33."
      },
      mixed: {
        tab: "Allenamento misto",
        title: "Allenamento misto",
        description: "Domande storiche mischiate con domande generate dal libro di Sassi."
      },
      exam: {
        tab: "Simulazione esame",
        title: "Simulazione esame reale",
        description: "11 domande, 3 punti ciascuna. Superi l'esame con almeno 18/33."
      },
      review: {
        tab: "Errori",
        title: "Ripasso degli errori",
        description: "Rivedi le domande che hai sbagliato. Se non ce ne sono, usa tutto il database."
      }
    },
    newSession: "Nuova sessione",
    examScoreAria: "Punteggio esame",
    score: "Punteggio",
    correct: "Corrette",
    status: "Stato",
    inProgress: "In corso",
    passing: "Sufficiente",
    questionCounter: (current, total) => `Domanda ${current} di ${total}`,
    showExplanation: "Mostra spiegazione",
    next: "Avanti",
    finish: "Termina",
    correctFeedback: "Corretto.",
    wrongFeedback: "Sbagliato. Tocca il pulsante info per la spiegazione.",
    chooseAnswer: "Scegli una risposta prima di continuare.",
    resetConfirm: "Azzerare tutti i progressi salvati?",
    examPassed: "Esame superato",
    examFailed: "Esame non superato",
    examPassedText: "Hai raggiunto il punteggio minimo richiesto per superare l'esame.",
    examFailedText: "Ti servono almeno 18 punti. Ripassa gli errori e prova un'altra simulazione.",
    correctShort: "corrette",
    sessionComplete: "Sessione completata",
    progressSaved: "Progressi salvati in questo browser.",
    tryAgain: "Riprova"
  },
  en: {
    htmlLang: "en",
    appTitle: "Exam Trainer",
    resetProgress: "Reset saved progress",
    statsAria: "Saved progress",
    seenLabel: "Questions seen",
    accuracyLabel: "Accuracy",
    weakTopicLabel: "Weak topic",
    none: "None",
    modeTabsAria: "Study modes",
    modes: {
      past: {
        tab: "Past Questions",
        title: "Past Exam Questions",
        description: "Practice questions taken from previous written exams."
      },
      agro: {
        tab: "Domande AGRO",
        title: "Domande AGRO",
        description: "Simulazione con 11 domande AGRO, 3 punti ciascuna, punteggio finale in /33."
      },
      mixed: {
        tab: "Mixed Practice",
        title: "Mixed Practice",
        description: "Historical questions mixed with generated questions from Sassi's book."
      },
      exam: {
        tab: "Real Exam",
        title: "Real Exam Simulation",
        description: "11 questions, 3 points each. You pass with at least 18/33."
      },
      review: {
        tab: "Mistakes",
        title: "Mistakes Review",
        description: "Practice the questions you have missed. If there are none, this uses the full bank."
      }
    },
    newSession: "New session",
    examScoreAria: "Exam score",
    score: "Score",
    correct: "Correct",
    status: "Status",
    inProgress: "In progress",
    passing: "Passing",
    questionCounter: (current, total) => `Question ${current} of ${total}`,
    showExplanation: "Show explanation",
    next: "Next",
    finish: "Finish",
    correctFeedback: "Correct.",
    wrongFeedback: "Wrong. Tap the info button for the explanation.",
    chooseAnswer: "Choose an answer before continuing.",
    resetConfirm: "Reset all saved progress?",
    examPassed: "Exam passed",
    examFailed: "Exam not passed",
    examPassedText: "You reached the minimum score required to pass.",
    examFailedText: "You need at least 18 points. Review your mistakes and try another simulation.",
    correctShort: "correct",
    sessionComplete: "Session complete",
    progressSaved: "Progress saved in this browser.",
    tryAgain: "Try again"
  }
};

let progress = loadProgress();
let language = loadLanguage();
let mode = "past";
let session = [];
let currentIndex = 0;
let selected = null;
let sessionCorrect = 0;
let answeredIds = new Set();

const els = {
  appTitle: document.getElementById("appTitle"),
  statsGrid: document.getElementById("statsGrid"),
  seenLabel: document.getElementById("seenLabel"),
  accuracyLabel: document.getElementById("accuracyLabel"),
  weakTopicLabel: document.getElementById("weakTopicLabel"),
  modeTabs: document.getElementById("modeTabs"),
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
  scoreLabel: document.getElementById("scoreLabel"),
  correctLabel: document.getElementById("correctLabel"),
  statusLabel: document.getElementById("statusLabel"),
  liveScore: document.getElementById("liveScore"),
  liveCorrect: document.getElementById("liveCorrect"),
  liveStatus: document.getElementById("liveStatus"),
  resetProgress: document.getElementById("resetProgress")
};

document.querySelectorAll(".language-button").forEach((button) => {
  button.addEventListener("click", () => {
    language = button.dataset.language;
    saveLanguage();
    applyLanguage();
  });
});

document.querySelectorAll(".tab").forEach((tab) => {
  tab.addEventListener("click", () => {
    mode = tab.dataset.mode;
    document.querySelectorAll(".tab").forEach((item) => item.classList.toggle("active", item === tab));
    applyLanguage();
    startSession();
  });
});

els.newSession.addEventListener("click", startSession);
els.restartAfterResults.addEventListener("click", startSession);
els.nextQuestion.addEventListener("click", goNext);
els.infoButton.addEventListener("click", () => els.explanation.classList.toggle("hidden"));
els.resetProgress.addEventListener("click", () => {
  const ok = window.confirm(t().resetConfirm);
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
  els.modeTitle.textContent = t().modes[mode].title;
  els.modeDescription.textContent = t().modes[mode].description;
  els.quizPanel.classList.remove("hidden");
  els.resultsPanel.classList.add("hidden");
  els.examStrip.classList.toggle("hidden", !isScoredExamMode());
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
  els.nextQuestion.textContent = currentIndex === session.length - 1 ? t().finish : t().next;
  els.questionCounter.textContent = t().questionCounter(currentIndex + 1, session.length);
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
  els.feedback.textContent = isCorrect ? t().correctFeedback : t().wrongFeedback;

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
    els.feedback.textContent = t().chooseAnswer;
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

  if (isScoredExamMode()) {
    const score = sessionCorrect * POINTS_PER_QUESTION;
    const passed = score >= PASS_SCORE;
    els.resultsTitle.textContent = passed ? t().examPassed : t().examFailed;
    els.resultsText.textContent = passed ? t().examPassedText : t().examFailedText;
    els.resultScore.textContent = `${score}/33 - ${sessionCorrect}/11 ${t().correctShort}`;
    return;
  }

  els.resultsTitle.textContent = t().sessionComplete;
  els.resultsText.textContent = t().progressSaved;
  els.resultScore.textContent = `${sessionCorrect}/${session.length} ${t().correctShort}`;
}

function updateExamStrip() {
  if (!isScoredExamMode()) return;
  const score = sessionCorrect * POINTS_PER_QUESTION;
  els.liveScore.textContent = `${score}/33`;
  els.liveCorrect.textContent = `${sessionCorrect}/11`;
  els.liveStatus.textContent = score >= PASS_SCORE ? t().passing : t().inProgress;
}

function isScoredExamMode() {
  return mode === "exam" || mode === "agro";
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
  if (!topics.length) return t().none;
  topics.sort((a, b) => {
    const aw = a[1].wrong / Math.max(a[1].seen, 1);
    const bw = b[1].wrong / Math.max(b[1].seen, 1);
    return bw - aw || b[1].wrong - a[1].wrong;
  });
  return topics[0][1].wrong ? topics[0][0] : t().none;
}

function applyLanguage() {
  const copy = t();
  document.documentElement.lang = copy.htmlLang;
  els.appTitle.textContent = copy.appTitle;
  els.resetProgress.title = copy.resetProgress;
  els.resetProgress.setAttribute("aria-label", copy.resetProgress);
  els.statsGrid.setAttribute("aria-label", copy.statsAria);
  els.seenLabel.textContent = copy.seenLabel;
  els.accuracyLabel.textContent = copy.accuracyLabel;
  els.weakTopicLabel.textContent = copy.weakTopicLabel;
  els.modeTabs.setAttribute("aria-label", copy.modeTabsAria);
  els.newSession.textContent = copy.newSession;
  els.examStrip.setAttribute("aria-label", copy.examScoreAria);
  els.scoreLabel.textContent = copy.score;
  els.correctLabel.textContent = copy.correct;
  els.statusLabel.textContent = copy.status;
  els.infoButton.title = copy.showExplanation;
  els.infoButton.setAttribute("aria-label", copy.showExplanation);
  els.restartAfterResults.textContent = copy.tryAgain;

  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === language);
  });

  document.querySelectorAll(".tab").forEach((tab) => {
    tab.textContent = copy.modes[tab.dataset.mode].tab;
  });

  if (session.length) {
    els.modeTitle.textContent = copy.modes[mode].title;
    els.modeDescription.textContent = copy.modes[mode].description;
    els.questionCounter.textContent = copy.questionCounter(currentIndex + 1, session.length);
    els.nextQuestion.textContent = currentIndex === session.length - 1 ? copy.finish : copy.next;
    if (selected !== null) {
      const q = session[currentIndex];
      els.feedback.textContent = selected === q.answer ? copy.correctFeedback : copy.wrongFeedback;
    }
  }

  updateStats();
  updateExamStrip();
}

function t() {
  if (mode === "agro") return UI_TEXT.it;
  return UI_TEXT[language] || UI_TEXT.it;
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

function loadLanguage() {
  const saved = localStorage.getItem(LANGUAGE_KEY);
  return saved === "en" ? "en" : "it";
}

function saveLanguage() {
  localStorage.setItem(LANGUAGE_KEY, language);
}

function saveProgress() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}

function escapeHtml(value) {
  const div = document.createElement("div");
  div.textContent = value;
  return div.innerHTML;
}

applyLanguage();
startSession();
