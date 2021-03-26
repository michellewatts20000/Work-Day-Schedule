// formats date and displays it in the jumbotron
var currentTime = moment().format("dddd, MMMM Do, h:mm:ss a");
var simpleTime = moment().format("HH:mm:ss");

function time() {
    $("#currentDay").text(currentTime);
}

time();
setInterval(time, 1000);


// on click save button store textfield to localstorage

var str = $("textfield").text();

$("#clickEvent").click(function() {
    alert( "Handler for .click() called." );
  });



// store the time and compare to actual time
var hour9 = "09:00:00";


console.log(hour9);
console.log(simpleTime);


if (hour9 < simpleTime)
{
    $("#hour9").addClass("past");

} else if (hour9 > simpleTime); {
    $("#hour9").addClass("current");
} 

// } else {
//     $("#hour9").addClass("future");
// }