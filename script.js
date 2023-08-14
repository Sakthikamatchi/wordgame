const questionElement = document.getElementById('question');
const answerInput = document.getElementById('answer');
const submitButton = document.getElementById('submitBtn');
const videoContainer = document.getElementById('videoContainer');

submitButton.addEventListener('click', checkAnswer);

function checkAnswer() {
  const userAnswer = answerInput.value.toLowerCase();
  if (userAnswer === 'mohan') {
    questionElement.textContent = 'Correct! Here is a video:';
    answerInput.style.display = 'none';
    submitButton.style.display = 'none';
    videoContainer.classList.remove('hidden');
  } else {
    questionElement.textContent = 'Incorrect. Try again!';
    answerInput.value = '';
  }
}
