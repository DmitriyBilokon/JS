//1 задание

for(i = 1; i <= 50; i++){
    console.log(i);
}

//2 задание

var arr = [1, 2, 3, 4, 5];
arr.forEach(function(element){
    console.log(element);
});

//3 задание

var arr=[2, 3, 4, 5];
var a = 1;

for(var i = 0; i < arr.length; i++){
    a *= arr[i];
}

console.log(a);

//4 задание

var obj = {Минск: "Беларусь",
           Москва: "Россия",
           Киев: "Украина"};

for(var country in obj){
    console.log(country + ' - это ' + obj[country]);
}

//5 задание
function getSum(n) {
    for(var i = 0; n > 50; i++){
        var a = n / 2;
    }

    console.log(n);
    console.log(a);
}

getSum(1000);

//6 задание

var arr = [2, 5, 9, 15, 0, 4];

for(i = 0 ;i < arr.length; i++){
    if(arr[i] > 3 && arr[i] < 10){
        console.log(arr[i]);
    }
}

//7 задание

var arr = [ "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь" ];

var months = new Date();

for (var i = 0; i < arr.length; i++) {
    if (i+1 === months.getMonth()) {
        console.log("%c" + arr[i], 'font-weight: bold;')
    } else {
        console.log(arr[i]);
    }
}
