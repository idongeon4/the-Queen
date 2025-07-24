// netlify/functions/check-answer.js

exports.handler = async function(event, context) {
    // 보안을 위해 실제 정답과 링크는 환경 변수에서 가져옵니다.
    // 이 값들은 GitHub에 올라가지 않습니다.
    const CORRECT_ANSWER = process.env.CORRECT_ANSWER;
    const REDIRECT_URL = process.env.REDIRECT_URL;

    // 클라이언트(브라우저)에서 보낸 데이터를 파싱합니다.
    const { userAnswer } = JSON.parse(event.body);

    // 정답 확인
    if (userAnswer && userAnswer.toLowerCase() === CORRECT_ANSWER) {
        // 정답일 경우: 성공 상태(200)와 함께 리디렉션할 URL을 응답으로 보냅니다.
        return {
            statusCode: 200,
            body: JSON.stringify({ redirectUrl: REDIRECT_URL })
        };
    } else {
        // 오답일 경우: 잘못된 요청 상태(400)와 에러 메시지를 응답으로 보냅니다.
        return {
            statusCode: 400,
            body: JSON.stringify({ message: 'Wrong answer' })
        };
    }
};
