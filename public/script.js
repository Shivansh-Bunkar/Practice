// FAQ Toggle Logic
const questions = document.querySelectorAll('.question');

questions.forEach(question => {
  question.addEventListener('click', () => {
    const currentAnswer = question.nextElementSibling;

    // Close all other answers
    document.querySelectorAll('.answer').forEach(answer => {
      if (answer !== currentAnswer) {
        answer.classList.remove('visible');
      }
    });

    // Toggle clicked answer
    currentAnswer.classList.toggle('visible');
  });
});


// Form Handling (works on static site)
const form = document.getElementById('faqForm');
const formMessage = document.getElementById('formMessage');

if (form && formMessage) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const question = form.question.value.trim();

    if (!name || !email || !question) {
      formMessage.style.color = "red";
      formMessage.textContent = "Please fill all fields.";
      return;
    }

    // Simulate submission (since no backend)
    formMessage.style.color = "green";
    formMessage.textContent = "Your question has been submitted successfully!";
    form.reset();
  });
}
