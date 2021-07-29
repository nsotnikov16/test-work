import maskPhone from "./maskPhone.js";

const clickMeButton = document.querySelector('.button-main')
const popup = document.querySelector('.popup')
const popupClose = popup.querySelector('.popup__close')
const form = document.forms.form;

function openPopup() {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', handleEscClose)
}

function closePopup() {
    popup.classList.remove('popup_opened')
}

function handleOverlayClick (evt) {
    evt.target === evt.currentTarget && closePopup()
}

function handleEscClose (evt) {
    evt.keyCode === 27 && closePopup()
    return document.removeEventListener('keydown', handleEscClose)
}

async function submitForm(evt) {
    evt.preventDefault();

    let formData = new FormData(form);

    form.classList.add('_sending');

    let response = await fetch('send.php', {
        method: 'POST',
        body: formData
    });
    if (response.ok) {
        let result = await response.json();
        alert(result.message);
        form.reset();
        form.classList.remove('_sending');
    } else {
        alert("Ошибка");
        form.classList.remove('_sending');
    }
}

maskPhone("#tel")

popup.addEventListener('click', handleOverlayClick)
clickMeButton.addEventListener('click', openPopup)
popupClose.addEventListener('click', closePopup)

form.addEventListener('submit', submitForm)