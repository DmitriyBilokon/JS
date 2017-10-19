//1
var scr = "Have a good day!";
console.log(scr);

//2
var age = 25;
console.log(age);
age = undefined;
console.log(age);

//3
var info ={
    name: "Dima",
    age: 28
};
console.log(info.name, info.age);

var name = info.name;
console.log(name);
delete info.name;
console.log(name);

//4
var customArray = [1,2,3];
console.log(customArray);
customArray = 0;
console.log(customArray);

//5
var student = 'Dima';
console.log(student);
student = 'Dima Bilokon';
console.log(student);
//6
var complex = [];
complex[0] = "My name is:";
complex[1] = 7;
complex[2] = null;
complex[3] = info;
console.log(complex[2]);
//7
var complexObj = {};
complexObj.name = "Dima";
complexObj.age = "28";
complexObj.friends = ["Alex", "Max", "Dima"];
complexObj.soc_links = {
    facebook: "https://www.facebook.com/dmitriy.bilokon",
    googlePlus: "https://plus.google.com/108920646712267442398"
};

var text = `"My name is ${complexObj.name}" "I am ${complexObj.age} old" "I have a lot of friends, but the best one is: ${complexObj.friends[1]}" "You can find me on facebook: ${complexObj.soc_links.facebook} or on goole groups: ${complexObj.soc_links.googlePlus}"`;
console.log(text);