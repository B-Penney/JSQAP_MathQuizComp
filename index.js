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
    const streaks = 5; 
    const question = "What is 2 + 2?"; 
    res.render('quiz', { streaks, question });
});

// Renders quiz completion page and updates leaderboards
app.get("/completed_quiz", (req, res) => {
    // Implementation for this route
});

// Renders leaderboards page
app.get("/leaderboards", (req, res) => {
  res.render("leaderboards", { leaderboards });
});

// Handles quiz submissions
app.post("/quiz", (req, res) => {
  const userAnswer = parseInt(req.body.answer, 10);
  const currentQuestion = "What is 2 + 2?"; // Define currentQuestion
  if (isCorrectAnswer(userAnswer, currentQuestion)) {
    // Handle correct answer
  } else {
    // Handle incorrect answer
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});