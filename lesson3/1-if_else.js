//1
function showNum(num) {
    if(num === 0){
        console.log("Верно!");
    }else{
        console.log("Неверно!");
    }

}

showNum(1);
showNum(0);
showNum(-3);

//2
function showText(text) {
    if(text === "test"){
        console.log("Верно!");
    } else {
        console.log("Неверно!");
    }
}

showText('test');
showText('тест');
showText(3);

//3 задание

//Short
function getTrue(test) {
    (test === true) ? console.log("Верно!") : console.log("Неверно!");
}

getTrue(true);

//Long
function showBoolean(test) {
    if(test === true){
        console.log("Верно!");
    }else {
        console.log("Неверно!");
    }    
}

showBoolean(true);

//4 задание

function showSum(a, b) {
    var result = a+b;

    if(result > 5){
        console.log(result);
    } else if(result < 5) {
        console.log(result *= 10);
    }
}

showSum(2, 5);
showSum(3, 1);

//5 задание

function getSum(a) {
    if(a === 0 || a === 2){
        var b = a / 10;
    }else {
        b = a + 7;
    }
    console.log(b);
}

getSum(5);
getSum(0);
getSum(-3);
getSum(2);

//6 задание

function getNextSum(a, b) {
    if(a <= 1 & b >= 3){
        console.log(a + b);
    }else{
        console.log("Неверно!");
    }
}

getNextSum(1, 3);
getNextSum(0, 6);
getNextSum(3, 5);

//7 задание
 function showNextSun(a, b) {
     if((a > 2) & (a < 11) || (b >= 6) & (b < 14)){
         console.log( a + 2 );
     }else{
         console.log( a + 5 );
     }

 }

showNextSun(3, 5);
showNextSun(-1, 14);

//8 задание

function getSeason(num) {

    switch (num){
        case 1:
            console.log("Зима");
            break;
        case 2:
            console.log("Лето");
            break;
        case 3:
            console.log("Весна");
            break;
        case 4:
            console.log("Осень");
            break;
        default:
            console.log("Неверно!");
            break;
    }

}

getSeason(1);
getSeason(2);
getSeason(3);
getSeason(4);
getSeason(5);

//9 задание

//1)

function showFirst(lang) {
    var arr = [];

    if(lang == 'ru'){
        arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
        console.log(arr);
    }else if(lang == 'en'){
        arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        console.log(arr);
    }else if(lang == 'de'){
        arr = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend ', 'Sonntag' ];
        console.log(arr);
    }
}

showFirst('ru');

//2)

function showSecond(lang) {
    var arr = [];

    switch (lang){
        case 'ru':
            arr = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
            console.log(arr);
            break;
        case 'en':
            arr = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
            console.log(arr);
            break;
        case 'de':
            arr = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend ', 'Sonntag' ];
            console.log(arr);
            break;
        default:
            console.log("Неверно!");
            break;
    }
}

showSecond('en');
//3)

function showFhird(lang) {
    var arr = [
        ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
        ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Sonnabend ', 'Sonntag' ]
    ];
    if(lang == 'ru'){
        console.log(arr[0]);
    }else if(lang == 'en'){
        console.log(arr[1]);
    }else if(lang == 'de'){
        console.log(arr[2]);
    }
}

showFhird('de');