const AGRO_QUESTIONS = [
  {
    id: "agro-001",
    source: "agro",
    topic: "Sistema agroalimentare",
    question: "L'interpretazione del sistema agroalimentare data dagli economisti puo essere ricondotta alle scuole:",
    options: ["americana e francese.", "tedesca e keynesiana."],
    answer: 0,
    explanation: "Il file collega l'interpretazione del sistema agroalimentare alle scuole americana e francese."
  },
  {
    id: "agro-002",
    source: "agro",
    topic: "Canali distributivi",
    question: "La lunghezza del canale distributivo dipende:",
    options: ["dal numero di soggetti che intermediano tra produttore e acquirente.", "dalla sola distanza fisica tra azienda agricola e consumatore finale."],
    answer: 0,
    explanation: "La lunghezza dipende dal numero di intermediari fra produttore e acquirente."
  },
  {
    id: "agro-003",
    source: "agro",
    topic: "Restrizioni verticali",
    question: "Le restrizioni verticali sono:",
    options: ["accordi contrattuali tra imprese collegate verticalmente in diverse fasi del processo produttivo.", "accordi tra imprese concorrenti che operano nella stessa fase produttiva."],
    answer: 0,
    explanation: "Riguardano imprese poste in fasi diverse della filiera e unite da relazioni verticali."
  },
  {
    id: "agro-004",
    source: "agro",
    topic: "Distribuzione",
    question: "Le listing fees sono:",
    options: ["sconti riconosciuti dal produttore al consumatore finale sul prezzo di vendita.", "pagamenti richiesti dalle catene distributive al produttore per mettere in catalogo il prodotto."],
    answer: 1,
    explanation: "Sono pagamenti richiesti dalla distribuzione per inserire il prodotto in assortimento."
  },
  {
    id: "agro-005",
    source: "agro",
    topic: "Competitivita",
    question: "Il revealed comparative advantage (RCA) index identifica:",
    options: ["la misura in cui un Paese esportatore cattura quote di mercato internazionale in un settore rispetto agli altri prodotti esportati.", "il costo delle risorse domestiche necessarie per produrre un bene rispetto al prezzo mondiale."],
    answer: 0,
    explanation: "L'RCA misura il vantaggio comparato rivelato nelle esportazioni di uno specifico settore."
  },
  {
    id: "agro-006",
    source: "agro",
    topic: "Impresa agricola",
    question: "L'azienda e:",
    options: ["il complesso di beni organizzati dall'imprenditore per l'esercizio dell'impresa.", "l'attivita economica svolta dall'imprenditore senza riferimento ai beni organizzati."],
    answer: 0,
    explanation: "Nel Codice Civile l'azienda e il complesso dei beni organizzati dall'imprenditore."
  },
  {
    id: "agro-007",
    source: "agro",
    topic: "Redditi agricoli",
    question: "I redditi fondiari rappresentano:",
    options: ["la quota di reddito attribuibile a un fondo agricolo sulla base delle tariffe d'estimo.", "il reddito effettivamente incassato ogni anno dalla vendita dei prodotti agricoli."],
    answer: 0,
    explanation: "Sono redditi determinati catastalmente tramite tariffe d'estimo."
  },
  {
    id: "agro-008",
    source: "agro",
    topic: "Bilancio agrario",
    question: "Il bilancio economico proposto dall'economia agraria e costituito da:",
    options: ["un prospetto suddiviso in due sezioni denominate attivo e passivo.", "un registro fiscale composto esclusivamente da ricavi monetari giornalieri."],
    answer: 0,
    explanation: "Il prospetto e organizzato in attivo e passivo."
  },
  {
    id: "agro-009",
    source: "agro",
    topic: "Indicatori aziendali",
    question: "L'indice economico PLV/SAU misura:",
    options: ["la produttivita aziendale per ettaro di terreno coltivato.", "la quota di debiti finanziari sul valore complessivo dei macchinari."],
    answer: 0,
    explanation: "Il rapporto tra produzione lorda vendibile e superficie agricola utilizzata misura la produttivita per ettaro."
  },
  {
    id: "agro-010",
    source: "agro",
    topic: "Forme giuridiche",
    question: "Storicamente le aziende agricole italiane sono prevalentemente organizzate nella forma giuridica di:",
    options: ["societa semplici o imprese individuali, anche per ragioni di opportunita fiscale.", "societa per azioni quotate sui mercati regolamentati."],
    answer: 0,
    explanation: "La forma tradizionale prevalente e quella della societa semplice o dell'impresa individuale."
  },
  {
    id: "agro-011",
    source: "agro",
    topic: "Marketing",
    question: "Con il termine digital marketing si intende:",
    options: ["tutte le attivita di marketing condotte dall'impresa tramite strumenti e canali digitali.", "la sola vendita diretta dei prodotti agricoli nei mercati rionali."],
    answer: 0,
    explanation: "Il digital marketing comprende le attivita di marketing svolte attraverso canali e strumenti digitali."
  },
  {
    id: "agro-012",
    source: "agro",
    topic: "Agri-business",
    question: "Il concetto di agri-business e stato coniato dalla scuola:",
    options: ["francese.", "americana."],
    answer: 1,
    explanation: "Il file attribuisce il concetto di agri-business alla scuola americana."
  },
  {
    id: "agro-013",
    source: "agro",
    topic: "Canali distributivi",
    question: "Il canale distributivo tradizionale e caratterizzato da:",
    options: ["assenza di formalizzazione delle relazioni fra i membri del canale.", "coordinamento obbligatorio garantito da un contratto pluriennale tra tutti gli operatori."],
    answer: 0,
    explanation: "Nel canale tradizionale le relazioni tra i membri non sono formalizzate."
  },
  {
    id: "agro-014",
    source: "agro",
    topic: "Restrizioni verticali",
    question: "La fissazione del prezzo di rivendita, o prezzo imposto, e:",
    options: ["una restrizione verticale posta dal produttore nei confronti del venditore.", "una tassa pubblica applicata al consumatore finale."],
    answer: 0,
    explanation: "Il prezzo imposto e una restrizione verticale del produttore verso il venditore."
  },
  {
    id: "agro-015",
    source: "agro",
    topic: "Value chain",
    question: "I passi per la scelta dei settori prioritari degli interventi nella value chain includono:",
    options: ["la definizione iniziale di prodotti o catene la cui competitivita puo essere migliorata.", "la scelta casuale dei settori indipendentemente dal potenziale competitivo."],
    answer: 0,
    explanation: "La selezione parte da un insieme di prodotti o catene con margini di miglioramento competitivo."
  },
  {
    id: "agro-016",
    source: "agro",
    topic: "Competitivita",
    question: "Il domestic resource cost (DRC) coefficient misura:",
    options: ["il costo della produzione interna di un prodotto rispetto al costo sul mercato mondiale.", "la notorieta del marchio presso i consumatori finali."],
    answer: 0,
    explanation: "Il DRC confronta il costo delle risorse domestiche con il riferimento del mercato mondiale."
  },
  {
    id: "agro-017",
    source: "agro",
    topic: "Impresa agricola",
    question: "Dalla definizione di azienda fornita dal Codice Civile emerge:",
    options: ["l'aspetto statico di azienda come stock di beni strumentali all'attivita di impresa.", "l'idea di impresa come processo decisionale privo di beni organizzati."],
    answer: 0,
    explanation: "La definizione civilistica dell'azienda mette in evidenza lo stock organizzato di beni."
  },
  {
    id: "agro-018",
    source: "agro",
    topic: "Imprenditore agricolo",
    question: "L'imprenditore agricolo e colui che:",
    options: ["svolge esclusivamente attivita di commercio al dettaglio senza produzione agricola.", "esercita almeno una tra coltivazione del fondo, selvicoltura e allevamento di animali."],
    answer: 1,
    explanation: "La qualifica richiede l'esercizio di almeno una delle attivita agricole principali."
  },
  {
    id: "agro-019",
    source: "agro",
    topic: "Redditi agricoli",
    question: "Per reddito agrario si intende:",
    options: ["un reddito normale determinato tramite tariffe d'estimo stabilite dalla legge catastale.", "il profitto netto calcolato sottraendo tutti i costi effettivi dai ricavi annui."],
    answer: 0,
    explanation: "Il reddito agrario e un reddito normale determinato catastalmente."
  },
  {
    id: "agro-020",
    source: "agro",
    topic: "Imprenditore agricolo",
    question: "Il coltivatore diretto e:",
    options: ["chi si dedica direttamente e abitualmente all'attivita agricola fornendo, con la famiglia, almeno un terzo del lavoro necessario.", "chi possiede terreni agricoli ma affida sempre l'intera gestione a terzi."],
    answer: 0,
    explanation: "La figura del coltivatore diretto richiede lavoro abituale e diretto, anche con il nucleo familiare."
  },
  {
    id: "agro-021",
    source: "agro",
    topic: "Cooperative",
    question: "Lo scopo principale dell'impresa cooperativa coincide:",
    options: ["con lo scopo mutualistico.", "con la massimizzazione esclusiva del dividendo per investitori esterni."],
    answer: 0,
    explanation: "La cooperativa ha come scopo centrale quello mutualistico."
  },
  {
    id: "agro-022",
    source: "agro",
    topic: "Marketing",
    question: "Il prosumer e:",
    options: ["una tipologia di end user che partecipa attivamente alla creazione del prodotto o servizio, producendo contenuti e giudizi.", "un intermediario logistico che trasporta merci tra produttore e dettagliante."],
    answer: 0,
    explanation: "Il prosumer combina ruolo di consumatore e contributo attivo alla creazione di valore."
  },
  {
    id: "agro-023",
    source: "agro",
    topic: "Sistema agroalimentare",
    question: "Secondo la scuola francese:",
    options: ["ogni elemento che soddisfa la funzione alimentare e parte del sistema agroalimentare.", "il sistema agroalimentare coincide solo con la fase agricola primaria."],
    answer: 0,
    explanation: "La scuola francese include nel sistema ogni elemento che concorre alla funzione alimentare."
  },
  {
    id: "agro-024",
    source: "agro",
    topic: "Canali distributivi",
    question: "Il canale distributivo amministrato e caratterizzato da:",
    options: ["un'istituzione dotata di potere che orienta le decisioni degli altri membri del canale.", "una completa assenza di soggetti capaci di influenzare le decisioni del canale."],
    answer: 0,
    explanation: "Nel canale amministrato un attore esercita potere di orientamento sugli altri membri."
  },
  {
    id: "agro-025",
    source: "agro",
    topic: "Distribuzione",
    question: "I long payments sono:",
    options: ["dilazioni di pagamento ottenute dal distributore.", "premi pagati al consumatore per acquistare prodotti a lunga conservazione."],
    answer: 0,
    explanation: "I long payments sono tempi di pagamento dilazionati a favore del distributore."
  },
  {
    id: "agro-026",
    source: "agro",
    topic: "Strategia",
    question: "La SWOT analysis e:",
    options: ["uno strumento di pianificazione strategica.", "un indice contabile per misurare la produzione per ettaro."],
    answer: 0,
    explanation: "La SWOT analysis serve alla pianificazione strategica."
  },
  {
    id: "agro-027",
    source: "agro",
    topic: "Diamante di Porter",
    question: "Nella gerarchia dei fattori del diamante di Porter, i fattori avanzati sono:",
    options: ["infrastrutture digitali e personale con elevata qualificazione.", "terra agricola non specializzata e lavoro generico non formato."],
    answer: 0,
    explanation: "I fattori avanzati includono risorse qualificate e infrastrutture evolute."
  },
  {
    id: "agro-028",
    source: "agro",
    topic: "Impresa agricola",
    question: "Secondo la teoria unitaria:",
    options: ["l'azienda costituisce un bene unitario distinto dai singoli beni che la compongono.", "l'azienda e solo la somma contabile dei singoli beni senza unita autonoma."],
    answer: 0,
    explanation: "La teoria unitaria vede l'azienda come bene unitario distinto dai beni singoli."
  },
  {
    id: "agro-029",
    source: "agro",
    topic: "Imprenditore agricolo",
    question: "L'allevamento di cavalli rappresenta:",
    options: ["un'attivita che rientra tra quelle esercitabili per definizione dall'imprenditore agricolo.", "un'attivita sempre esclusa dall'agricoltura e qualificata solo come industriale."],
    answer: 0,
    explanation: "L'allevamento di animali rientra fra le attivita agricole principali."
  },
  {
    id: "agro-030",
    source: "agro",
    topic: "Attivita connesse",
    question: "L'attivita agrituristica e un'attivita connessa che nasce come:",
    options: ["fusione tra attivita agricola prevalente e attivita turistica in rapporto di connessione.", "attivita turistica autonoma senza alcun legame con l'impresa agricola."],
    answer: 0,
    explanation: "L'agriturismo e connesso a un'attivita agricola prevalente."
  },
  {
    id: "agro-031",
    source: "agro",
    topic: "Obblighi contabili",
    question: "In tema di obblighi contabili, il Codice Civile:",
    options: ["esonera l'imprenditore agricolo dalla tenuta dei libri contabili normalmente usati dall'imprenditore commerciale.", "impone all'imprenditore agricolo gli stessi libri contabili dell'imprenditore commerciale in ogni caso."],
    answer: 0,
    explanation: "Il file indica l'esonero dell'imprenditore agricolo da tali libri contabili."
  },
  {
    id: "agro-032",
    source: "agro",
    topic: "Imprenditore agricolo",
    question: "La qualifica di IAP, Imprenditore Agricolo Professionale, e riconosciuta a soggetti che:",
    options: ["dedicano almeno il 50% del tempo di lavoro all'attivita agricola e ne ricavano almeno il 50% del reddito da lavoro.", "svolgono agricoltura solo occasionalmente e senza specifiche competenze agrarie."],
    answer: 0,
    explanation: "Lo IAP richiede competenze agrarie, tempo di lavoro e reddito prevalenti in agricoltura."
  },
  {
    id: "agro-033",
    source: "agro",
    topic: "Marketing",
    question: "Quando si parla di brand awareness si fa riferimento:",
    options: ["alla notorieta di un determinato brand.", "al costo unitario di produzione di un alimento."],
    answer: 0,
    explanation: "La brand awareness indica la notorieta della marca."
  },
  {
    id: "agro-034",
    source: "agro",
    topic: "Sistema agroalimentare",
    question: "Il sistema agroalimentare passa da concetto empirico descrittivo a concetto con connotati teorici con la scuola:",
    options: ["americana.", "francese."],
    answer: 1,
    explanation: "Il file attribuisce questo passaggio alla scuola francese."
  },
  {
    id: "agro-035",
    source: "agro",
    topic: "Canali distributivi",
    question: "La classificazione della forma di organizzazione distingue i canali di distribuzione secondo:",
    options: ["la forma della loro organizzazione.", "il solo colore del packaging dei prodotti venduti."],
    answer: 0,
    explanation: "Questa classificazione guarda alla forma organizzativa del canale."
  },
  {
    id: "agro-036",
    source: "agro",
    topic: "Restrizioni verticali",
    question: "Le esclusive di territorio sono:",
    options: ["restrizioni verticali poste dal produttore nei confronti del venditore.", "strumenti fiscali con cui lo Stato riduce l'imposta sul reddito agricolo."],
    answer: 0,
    explanation: "L'esclusiva territoriale limita il venditore rispetto a un'area e rientra nelle restrizioni verticali."
  },
  {
    id: "agro-037",
    source: "agro",
    topic: "Impresa",
    question: "Gli stakeholder sono:",
    options: ["gli interlocutori dell'impresa.", "soltanto i proprietari dei terreni agricoli."],
    answer: 0,
    explanation: "Gli stakeholder sono i soggetti interessati o interlocutori dell'impresa."
  },
  {
    id: "agro-038",
    source: "agro",
    topic: "Diamante di Porter",
    question: "Il diamante della competitivita, o di Porter, rispetto all'analisi SWOT e:",
    options: ["uno strumento analitico piu rigoroso per valutare un'industria o value chain.", "un metodo meno strutturato basato solo su impressioni soggettive."],
    answer: 0,
    explanation: "Il diamante di Porter e presentato come strumento analitico piu rigoroso della SWOT."
  },
  {
    id: "agro-039",
    source: "agro",
    topic: "Attivita connesse",
    question: "L'imprenditore agricolo puo esercitare anche attivita tipicamente commerciali o industriali se:",
    options: ["utilizza prevalentemente attrezzature o risorse dell'azienda normalmente impiegate nell'attivita agricola esercitata.", "le svolge senza alcun collegamento con l'attivita agricola principale."],
    answer: 0,
    explanation: "La connessione richiede l'uso prevalente di risorse normalmente impiegate nell'attivita agricola."
  },
  {
    id: "agro-040",
    source: "agro",
    topic: "Attivita connesse",
    question: "In agricoltura le attivita connesse sono:",
    options: ["attivita agricole per connessione solo se esercitate dall'imprenditore agricolo nel rispetto del principio di prevalenza.", "attivita sempre commerciali e mai riconducibili all'impresa agricola."],
    answer: 0,
    explanation: "Le attivita connesse sono agricole per connessione quando rispettano il principio di prevalenza."
  },
  {
    id: "agro-041",
    source: "agro",
    topic: "Fiscalita agricola",
    question: "Dal punto di vista della tassazione e delle agevolazioni fiscali:",
    options: ["l'imprenditore agricolo gode di agevolazioni fiscali e incentivi legati al ruolo e alle peculiarita del settore.", "l'imprenditore agricolo e escluso da qualunque regime agevolativo specifico."],
    answer: 0,
    explanation: "Il settore agricolo prevede agevolazioni fiscali e incentivi specifici."
  },
  {
    id: "agro-042",
    source: "agro",
    topic: "Indicatori aziendali",
    question: "La SAU, Superficie Agricola Utilizzata, rappresenta:",
    options: ["una delle principali unita di misura della dimensione di un'azienda agricola.", "il valore monetario annuo dei prodotti agricoli venduti."],
    answer: 0,
    explanation: "La SAU misura la superficie agricola effettivamente utilizzata."
  },
  {
    id: "agro-043",
    source: "agro",
    topic: "Cooperative",
    question: "Le cooperative operanti in agricoltura:",
    options: ["contribuiscono ad aumentare il potere contrattuale dei produttori aderenti e a ottenere condizioni commerciali piu favorevoli.", "riducono sempre il potere contrattuale dei produttori agricoli aderenti."],
    answer: 0,
    explanation: "La cooperazione rafforza la posizione contrattuale dei produttori."
  },
  {
    id: "agro-044",
    source: "agro",
    topic: "Marketing",
    question: "Nell'ottica di chi produce un bene o offre un servizio, customizzare significa:",
    options: ["personalizzare un bene o servizio in funzione delle esigenze dell'end user.", "standardizzare il prodotto eliminando ogni adattamento al cliente."],
    answer: 0,
    explanation: "Customizzare significa adattare l'offerta alle esigenze dell'utente finale."
  },
  {
    id: "agro-045",
    source: "agro",
    topic: "Canali distributivi",
    question: "Il canale distributivo contrattuale e caratterizzato da:",
    options: ["un funzionamento e coordinamento assicurato da un contratto che lega le parti per una durata determinata.", "relazioni occasionali prive di qualunque accordo tra i soggetti del canale."],
    answer: 0,
    explanation: "Nel canale contrattuale il coordinamento deriva da un contratto tra le parti."
  },
  {
    id: "agro-046",
    source: "agro",
    topic: "Distribuzione",
    question: "I retrospective payments sono:",
    options: ["pagamenti richiesti al produttore alla fine dell'anno in proporzione alle vendite effettuate.", "anticipi versati dal produttore al consumatore prima della vendita."],
    answer: 0,
    explanation: "Sono pagamenti retrospettivi legati alle vendite realizzate."
  },
  {
    id: "agro-047",
    source: "agro",
    topic: "Diamante di Porter",
    question: "Gli svantaggi selettivi dei fattori del diamante di Porter sono:",
    options: ["stimoli a innovazione e pragmatismo.", "ostacoli che impediscono sempre ogni forma di miglioramento competitivo."],
    answer: 0,
    explanation: "Gli svantaggi selettivi possono spingere imprese e sistemi verso innovazione e soluzioni pragmatiche."
  },
  {
    id: "agro-048",
    source: "agro",
    topic: "Strategia",
    question: "Per produttivita operativa si intende:",
    options: ["la capacita di ogni segmento di fornire prodotti o servizi al miglior rapporto costo-efficienza e con qualita elevata.", "la sola capacita dell'impresa di aumentare i prezzi senza modificare costi e qualita."],
    answer: 0,
    explanation: "La produttivita operativa riguarda efficienza, qualita e prestazioni dei segmenti di attivita."
  },
  {
    id: "agro-049",
    source: "agro",
    topic: "Contabilita",
    question: "La contabilita generale consente:",
    options: ["la rilevazione consuntiva delle operazioni con soggetti dell'ambiente esterno.", "la sola stima preventiva dei raccolti futuri senza registrazioni aziendali."],
    answer: 0,
    explanation: "La contabilita generale registra a consuntivo le operazioni esterne dell'azienda."
  },
  {
    id: "agro-050",
    source: "agro",
    topic: "Strategia",
    question: "La strategia e:",
    options: ["un processo decisionale.", "un registro obbligatorio dei movimenti di magazzino."],
    answer: 0,
    explanation: "Il file definisce la strategia come processo decisionale."
  },
  {
    id: "agro-051",
    source: "agro",
    topic: "Certificazioni",
    question: "La certificazione etica rappresenta un impegno:",
    options: ["a migliorare le condizioni di lavoro.", "a ridurre la tracciabilita dei prodotti lungo la filiera."],
    answer: 0,
    explanation: "La certificazione etica riguarda anche l'impegno verso migliori condizioni di lavoro."
  },
  {
    id: "agro-052",
    source: "agro",
    topic: "Strategia",
    question: "La SWOT analysis e:",
    options: ["uno strumento di pianificazione strategica.", "una certificazione di origine geografica dei vini."],
    answer: 0,
    explanation: "Anche questa formulazione richiama la SWOT come strumento di pianificazione strategica."
  },
  {
    id: "agro-053",
    source: "agro",
    topic: "Value chain",
    question: "La catena del valore e:",
    options: ["l'elemento piu operativo del processo di costituzione del vantaggio competitivo.", "un documento catastale per il calcolo del reddito fondiario."],
    answer: 0,
    explanation: "La catena del valore rende operativo il processo di costruzione del vantaggio competitivo."
  },
  {
    id: "agro-054",
    source: "agro",
    topic: "Canali distributivi",
    question: "La classificazione del canale distributivo secondo la tecnica di vendita al consumatore finale dipende:",
    options: ["dalla forma di distribuzione utilizzata nella relazione con il consumatore finale.", "dal tipo di concime usato nella fase agricola primaria."],
    answer: 0,
    explanation: "Questa classificazione guarda alla forma di distribuzione nel rapporto con il consumatore finale."
  },
  {
    id: "agro-055",
    source: "agro",
    topic: "Certificazioni",
    question: "La certificazione e uno strumento che puo essere usato:",
    options: ["a garanzia della qualita di un alimento.", "per eliminare ogni controllo sulla qualita dei prodotti alimentari."],
    answer: 0,
    explanation: "La certificazione puo garantire la qualita dell'alimento."
  },
  {
    id: "agro-056",
    source: "agro",
    topic: "Mercati",
    question: "Il mercato della commodity e costituito da:",
    options: ["mercati all'origine.", "mercati esclusivamente digitali rivolti al consumatore finale."],
    answer: 0,
    explanation: "Il file collega il mercato delle commodity ai mercati all'origine."
  },
  {
    id: "agro-057",
    source: "agro",
    topic: "Tracciabilita",
    question: "La tracciabilita e:",
    options: ["la capacita di ricostruire la storia e seguire l'utilizzo di un prodotto tramite identificazioni documentate di flussi e operatori.", "la sola capacita di promuovere un prodotto sui social network."],
    answer: 0,
    explanation: "La tracciabilita consente di ricostruire percorso, flussi materiali e operatori della filiera."
  },
  {
    id: "agro-058",
    source: "agro",
    topic: "Agri-business",
    question: "Il concetto di agri-business e stato coniato dalla scuola:",
    options: ["americana.", "francese."],
    answer: 0,
    explanation: "Il concetto e attribuito alla scuola americana."
  },
  {
    id: "agro-059",
    source: "agro",
    topic: "Impresa agricola",
    question: "Dal Codice Civile emerge un concetto di impresa quale:",
    options: ["elemento dinamico costituito dall'esercizio di un'attivita economica.", "stock statico di soli beni organizzati dall'imprenditore."],
    answer: 0,
    explanation: "A differenza dell'azienda, l'impresa richiama l'esercizio dinamico dell'attivita economica."
  },
  {
    id: "agro-060",
    source: "agro",
    topic: "Restrizioni verticali",
    question: "Le restrizioni verticali sono:",
    options: ["accordi contrattuali tra imprese operanti in diverse fasi del processo produttivo e collegate verticalmente.", "accordi informali tra soli consumatori finali per scegliere un punto vendita."],
    answer: 0,
    explanation: "La definizione ripete il carattere contrattuale e verticale delle restrizioni."
  },
  {
    id: "agro-061",
    source: "agro",
    topic: "Certificazioni",
    question: "Le VPQRD, DOCG, DOC e IGT sono:",
    options: ["certificazioni di qualita.", "indici di produttivita per ettaro."],
    answer: 0,
    explanation: "Queste sigle rientrano tra le certificazioni di qualita."
  },
  {
    id: "agro-062",
    source: "agro",
    topic: "Biotecnologie",
    question: "Le biotecnologie possono essere:",
    options: ["tradizionali e innovative.", "solo digitali e finanziarie."],
    answer: 0,
    explanation: "Il file distingue biotecnologie tradizionali e innovative."
  },
  {
    id: "agro-063",
    source: "agro",
    topic: "Competitivita",
    question: "La minaccia di prodotti sostitutivi sussiste quando:",
    options: ["il prezzo del prodotto sostitutivo incide sulla quantita venduta del prodotto che puo sostituire.", "il prodotto sostitutivo non influenza in alcun modo prezzi e vendite del prodotto considerato."],
    answer: 0,
    explanation: "La minaccia esiste quando un sostituto influenza domanda e vendite del prodotto considerato."
  },
  {
    id: "agro-064",
    source: "agro",
    topic: "Qualita alimentare",
    question: "La qualita nell'agroalimentare e:",
    options: ["l'insieme delle proprieta e caratteristiche dell'alimento che soddisfano le esigenze.", "la sola quantita prodotta indipendentemente dalle caratteristiche del prodotto."],
    answer: 0,
    explanation: "La qualita e legata alle proprieta e caratteristiche che rispondono alle esigenze."
  },
  {
    id: "agro-065",
    source: "agro",
    topic: "Canali distributivi",
    question: "Il canale distributivo tradizionale e caratterizzato da:",
    options: ["assenza di qualunque formalizzazione delle relazioni fra i diversi membri del canale.", "integrazione proprietaria completa tra tutti i soggetti della filiera."],
    answer: 0,
    explanation: "La caratteristica centrale e l'assenza di formalizzazione tra i membri del canale."
  },
  {
    id: "agro-066",
    source: "agro",
    topic: "Sistema agroalimentare",
    question: "Il sistema agroalimentare e:",
    options: ["una categoria storica legata all'evoluzione dell'agricoltura, allo sviluppo economico e alla sua interpretazione da parte degli economisti agrari.", "un elenco fisso di sole colture cerealicole valido in ogni Paese e in ogni epoca."],
    answer: 0,
    explanation: "Il file lo presenta come categoria storica legata all'evoluzione dell'agricoltura e dello sviluppo economico."
  },
  {
    id: "agro-067",
    source: "agro",
    topic: "Restrizioni verticali",
    question: "La quantita imposta e:",
    options: ["una restrizione verticale posta dal produttore nei confronti del venditore.", "una misura catastale della superficie agricola utilizzata."],
    answer: 0,
    explanation: "La quantita imposta rientra fra le restrizioni verticali del produttore verso il venditore."
  }
];

QUESTION_BANK.push(...AGRO_QUESTIONS);
