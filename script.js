function activateStep(activeStep) {
  const stepNumber = activeStep.getAttribute('data-step');
  const stepNumberContent = document.getElementById(
    `step${stepNumber}-content`
  );
  stepNumberContent.style.visibility = 'visible';
  stepNumberContent.style.opacity = '1';
  stepNumberContent.style.height = 'auto';
}

document.addEventListener('DOMContentLoaded', function () {
  const activeStep = document.querySelector('.step.active');
  if (activeStep) {
    activateStep(activeStep);
  }

  const steps = document.querySelectorAll('.step');
  steps.forEach((step) => {
    step.addEventListener('click', function () {
      document
        .querySelectorAll('.step')
        .forEach((s) => s.classList.remove('active'));

      document.querySelectorAll('.step-content').forEach((content) => {
        content.style.visibility = 'hidden';
        content.style.opacity = '0';
        content.style.height = '0';
      });

      this.classList.add('active');
      activateStep(this);

      document.getElementById(
        'mainImage'
      ).src = `assets/images/step${this.getAttribute('data-step')}.jpg`;
    });
  });
});
