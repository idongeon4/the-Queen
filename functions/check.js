exports.handler = async (event) => {
  const { answer } = JSON.parse(event.body);
  const correctAnswer = process.env.CORRECT_ANSWER;
  const nextUrl = process.env.NEXT_PAGE_URL;

  if (answer && answer.toLowerCase() === correctAnswer) {
    return {
      statusCode: 200,
      body: JSON.stringify({ correct: true, nextUrl: nextUrl }),
    };
  } else {
    return {
      statusCode: 200,
      body: JSON.stringify({ correct: false }),
    };
  }
};
