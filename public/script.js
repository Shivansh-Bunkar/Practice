const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const currentAnswer = question.nextElementSibling;

    // close all other answers
    document.querySelectorAll('.answer').forEach(answer => {
      if (answer !== currentAnswer) {
        answer.classList.remove('visible');
      }
    });

    // toggle clicked answer
    currentAnswer.classList.toggle('visible');
  });
});
