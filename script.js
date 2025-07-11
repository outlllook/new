const next = document.querySelector('#next');
const active = document.querySelectorAll('.active');
const nonActive = document.querySelectorAll('.non-active');
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const emailValue = document.querySelector('.email-value');
// console.log(active, nonActive);

next.addEventListener('click', function() {
  for(let i = 0; i < nonActive.length; i++) {
    nonActive[i].classList.remove('non-active');
    // nonActive[i].classList.toggle('non-active');
  };

  for(let i = 0; i < active.length; i++) {
    active[i].classList.add('non-active');
    active[i].classList.remove('active');
  };

  emailValue.textContent = email.value;
})