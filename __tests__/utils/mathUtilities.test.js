const { isCorrectAnswer, getQuestion } = require("../../utils/mathUtilities");

describe("Tests to make sure a question is properly generated", () => {
  it("Generates a question", () => {
    const question = getQuestion();
    expect(typeof question).toBe("object");
    expect(question).toHaveProperty("questionText");
    expect(question).toHaveProperty("operand1");
    expect(question).toHaveProperty("operand2");
    expect(question).toHaveProperty("operator");

    // Check if operand1 and operand2 are numbers
    expect(typeof question.operand1).toBe("number");
    expect(typeof question.operand2).toBe("number");

    // Check if the operator is one of the allowed operators
    const validOperators = ["+", "-", "*", "/"];
    expect(validOperators).toContain(question.operator);
  });
});

describe("Tests for isCorrectAnswer", () => {
        it("should return false for an incorrect answer", () => {
          const question = { operand1: 5, operand2: 3, operators: "+" };
          const incorrectAnswer = 9;
          expect(isCorrectAnswer(question, incorrectAnswer)).toBe(false);  
        });
        it("should return true for the correct answer", () => {
          const question = { operand1: 5, operand2: 3, operator: "+" };
          const correctAnswer = 8;
          expect(isCorrectAnswer(question, correctAnswer)).toBe(true);  
        });
});