const btn = document.querySelector('[for="email"] > button');

btn.addEventListener('click', verifyEmailId);
document.querySelector('[for="email"] > input').addEventListener('keydown', clearPrompt);

function verifyEmailId() {
const email = document.querySelector('[for="email"] > input').value;

let emailArr = email.split('');
let test = false;

emailArr.forEach(elem => {
  if(elem === '@') {
    if(emailArr.slice(-4).join('') === '.com') {
       test = true};
  }
});
if(!test) {
  document.querySelector('.error').style.display = 'inline-block';
  document.querySelector('.prompt-message').style.display = 'inline-block';
}
}

function clearPrompt() {
  document.querySelector('.error').style.display = 'none';
  document.querySelector('.prompt-message').style.display = 'none';
}