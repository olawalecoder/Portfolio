const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
  const email = document.getElementById('email').value;
  const message= document.getElementById('message');
  const pattern = /^[^]+@[^]+\.[a-z]{2,3}$/;
  if (email === email.toLowerCase() && email.match(pattern)) {
   message.innerHTML = 'Your Email Address is Valid. Form is sent.';
    message.style.color = '#00ff00';
    form.submit();
  } else {
   message.innerHTML = 'Please use lowercase!. Form is not sent';
    message.style.color = '#ff0000';
    e.preventDefault();
  }
});



