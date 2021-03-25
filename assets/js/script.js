
function time(){
var time = moment().format("dddd, MMMM Do, h:mm:ss a");
$("#currentDay").text(time);
}


time();
setInterval(time, 1000);