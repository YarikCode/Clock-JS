let time = document.querySelector(".time");
let date = document.querySelector(".date");

let days = Array("Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"); 
let mounths = Array("Января", "Февраля", "Марта", "Апереля", "Мая", "Июня", "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря");

let timer = setInterval(() => {
    let nowDate = new Date();

    let hours = String(nowDate.getHours());
    let minutes = String(nowDate.getMinutes());
    let seconds = String(nowDate.getSeconds());
    if(hours.length < 2){
        hours = "0" + hours;
    }
    if(minutes.length < 2){
        minutes = "0" + minutes;
    }
    if(seconds.length < 2){
        seconds = "0" + seconds;
    }

    time.innerText = hours + ":" + minutes + ":" + seconds;
    date.innerText = days[nowDate.getDay()] + ", " + nowDate.getDate() + " " + mounths[nowDate.getMonth()];
},1000);