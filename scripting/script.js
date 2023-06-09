const inputs = document.querySelectorAll('form .inputs input');
const eye = document.querySelector('form .inputs .password i');
 inputs.forEach((input) => {
  input.addEventListener('focus', (e) => {
    e.target.labels[0].style.animation = 'moveUp .2s forwards';
  });
   input.addEventListener('blur', (e) => {
    if (e.target.value !== '') return;
    e.target.labels[0].style.animation = 'moveDown .2s forwards';
  });
});
 eye.addEventListener('click', (e) => {
  inputs[1].attributes[0].value =
    inputs[1].attributes[0].value === 'password' ? 'text' : 'password';
   e.target.className =
    e.target.className === 'fa-solid fa-eye'
      ? 'fa-solid fa-eye-slash'
      : 'fa-solid fa-eye';
});
 const lis = document.querySelectorAll('form .password-rules li');
const passwordField = inputs[1];
 const regexPatterns = [
  /.{8,}/ig,
  /\w*[A-Z]\w*/g,
  /\w*[0-9]\w*/ig,
  /\W/g
];
 passwordField.addEventListener('input', () => {
  regexPatterns.forEach((regex, index) => {
    if (passwordField.value.match(regex) !== null) {
      lis[index].style.color = 'var(--main-color)';
      lis[index].children[0].className = 'fa-solid fa-circle-check';
    } else {
      lis[index].style.color = '#eee';
      lis[index].children[0].className = 'fa-regular fa-circle-check';
    }
  });
});
 const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  let isPasswordValid;
  lis.forEach((li) => {
    if (li.style.color === 'var(--main-color)') {
      isPasswordValid = true;
    } else {
      li.style.color = 'red';
      li.children[0].className = 'fa-regular fa-circle-xmark';
      isPasswordValid = false;
    }
  });
   if (!isPasswordValid) {
    e.preventDefault();
  }
});