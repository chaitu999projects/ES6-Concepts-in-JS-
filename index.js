//Let & Const Key words in JavaScript
//Let
{
    let name = "Chaitanya";
    console.log(name);
    //Block Scops
}
//console.log(name); //It' Not Possible and Refference Error name is not defined.........

//Const 
{
    const name = "Chaitu";
    console.log(name);
    //block Scopes
}

// Arrow Functions in JavaScript
//Syntax of Arrow Function
let employeeDetails = () => {
    //code write heare........
    return `Hello Arrow Function`;
}
//Call the function Here............
console.log(employeeDetails());
// Arrow Function with parameters
let sum = (num1, num2) => {
    return num1 + num2
}

console.log(sum(10, 20));

// Shorthand Arrow functions 
let multiplyTwoNumbers = (num1, num2) => num1 * num2;
let result = multiplyTwoNumbers (2, 3);
console.log(result);
//passing One arrgument only
const num = number => number + 10;
const res = num(10);
console.log(res);
 
//Ternary Operatore with arrow function
const ternaryOpe = age => age >= 18 ? `You are Eligble to vote` : `You are not Eligble to vote`;
let resOfternaryOpe = ternaryOpe(18);
console.log(resOfternaryOpe);

//Clasess In JavaScript 
class test{
    constructor (){
        console.log(`Hello World!`);
    }
}

//Cal the class object 
new test();

//Using Class object we can achieve the multple operations 
class multioperations {
    constructor(num1, num2) {
        this.numOne = num1;
        this.numTwo = num2;
    }
    //Addition Method 
    addition() {
        console.log(this.numOne + this.numTwo);
    }
    //Multplication Method 
    multyply() {
        console.log(this.numOne * this.numTwo);
    }
    //Devision using Devision method in the class object means multioperations
    devision() {
        console.log(this.numOne / this.numTwo);
        
    }
}

let resOfClassobj = new multioperations(10, 30);
resOfClassobj.addition();
resOfClassobj.multyply();
resOfClassobj.devision();

//Fething the Data 

fetch('https://dummyjson.com/products/category/smartphones')
.then(realdata => (realdata.json())
.then(console.log));

// let allDummyData = [];

// fetch('https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json')
// .then(dummyJsonData => dummyJsonData.json())
// .then(data => {
//     allDummyData.push(data)
//     console.log(allDummyData);
// })
// .catch(error => console.error('Error fetching data:', error));


//DeStructuring of object and array
let studentDetails = {
    nameOfStu: "Chaitanya",
    age: 20,
    eMail: "chaitumulagani@gmail.com",
    gender: "male"
}

//we want store all keys in one variable
let {nameOfStu, age, eMail, gender} = studentDetails;
//Then Access the keys one by one
console.log(nameOfStu);
console.log(age);
console.log(`${eMail} ${gender}`);

//Spread Operatore in Js
let myArr1 = [1,2,3,4];
let myArr2 = [5,6,7]
let resultOftwoArrays = [...myArr1, ...myArr2]
console.log(resultOftwoArrays);

//Rest parameter 
let myArr3 = [1,2,3,4,5,6,7,8,90,0];
let resultOfRestParameter = [1,2,3,...myArr3]; //rest parameter alwayas last
console.log(resultOfRestParameter);
//rest parameter using in arraw function
let restOpeInArraow = (...rest) => {
    let allAdditionRes = 0;
     for(let i=0; i<rest.length; i++) {
        allAdditionRes += rest[i]
    }
    return allAdditionRes
}

let resultOfRestInArrow = restOpeInArraow(1,2,3,4,5);
console.log(resultOfRestInArrow);

let str = "Chaitanya";
let strResult = '';

// for(let i=0; i<str.length; i++) {
//     strResult = str[i] + strResult;
// }

for(let itemOfStr of str) {
    //console.log(itemOfStr);
    strResult = itemOfStr + strResult
}
console.log(strResult);

let arrOfNums = [1,2,3,4,5,6,7];
let resOfMul = 0;

for(let i=0; i<arrOfNums.length; i++) {
    resOfMul += arrOfNums[i] * 2;
}

console.log(resOfMul);

//forEach method in JS in ES6
let evenNums = [2,4,6,8,10];

let resOfForEach = evenNums.forEach(eachEle => {
     console.log(evenNums = eachEle * 2);
});

let fruits = ['Apple', "banana", "orange", 'Grape'];
// fruits.forEach(upperCase)
// function upperCase(ele, ind, arrOfFruits) {
//     console.log(arrOfFruits[ind] = ele.toUpperCase() );
    
// }

for(let i=0; i<fruits.length; i++) {
    console.log(fruits[i] = fruits[i].toUpperCase());
}


for(let itemOfFruits of fruits) {
    //console.log(itemOfFruits);
    fruits = itemOfFruits.toUpperCase()
    console.log(fruits)
}

//Map Method in JS
let arrOfObjects = [
    {
        name: "Chaitu",
        age: 20
    },

    {
        name: "Chaitu",
        age: 21
    },
    {
        name: "Ajay",
        age: 59
    }
];

arrOfObjects.map((items) => {
    console.log(items);
})

let arrOfNumbers = [1,2,3,4,4,5,6,7,8];

let calWithMap = arrOfNumbers.map((nums => {
    return nums * 2
}))

let mapOfRes = calWithMap;
console.log(mapOfRes);


let myfillOperation = (par) => {

    return par.filter((filterItems) => {

        return filterItems + 2;
        
    })
}

let resOfFilter = myfillOperation([2,3,4,6,6.7,8,9,0,9,54,3]);
console.log(resOfFilter);



//print only lessthan or is equal to 23 

let filterOfNums = (nums) => {
    nums.filter((num) => {
         if(num >= 23) {
            console.log(num);
        }
    })
}

let resOfFilterNums = filterOfNums([2,4,6,7,99,23,54, 67, 82,328,674633,9973]);
console.log(resOfFilterNums);

console.log("Rakesh");
console.log("Somthing")