const levelConfig = {
  easy: { label: "Easy", timeout: 15, base: 100 },
  medium: { label: "Medium", timeout: 17, base: 150 },
  hard: { label: "Hard", timeout: 20, base: 200 }
};

const questionBank = {
  easy: [
    { cat: "HTML BASICS", type: "single", q: "What does HTML stand for?", a: ["HyperText Markup Language", "High Transfer Machine Logic", "Home Tool Markup Language", "Hyperlink Text Management"], correct: 0, why: "HTML structures the content and layout of a webpage." },
    { cat: "CSS", type: "single", q: "Which property controls text color?", a: ["font-weight", "text-color", "color", "font-size"], correct: 2, why: "The color property changes the text's visual color." },
    { cat: "JAVASCRIPT", type: "boolean", q: "const variables can be reassigned later.", a: ["True", "False"], correct: 1, why: "const creates a constant reference, so it cannot be reassigned." },
    { cat: "UX", type: "multi", q: "Which are valid CSS layout methods?", a: ["Flexbox", "Grid", "SQL", "Media query"], correct: [0, 1, 3], why: "Flexbox, Grid, and media queries are all part of modern CSS layout and responsiveness." },
    { cat: "DOM", type: "single", q: "Which method selects an element by ID in JavaScript?", a: ["querySelector()", "getElementById()", "innerHTML", "style()"], correct: 1, why: "getElementById() targets a specific element by its HTML id attribute." }
  ],
  medium: [
    { cat: "CSS", type: "single", q: "Which CSS rule makes a box centered both horizontally and vertically with Flexbox?", a: ["display:flex; justify-content:center; align-items:center;", "position:absolute; left:50%; top:50%;", "float:center;", "transform: center;"], correct: 0, why: "Flexbox with justify-content and align-items centers the item in both axes." },
    { cat: "JAVASCRIPT", type: "boolean", q: "A closure allows an inner function to access variables from its parent scope.", a: ["True", "False"], correct: 0, why: "Closures preserve access to outer lexical scope even after the outer function returns." },
    { cat: "HTML", type: "single", q: "Which attribute links a webpage to its style sheet?", a: ["src", "href", "rel", "class"], correct: 2, why: "The rel attribute is often set to stylesheet when linking a CSS file." },
    { cat: "JAVASCRIPT", type: "multi", q: "Which array methods return a new array without mutating the original?", a: ["map()", "filter()", "push()", "forEach()"], correct: [0, 1], why: "map() and filter() create new arrays while leaving the original unchanged." },
    { cat: "ACCESSIBILITY", type: "single", q: "Why are semantic HTML tags important?", a: ["They make content invisible", "They improve structure and accessibility", "They only affect colors", "They slow down rendering"], correct: 1, why: "Semantic elements give meaning to content and improve accessibility and SEO." }
  ],
  hard: [
    { cat: "JAVASCRIPT", type: "single", q: "What does event.preventDefault() do?", a: ["Stops the browser from loading the page", "Prevents the default browser action for an event", "Pauses all timers", "Removes the DOM node"], correct: 1, why: "preventDefault() blocks an event's default behavior, such as form submission or link navigation." },
    { cat: "CSS", type: "boolean", q: "CSS custom properties (variables) can be used in multiple places and updated dynamically.", a: ["True", "False"], correct: 0, why: "Custom properties allow reusable values and can be changed at runtime." },
    { cat: "JS PERFORMANCE", type: "multi", q: "Which are common ways to optimize front-end performance?", a: ["Lazy loading images", "Minifying assets", "Using inline CSS for every element", "Caching static resources"], correct: [0, 1, 3], why: "Lazy loading, minifying, and caching improve loading speed and reduce unnecessary work." },
    { cat: "ASYNCHRONOUS JS", type: "single", q: "Which keyword is used to wait for a promise-based function in a cleaner synchronous style?", a: ["await", "continue", "yield", "return"], correct: 0, why: "await pauses execution in async functions until a Promise resolves." },
    { cat: "WEB ARCHITE", type: "single", q: "What is the main purpose of a design system?", a: ["To replace JavaScript", "To keep UI patterns consistent and reusable", "To remove CSS from a project", "To hide semantic HTML"], correct: 1, why: "Design systems improve consistency, speed, and maintainability across interfaces." }
  ]
};

const $ = id => document.getElementById(id);

const state = {
  level: "easy",
  questions: [],
  index: 0,
  score: 0,
  correct: 0,
  streak: 0,
  gameStart: 0,
  questionStart: 0,
  timerId: null,
  selected: [],
  currentQuestion: null,
  isAnswered: false,
  hintsLeft: 2,
  halfUsed: false
};

const shuffle = items => {
  const arr = [...items];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};

const pickQuestions = level => shuffle(questionBank[level]).slice(0, 5);

const arraysEqual = (a, b) => a.length === b.length && a.every((value, index) => value === b[index]);

const resetButtons = () => {
  $("fiftyBtn").disabled = false;
  $("fiftyBtn").textContent = "50/50";
  $("hintBtn").disabled = false;
  document.querySelectorAll(".option").forEach(option => {
    option.style.display = "flex";
  });
};

function startGame() {
  state.level = document.querySelector(".level-btn.is-selected")?.dataset.level || "easy";
  state.questions = pickQuestions(state.level);
  state.index = 0;
  state.score = 0;
  state.correct = 0;
  state.streak = 0;
  state.hintsLeft = 2;
  state.halfUsed = false;
  state.gameStart = Date.now();

  $("welcome").classList.add("hidden");
  $("quiz").classList.remove("hidden");
  $("result").classList.add("hidden");
  $("result").classList.remove("show");
  resetButtons();
  showQuestion();
}

function showQuestion() {
  clearInterval(state.timerId);
  state.selected = [];
  state.isAnswered = false;
  state.halfUsed = false;
  state.currentQuestion = state.questions[state.index];
  state.questionStart = Date.now();

  const levelSettings = levelConfig[state.level];
  const timeLimit = levelSettings.timeout;

  $("levelBadge").textContent = levelSettings.label.toUpperCase();
  $("progressText").textContent = `QUESTION ${state.index + 1} / ${state.questions.length}`;
  $("scoreLive").textContent = `${state.score} pts`;
  $("bar").style.width = `${((state.index + 1) / state.questions.length) * 100}%`;
  $("category").textContent = state.currentQuestion.cat;
  $("q").textContent = state.currentQuestion.q;
  $("feedback").textContent = "";
  $("feedback").className = "";
  $("next").disabled = true;
  $("next").textContent = state.index === state.questions.length - 1 ? "See my result →" : "Next question →";
  $("timer").textContent = `${timeLimit}s`;
  $("streak").textContent = `Streak: ${state.streak}`;
  $("hintStatus").textContent = `Hints left: ${state.hintsLeft}`;

  resetButtons();
  renderAnswers(state.currentQuestion);

  state.timerId = setInterval(() => {
    const elapsed = Math.floor((Date.now() - state.questionStart) / 1000);
    const remaining = timeLimit - elapsed;

    if (remaining <= 0) {
      handleTimeout();
      return;
    }

    $("timer").textContent = `${remaining}s`;
  }, 200);
}

function renderAnswers(question) {
  const answerMarkup = question.a
    .map((option, index) => `<button class="option" data-index="${index}" type="button"><span>${question.type === "multi" ? "✓" : "ABCDEFGHIJKLMNOPQRSTUVWXYZ"[index]}</span>${option}</button>`)
    .join("");

  $("answers").innerHTML = answerMarkup;

  document.querySelectorAll(".option").forEach(btn => {
    const index = Number(btn.dataset.index);
    btn.addEventListener("click", () => {
      if (question.type === "multi") {
        toggleMulti(index, btn);
      } else {
        selectSingle(index);
      }
    });
  });

  if (question.type === "multi") {
    const submit = document.createElement("button");
    submit.type = "button";
    submit.className = "submit-btn";
    submit.textContent = "Submit answer";
    submit.addEventListener("click", submitMultiAnswer);
    $("answers").appendChild(submit);
  }
}

function toggleMulti(index, btn) {
  const selected = state.selected.includes(index);

  if (selected) {
    state.selected = state.selected.filter(item => item !== index);
    btn.classList.remove("selected");
  } else {
    state.selected = [...state.selected, index];
    btn.classList.add("selected");
  }
}

function selectSingle(index) {
  if (state.isAnswered) return;

  state.selected = [index];
  document.querySelectorAll(".option").forEach((option, optIndex) => {
    option.classList.toggle("selected", optIndex === index);
    option.disabled = true;
  });
  evaluateAnswer();
}

function submitMultiAnswer() {
  if (state.isAnswered) return;
  if (!state.selected.length) {
    $("feedback").textContent = "Pick at least one answer to submit.";
    $("feedback").className = "warning";
    return;
  }

  document.querySelectorAll(".option").forEach(option => option.disabled = true);
  evaluateAnswer();
}

function evaluateAnswer() {
  if (state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timerId);

  const question = state.currentQuestion;
  const isCorrect = question.type === "multi"
    ? arraysEqual([...state.selected].sort(), [...question.correct].sort())
    : state.selected[0] === question.correct;

  const elapsed = Math.max(0, Math.round((Date.now() - state.questionStart) / 1000));
  const timeLeft = Math.max(0, levelConfig[state.level].timeout - elapsed);

  let message = "";
  let className = "";

  if (isCorrect) {
    state.correct += 1;
    state.streak += 1;

    const base = levelConfig[state.level].base;
    const speedyBonus = Math.round((timeLeft / levelConfig[state.level].timeout) * base * 0.35);
    const streakBonus = state.streak > 1 ? state.streak * 20 : 0;
    const gained = base + speedyBonus + streakBonus;

    state.score += gained;
    message = `✨ Correct! +${gained} pts · ${question.why}`;
    className = "correct";

    $("streak").textContent = `Streak: ${state.streak}`;
  } else {
    state.streak = 0;
    $("streak").textContent = "Streak: 0";
    message = `Not quite. ${question.why}`;
    className = "wrong";
  }

  document.querySelectorAll(".option").forEach((option, optIndex) => {
    if (question.type === "multi") {
      if (question.correct.includes(optIndex)) {
        option.classList.add("correct");
      } else if (state.selected.includes(optIndex)) {
        option.classList.add("wrong");
      }
    } else {
      if (optIndex === question.correct) {
        option.classList.add("correct");
      } else if (optIndex === state.selected[0]) {
        option.classList.add("wrong");
      }
    }
    option.disabled = true;
  });

  $("feedback").textContent = message;
  $("feedback").className = className;
  $("scoreLive").textContent = `${state.score} pts`;
  $("next").disabled = false;
  $("quiz").classList.add(`${className}-flash`);
  setTimeout(() => $("quiz").classList.remove(`${className}-flash`), 420);
}

function handleTimeout() {
  if (state.isAnswered) return;
  state.isAnswered = true;
  clearInterval(state.timerId);

  state.streak = 0;
  $("streak").textContent = "Streak: 0";

  const question = state.currentQuestion;
  document.querySelectorAll(".option").forEach((option, optIndex) => {
    if (question.type === "multi") {
      if (question.correct.includes(optIndex)) option.classList.add("correct");
    } else if (optIndex === question.correct) {
      option.classList.add("correct");
    }
    option.disabled = true;
  });

  $("feedback").textContent = `⏱️ Time's up! ${question.why}`;
  $("feedback").className = "wrong";
  $("next").disabled = false;
  $("quiz").classList.add("wrong-flash");
  setTimeout(() => $("quiz").classList.remove("wrong-flash"), 420);
}

function useHint() {
  if (state.isAnswered || state.hintsLeft <= 0) return;

  state.hintsLeft -= 1;
  $("hintStatus").textContent = `Hints left: ${state.hintsLeft}`;

  const question = state.currentQuestion;
  const removable = question.type === "multi"
    ? question.a.map((_, index) => index).filter(index => !question.correct.includes(index))
    : question.a.map((_, index) => index).filter(index => index !== question.correct);

  const toRemove = shuffle(removable).slice(0, 2);
  document.querySelectorAll(".option").forEach((option, index) => {
    if (toRemove.includes(index)) option.style.display = "none";
  });

  $("feedback").textContent = `💡 Hint: ${question.why}`;
  $("feedback").className = "hint";
}

function useFifty() {
  if (state.isAnswered || state.halfUsed) return;

  state.halfUsed = true;
  const question = state.currentQuestion;
  const removable = question.type === "multi"
    ? question.a.map((_, index) => index).filter(index => !question.correct.includes(index))
    : question.a.map((_, index) => index).filter(index => index !== question.correct);

  const toHide = shuffle(removable).slice(0, question.type === "boolean" ? 1 : 2);
  document.querySelectorAll(".option").forEach((option, index) => {
    if (toHide.includes(index)) option.style.display = "none";
  });

  $("feedback").textContent = "🧠 50/50 used — the right answer is closer now.";
  $("feedback").className = "hint";
  $("fiftyBtn").disabled = true;
  $("fiftyBtn").textContent = "50/50 used";
}

function nextQuestion() {
  state.index += 1;
  if (state.index < state.questions.length) {
    showQuestion();
  } else {
    finishGame();
  }
}

function finishGame() {
  clearInterval(state.timerId);
  const elapsedMs = Date.now() - state.gameStart;
  const percentage = Math.round((state.correct / state.questions.length) * 100);

  $("quiz").classList.add("hidden");
  $("result").classList.remove("hidden");
  $("result").classList.add("show");

  $("finalScore").textContent = `${state.correct}/${state.questions.length}`;
  $("finalPoints").textContent = state.score;
  $("finalPercent").textContent = `${percentage}%`;
  $("finalTime").textContent = `${(elapsedMs / 1000).toFixed(1)}s`;

  $("finalTitle").textContent = percentage === 100
    ? "Perfect score! 🎉"
    : percentage >= 70
      ? "Excellent work! ✨"
      : percentage >= 45
        ? "Strong run! 🚀"
        : "Keep learning! 🌱";

  $("finalText").textContent = percentage === 100
    ? "You nailed every challenge — this was a flawless run."
    : percentage >= 70
      ? "You have serious web-dev instincts. Keep stacking those streaks!"
      : percentage >= 45
        ? "Solid effort. A few more rounds and you’ll be unstoppable."
        : "Every expert started with a first attempt. Try again and build the streak!";
}

function resetToWelcome() {
  $("result").classList.add("hidden");
  $("result").classList.remove("show");
  $("quiz").classList.add("hidden");
  $("welcome").classList.remove("hidden");

  document.querySelectorAll(".level-btn").forEach((button, index) => {
    button.classList.toggle("is-selected", index === 0);
  });
  state.level = "easy";
}

document.querySelectorAll(".level-btn").forEach(button => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".level-btn").forEach(btn => {
      btn.classList.toggle("is-selected", btn === button);
    });
    state.level = button.dataset.level;
  });
});

$("start").addEventListener("click", startGame);
$("next").addEventListener("click", nextQuestion);
$("restart").addEventListener("click", resetToWelcome);
$("hintBtn").addEventListener("click", useHint);
$("fiftyBtn").addEventListener("click", useFifty);