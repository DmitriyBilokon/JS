//1 task

function showNum(num) {
    var a = " is even";
    var b = " is odd";

    for(var i = 0; i <= num; i++){
        if(i % 2 === 0){
            console.log(i + a);
        }else {
            console.log(i + b);

        }
    }
}

showNum(15);

//2 task

function getFizzBuzz() {

    for(var i = 1; i <= 100; i++ ){
        var a = 'Fizz';
        var b = 'Buzz';

        if((i % 3 === 0) && (i % 5 === 0)) {
            console.log(a + b);
        }if(i % 3 === 0){
            console.log(a);
        }else if(i % 5 === 0){
            console.log(b);
        }else {
            console.log(i);
        }
    }
}

getFizzBuzz();

//3 task

function showGCD(a, b) {
    while (b !== 0){
        var i = a % b;
        a = b;
        b = i;
    }

    return a;
}

showGCD(100, 45);

//4 task

function getMultiplesSum(num) {
        var a = 0;

    for (var i = 0; i < num; i++) {
        if ((i % 3 === 0) || (i % 5 === 0)) {
            a +=i;
        }
    }

    console.log(a);
}

getMultiplesSum(1000);


//5 task

function showDevide(x, y) {

    for(var i = x; i <= y; i++){
        if((i % 3 === 0) && (i % 5 === 0)){
            console.log(i);
        }
    }
}

showDevide(10, 90);

//6 task

function getOddRenge(x, y) {
    for(var i = y; i >= x; i--){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}

getOddRenge(11, 70);

//    7 task

function getEvenRenge(x, y) {
    for(var i = y; i >= x; i--){
        if((i % 2 === 0) && (i % 3 === 0)){
            console.log(i);
        }
    }
}

getEvenRenge(13, 78);