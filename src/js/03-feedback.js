import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', throttle(onSubmitForm, 500));

let dataObj = {};

if (localStorage.getItem('feedback-form-state') !== null) {
  dataObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  refs.formEl.firstElementChild.children[0].value = dataObj.email;
  refs.formEl.firstElementChild.nextElementSibling.children[0].value = dataObj.message;
};

function onFormInput(e) {
  if (e.target.name === 'email') {
    dataObj.email = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
    console.log(localStorage);
  } else {
    dataObj.message = e.target.value;
    localStorage.setItem('feedback-form-state', JSON.stringify(dataObj));
    console.log(localStorage);
  
  }
}

function onSubmitForm(e) { 
  e.preventDefault();

  console.log(dataObj);
  localStorage.clear();

  refs.formEl.firstElementChild.children[0].value = "";
  refs.formEl.firstElementChild.nextElementSibling.children[0].value = "";
}
