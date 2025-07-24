netlify/functions/checkAnswer2.js/
  exports.handler = async function(event, context) {
    const { answer } = JSON.parse(event.body);
    const correctAnswer = 'bdace';
    const isCorrect = answer.toLowerCase() === correctAnswer;
    return {
        statusCode: 200,
        body: JSON.stringify({ correct: isCorrect })
    };
};
