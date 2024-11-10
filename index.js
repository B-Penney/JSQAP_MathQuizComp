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
app.get("/", (res) => {
    res.render("index", { streak });
});

// Renders quiz page
app.get("/quiz", (res) => {
    res.render("quiz", { streak, question: currentQuestion });
});

// Handles quiz submissions
app.post('/quiz', (req, res) => {
    const userAnswer = parseInt(req.body.answer, 10);
    if (userAnswer === isCorrectAnswer) {
        streak++; // Increase streak for correct answer
    } else {
        streak = 0; // Reset streak for incorrect answer
    }

    res.redirect('/quiz'); 
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
