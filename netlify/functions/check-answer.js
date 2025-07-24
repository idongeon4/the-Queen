exports.handler = async function(event) {
    try {
        const { answer } = JSON.parse(event.body);
        const correctAnswer = process.env.CORRECT_ANSWER;
        const nextUrl = process.env.NEXT_PAGE_URL;

        if (answer && answer.toLowerCase() === correctAnswer) {
            return {
                statusCode: 200,
                body: JSON.stringify({ correct: true, nextUrl: nextUrl })
            };
        } else {
            return {
                statusCode: 200,
                body: JSON.stringify({ correct: false })
            };
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: '오류 발생' })
        };
    }
};
