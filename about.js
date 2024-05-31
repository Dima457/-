function showDialog() {
    var name = prompt("Введите сюда своё имя", "Введите имя");
    alert("Ваше имя: " + name);

    var restart = confirm("Начать заново?");
    if (restart) {
        var response = confirm("Не надоело?");
        if (response) {
            alert("Не надоело?");
        } else {
            alert("Ну и правильно!");
        }
    }
}