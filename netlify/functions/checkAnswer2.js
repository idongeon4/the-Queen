exports.handler = async function(event, context) {
    const { answer } = JSON.parse(event.body);

    // 두 번째 퍼즐의 정답
    const correctAnswer = 'bdace';

    // 사용자의 답과 실제 정답을 비교 (이번에는 소문자로 통일)
    const isCorrect = answer.toLowerCase() === correctAnswer;

    return {
        statusCode: 200,
        body: JSON.stringify({ correct: isCorrect })
    };
};
