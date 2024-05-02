console.log("Form Validation")

//Part 1
const form = document.getElementById("errorDisplay");
errorDisplay.style.display = 'block';
errorDisplay.textContent = "errorMessage";

errorDisplinnerHtml = (<p>Trying to figure this out</p>);
console.log(errorDisplay)

// Part 2
form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);
const input = form.querySelectorAll ("input, textarea, select");
inputs.forEach(input => {
    input.addEventListener('input', handleInputChange);
  });
function handleSubmit(event) {
    event.preventDefault();

    let isValid = true;
    inputs.forEach(input => {
        const isInputValid = validateInput(input);
        if (!isInputValid) {
          isValid = false;
        }
      });
      if (isValid){
        console.log('Submittion successful');
      }
}
function showError(input, message) {
    const errorMessage = input.parentElement.querySelector('.error-message');
    errorMessage.textContent = message;
    input.classList.add('invalid');
    input.focus(); 
}

// Part 3