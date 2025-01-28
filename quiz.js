function checkAnswer() {
  var correctAnswer = "4";
  var userAnswer = document.querySelector('input[name="quiz"]:checked').value;
  if (userAnswer === correctAnswer) {
    document.getElementById("feedback").textContent = ["Correct! Well Done."];
  } else {
    document.getElementById("feedback").textContent = [
      "That's incorrect. Try Again!",
    ];
  }
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
