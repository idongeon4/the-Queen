exports.handler = async function(event, context) {
    try {
        const { answer } = JSON.parse(event.body);
        const correctAnswer = 'bdace';
        const isCorrect = answer && answer.toLowerCase() === correctAnswer;

        return {
            statusCode: 200,
            body: JSON.stringify({ correct: isCorrect })
        };

    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to process the request' })
        };
    }
};
