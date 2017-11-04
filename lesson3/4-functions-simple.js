//1 task

function getName(name) {
   alert("Hello, " + name );
}

getName(prompt("Your name"));

//2 task

function double(x) {
    return x * 2;
}

double(6);

//3 task

function range(x, y) {
    var a = 0;
    for(var i  = x; i <= y; i ++){
        a += i;
    }

    return a;
}

range(1,3);

//4 task

var num = 0;
function getPrimesSumBelow(x){
    for (var i=2; i < x; i++){
        for (var j=2; j <= i; j++){
            if (i === j) {
                num = num + i;
            }
            else if(i % j === 0){
                break;
            }
        }
    }
    console.log(sum);
}
getPrimesSumBelow(10);

//5 task

function showOdd(num) {
        return num % 2;
}

showOdd(3);

//6 task

function showOddRenge(x, y) {
    var a = [];

    for(var i = 0, j = x; j <= y; j++){
        if( showOdd(j) === true){
            a[i] = j;
            i++;
        }
    }

    return a;
}

showOddRenge(1, 10);


//7 task

function showWindow() {
    var a = +prompt("Enter 9");

    if (a !== 9) {
        showWindow();
    } else {
        alert("Верно!");
    }
}

showWindow();