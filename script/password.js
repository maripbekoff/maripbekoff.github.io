
let logIn = prompt('Введите пароль. Если вы не имеете доступа к странице, попросите у Марипбека Чингиза');

let password = "k8hb-d3lm-91mn";

while (logIn == '' || logIn == null) {
    logIn = prompt('Не правильный пароль.');
}

while (logIn != password) {
    logIn = prompt('Не правильный пароль.');
}

if (logIn == password) {
    alert("Доступ открыт!");
}