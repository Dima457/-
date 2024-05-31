function entrance(){
    var password = "123456789"; // задаем верный пароль

    var inputPassword = prompt("Введите пароль"); // получаем введенный пользователем пароль
    if (inputPassword === password) { // сравниваем введенный пароль с верным паролем
        window.location.href = 'index.html'; // перенаправляем на страницу index.html
    } else {
        alert("пароль неверен!");
    }
}