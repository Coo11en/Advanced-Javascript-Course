import "./style.scss"

var regex_email = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;
var regex_tel = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
var regex_com = /^[a-zA-Zа-яёЁА-Я\.\,\!\?\:\(\)]{2,200}$/;


const email = document.querySelector('.email');
const mobile = document.querySelector('.tel');
const com = document.querySelector('.com');

email.addEventListener("input", function (event) {
    var email_v = document.forma.email.value;
    if (regex_email.test(email_v) === false) {
        email.setCustomValidity("Ошибка!!! Неправильный Email");
    } else {
        email.setCustomValidity("");
    }
    console.log(regex_email.test(email_v))
})

mobile.addEventListener("input", function (event) {
    var mobile_v = document.forma.tel.value;
    if (regex_tel.test(mobile_v) === false) {
        mobile.setCustomValidity("Ошибка!!! Неправильный номер телефона");
    } else {
        mobile.setCustomValidity("");
    }
    console.log(regex_tel.test(mobile_v))
})

com.addEventListener("input", function (event) {
    var com_v = document.forma.com.value;
    if (regex_com.test(com_v) === false) {
        com.setCustomValidity("Ошибка!!! Некоректный символ коментария");
    } else {
        com.setCustomValidity("");
    }
    console.log(regex_com.test(com_v))
})