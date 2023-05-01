import throttle from 'lodash.throttle';

const refs = {
  formEl: document.querySelector('.feedback-form'),
};

refs.formEl.addEventListener('input', throttle(onFormInput, 500));
refs.formEl.addEventListener('submit', onSubmitForm);

let dataObj = {};

if (localStorage.getItem('feedback-form-state') !== null) {
  dataObj = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (dataObj.email !== undefined) {
    refs.formEl.firstElementChild.children[0].value = dataObj.email.trim();
  } else { 
    refs.formEl.firstElementChild.children[0].value = "";
  }

  if (dataObj.message !== undefined) {
    refs.formEl.firstElementChild.nextElementSibling.children[0].value =
      dataObj.message.trim();
  } else { 
    refs.formEl.firstElementChild.nextElementSibling.children[0].value = '';
  }
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

  if (dataObj.email === undefined || dataObj.message === undefined) { 
    return alert('Поля мають бути заповнені')
  };

  console.log(dataObj);
  localStorage.clear();
  dataObj = {};

  refs.formEl.firstElementChild.children[0].value = "";
  refs.formEl.firstElementChild.nextElementSibling.children[0].value = "";
}
