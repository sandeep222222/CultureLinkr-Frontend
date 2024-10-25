document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const form = document.getElementById('contactForm');

  form.addEventListener('submit', (event) => {
      event.preventDefault();

     
      root.innerHTML = `
    <div class="bg-container">
      <p class="submit-message">Thank You! Your message has been sent successfully<p>
    </div>
  `;
  });

}); 

  

 

  