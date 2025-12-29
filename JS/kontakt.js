document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const button = document.getElementById('submit-btn');

  button.addEventListener('click', async () => {
    const response = await fetch('https://formspree.io/f/xykybbll', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });

    if (response.ok) {
      window.location.href = "/kontakt/tack.html";
    } else {
      alert('Något gick fel. Försök igen.');
    }
  });
});



