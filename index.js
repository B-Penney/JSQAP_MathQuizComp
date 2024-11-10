const express = require("express");
const app = express();
const port = 3000;
const session = require("express-session");
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// Set up session middleware
app.use(
  session({
    secret: "math-key",
    resave: false,
    saveUninitialized: true,
  })
);

let streaks = 0;
let currentQuestion = getQuestion();
let leaderboards = [];

// Renders homepage
app.get("/", (req, res) => {
  res.render("index", { streaks });
});

// Renders quiz page
app.get('/quiz', (req, res) => {
    res.render('quiz', { streaks, question: currentQuestion });
});

// Renders quiz completion page and updates leaderboards
app.get("/completed_quiz", (req, res) => {
    res.render("completed_quiz", { streaks });
});

// Renders leaderboards page
app.get("/leaderboards", (req, res) => {
  res.render("leaderboards", { leaderboards });
});

// Handles quiz submissions
app.post("/quiz", (req, res) => {
  const userAnswer = parseInt(req.body.answer, 10);
  if (isCorrectAnswer(userAnswer, currentQuestion)) {
    streaks++;
    currentQuestion = getQuestion();
    res.redirect("/quiz");
  } else {
    streaks = 0;
    res.redirect("/completed_quiz");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});