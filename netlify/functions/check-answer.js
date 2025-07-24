exports.handler = async function(event, context) {
    const CORRECT_ANSWER = process.env.CORRECT_ANSWER;
    const REDIRECT_URL = process.env.REDIRECT_URL;
    const { userAnswer } = JSON.parse(event.body);

    if (userAnswer && userAnswer.toLowerCase() === CORRECT_ANSWER) {
        return {
            statusCode: 200,
            body: JSON.stringify({ redirectUrl: REDIRECT_URL })
        };
    } else {
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Wrong answer' })
        };
    }
};
