function myfunction1() {
    var input1 = document.getElementById("input-1");
    var number = input1.value;
    var numberAfterCeil = Math.ceil(number);
    var numberAfterFloor = Math.floor(number);
    var accessToHtmlP1 = document.getElementsByClassName("task-1-p")[0];
    var accessToHtmlP2 = document.getElementsByClassName("task-2-p")[0];
    var accessToHtmlP3 = document.getElementsByClassName("task-3-p")[0];
    accessToHtmlP1.innerHTML = "your Entered number: " + number;
    accessToHtmlP2.innerHTML = "Number after ceil: " + numberAfterCeil;
    accessToHtmlP3.innerHTML = "Number after floor: " + numberAfterFloor;
}

function myfunction2() {
    var input2 = document.getElementById("input-2");
    var number = input2.value;
    if (!isNaN(number)) {
        var numberAfterCeil = Math.ceil(number);
        var numberAfterFloor = Math.floor(number);
        var accessToHtmlP1 = document.getElementsByClassName("task-2-1-p")[0];
        var accessToHtmlP2 = document.getElementsByClassName("task-2-2-p")[0];
        var accessToHtmlP3 = document.getElementsByClassName("task-2-3-p")[0];
        accessToHtmlP1.innerHTML = "your Entered number: " + number;
        accessToHtmlP2.innerHTML = "Number after ceil: " + numberAfterCeil;
        accessToHtmlP3.innerHTML = "Number after floor: " + numberAfterFloor;
    }
}

function myfunction3() {
    var numToConvertToAbsolute = prompt("Enter the number you want to know the absulote value");
    var finalNumToShow = Math.abs(numToConvertToAbsolute);
    document.getElementById("task-3-p").innerHTML = finalNumToShow;
}
function myfunction4() {
    var randomNum = Math.random() * 10;
    document.getElementById("task-4-p").innerHTML = randomNum;

}

function myfunction5() {
    let randomNum = Math.random();
    let covertNumToString = randomNum < 0.5 ? "head" : "tail";
    document.getElementById("task-5-p").innerHTML = "Random coin value: " + covertNumToString;
}
function myfunction6() {
    let randomNum = Math.floor(Math.random() * 100) + 1;
    document.getElementById("task-6-p").innerHTML = randomNum;
}
function myfunction7() {
    var userWeight = parseFloat(prompt("please tell us how much your weight is?"));
    document.getElementById("task-7-p").innerHTML = "Your weight is: " + userWeight + " kilograms";
}

function myfunction8() {
    let randomNumber = parseFloat(Math.floor(Math.random() * 10) + 1 );
    let userGuess = parseFloat(prompt("Guess the random number"));
    if (userGuess === randomNumber) {
    alert("oh wow! you guessed the exact number");
}
else {
    alert("sorry! you caouldn't guess the exact number");
    }
}