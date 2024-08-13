document.addEventListener('DOMContentLoaded', function () {
  const activeStep = document.querySelector('.step.active');
  if (activeStep) {
    const stepNumber = activeStep.getAttribute('data-step');
    document.getElementById(`step${stepNumber}-content`).style.display =
    'block';
  }
  
  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => {
    step.addEventListener('click', function () {
      document
        .querySelectorAll('.step')
        .forEach((s) => s.classList.remove('active'));

      document
        .querySelectorAll('.step-content')
        .forEach((content) => (content.style.display = 'none'));

      this.classList.add('active');

      const stepNumber = this.getAttribute('data-step');
      document.getElementById(`step${stepNumber}-content`).style.display =
        'block';

      document.getElementById(
        'mainImage'
      ).src = `assets/images/step${stepNumber}.jpg`;
    });
  });
});
