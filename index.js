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

function submitForm(evt) {
    evt.preventDefault()

    fetch('/send.php', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            email: form.querySelector('#email').value,
            tel: form.querySelector('#tel').value
        })
    }).then(res => {
        if(res.ok) {
            return res.text()
        }

        return Promise.reject(`Ошибка: ${res.status}, проверьте URL`);
    })
}

maskPhone("#tel")

popup.addEventListener('click', handleOverlayClick)
clickMeButton.addEventListener('click', openPopup)
popupClose.addEventListener('click', closePopup)

form.addEventListener('submit', submitForm)