/**
 * Gets a random multiplication, division, subtraction or addition question
 * 
 * @returns {} The randomly generated math question
 */
function getQuestion() {
        const num1 = Math.floor(Math.random() * 10);
        const num2 = Math.floor(Math.random() * 10);
        return {
            text: `${num1} + ${num2}`,
            answer: num1 + num2
        };
    }
    
/**
 * Parses the provided question and gets whether or not the provided answer is correct
 * 
 * @param {*} question The question being answered
 * @param {*} answer The potential answer
 * @returns {boolean} True if the answer was correct, false otherwise.
 */

function checkAnswer(userAnswer, isCorrectAnswer) {
    return parseFloat(userAnswer) === isCorrectAnswer;
  }
  const userAnswer = "42";
  const isCorrectAnswer = 42;
  const result = checkAnswer(userAnswer, isCorrectAnswer);
  console.log(result);
  
module.exports = {
    getQuestion,
    isCorrectAnswer
}