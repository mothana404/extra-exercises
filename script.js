//Q1
9*3 //27
"value is" + 50 //value is50
17%5 // 2
5%17 //5
5/10; //0.5
4==4; //true
4!=5; //true
7<=8;//true
Math.ceil(5.1) //6
Math.floor(5.9); //5

//Q2
let number = window.prompt("enter a number (q2)", "");
window.alert(number);

//Q3
let num = [window.prompt("first number (q3)", ""), window.prompt("second number (q3)", "")];
num[0] > num[1] ? window.alert(`${num[1]} --> ${num[0]}`) : window.alert(`${num[0]} --> ${num[1]}`);

//Q4
let larger = [window.prompt("first number (q3)", ""), window.prompt("second number (q3)", "")];
larger[0] > larger[1] ? window.alert(`${larger[0]}`) : window.alert(`${larger[1]}`);

//Q5
let sum = [window.prompt("first number (q4)", "") * 1, window.prompt("second number (q4)", "") * 1];
window.alert(sum[0] + sum[1]);

//Q6
let numN = window.prompt("the value", "") * 1;
switch (numN)
{
    case 1:
        window.alert("ONE");
        break;
    case 2:
        window.alert("TWO");
        break;
    case 3:
        window.alert("THREE");
        break;
    case 4:
        window.alert("FOUR");
        break;
    case 5:
        window.alert("FIVE");
        break;
    case 6:
        window.alert("SIX");
        break;
    case 7:
        window.alert("SEVEN");
        break;
    case 8:
        window.alert("EIGHT");
        break;
    case 9:
        window.alert("NINE");
        break;
    default:
        window.alert("PLEASE TRY AGAIN");
}