// formats date and displays it in the jumbotron
// var currentTime = moment().format("dddd, MMMM Do, h:mm:ss a");

//  calls the currenttime function
time();

// 
setInterval(time, 1000);

function time() {
    var currentTime = moment().format("dddd, MMMM Do, h:mm:ss a");
    $("#currentDay").text(currentTime);
}





// on click save button store textfield to localstorage

var str = $("textfield").text();

console.log(str);

$("#clickEvent").click(function () {
    alert("Handler for .click() called.");
});



// store the time and compare to actual time
var hour9 = 9;

// makes an hour variable
var simpleTime = moment().hours();

console.log(hour9);
console.log(simpleTime);


if (hour9 < simpleTime) {
    $("#hour9").addClass("past")
} else if (hour9 > simpleTime) {
    $("#hour9").addClass("future")
} else {
    $("#hour9").addClass("present")
};