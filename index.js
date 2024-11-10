const express = require("express");
const app = express();
const port = 3000;
const { getQuestion, isCorrectAnswer } = require("./utils/mathUtilities");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); 

let streak = 0;
let currentQuestion = getQuestion();

// Renders homepage
app.get("/", (req, res) => {
    res.render("index", { streak });
});

// Renders quiz page
app.get("/quiz", (req, res) => {
    res.render("quiz", { streak, question: currentQuestion });
});

// Handles quiz submissions
app.post("/quiz", (req, res) => {
    const { answer } = req.body;

    // Check if the answer is correct
    if (isCorrectAnswer(currentQuestion, answer)) {
        streak += 1;
        currentQuestion = getQuestion(); // Grabs a new question for the next quiz
        res.redirect("/quiz");
    } else {
        streak = 0;
        res.redirect("/"); // Redirect to homepage if the answer is incorrect
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
