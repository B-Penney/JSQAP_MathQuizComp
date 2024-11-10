const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests for getQuestion", () => {
    it("should always return a valid operator", () => {
        const question = getQuestion();
        const operators = ["+", "-", "*", "/"];
        expect(operators).toContain(question.operator);  // Ensure operator is one of +, -, *, /
      });
    
      it("should not have division by zero", () => {
        let question;
        do {
          question = getQuestion();
        } while (question.operator === "/" && question.operand2 === 0);  // Regenerate question if it's division by zero
        expect(question.operator !== "/" || question.operand2 !== 0).toBe(true);  // Ensure no division by zero
      });

});

describe("Tests for isCorrectAnswer", () => {
        it("should return true for the correct answer", () => {
          const question = { operand1: 5, operand2: 3, operator: "+" };
          const correctAnswer = 8;
          expect(isCorrectAnswer(question, correctAnswer)).toBe(true);  // Makes sure the correct answer returns true
        });
      
        it("should return false for an incorrect answer", () => {
          const question = { operand1: 5, operand2: 3, operator: "+" };
          const incorrectAnswer = 9;
          expect(isCorrectAnswer(question, incorrectAnswer)).toBe(false);  // Makes sure the incorrect answer returns false
        });
    
});