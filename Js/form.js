const form = document.getElementById('form');
const email = document.getElementsById('email');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	const emailValue = email.value;

	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else {
		setSuccessFor(email);
	}

  function setErrorFor(input, message) {
    const form = input.parentElement;
    const small = form.querySelector('small');
    form.className = 'form error';
    small.innerText = message;
  }
  
  function setSuccessFor(input) {
    const form = input.parentElement;
    form.className = 'form success';
  }