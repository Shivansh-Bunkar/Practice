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
const form = document.getElementById('faqForm');
const formMessage = document.getElementById('formMessage');

form.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = {
        name: form.name.value,
        email: form.email.value,
        question: form.question.value
    };

    try {
        const res = await fetch('/submit-question', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData)
        });

        if (res.ok) {
            formMessage.textContent = "Your question has been submitted!";
            form.reset();
        } else {
            formMessage.textContent = "Error submitting, try again.";
        }
    } catch (err) {
        formMessage.textContent = "Server error, try again later.";
    }
});
