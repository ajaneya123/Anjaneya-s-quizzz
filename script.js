function checkAnswers() {
  let score = 0;
  const totalQuestions = 5;

  const answers = [
    document.getElementById("q1").value.toLowerCase(),
    document.getElementById("q2").value.toLowerCase(),
    document.getElementById("q3").value.toLowerCase(),
    document.getElementById("q4").value.toLowerCase(),
    document.getElementById("q5").value.toLowerCase(),
  ];

  const correctAnswers = [
    "new delhi",
    "qin shi huang",
    "blue",
    "8",
    "sunlight"
  ];

  answers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score++;
    }
  });

  let message = `You finished the quiz!<br>Your score is: ${score} out of ${totalQuestions}<br>`;
  if (score === totalQuestions) {
    message += "You're a quiz master!";
  } else if (score >= 3) {
    message += "Great job!";
  } else {
    message += "Keep learning and you'll get even better!";
  }

  document.getElementById("result").innerHTML = message;
}
