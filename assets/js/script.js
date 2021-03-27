//  calls the currenttime function
time();
colourUpdate();
setInterval(time, 1000);
setInterval(colourUpdate, 60000);

var simpleTime = moment().hours();

function time() {
    var currentTime = moment().format("dddd, MMMM Do, h:mm:ss a");
    $("#currentDay").text(currentTime);
}


// checks every minute if colours need to change
function colourUpdate() {
    // makes a current hour variable using moment
    var simpleTime = moment().hours();

    // looks at every .time-block and stores the value of its ID and then compares it to the current time and gives it a class to show if the time has passed or not
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        if (blockTime < simpleTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }   else if (blockTime === simpleTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");

        }

    })


    // if (9 < simpleTime) {
    //     $("#hour9").addClass("past")
    // } else if (9 > simpleTime) {
    //     $("#hour9").addClass("future")
    // } else {
    //     $("#hour9").addClass("present")
    // };

    // if (10 < simpleTime) {
    //     $("#hour10").addClass("past")
    // } else if (10 > simpleTime) {
    //     $("#hour10").addClass("future")
    // } else {
    //     $("#hour10").addClass("present")
    // };

    // if (11 < simpleTime) {
    //     $("#hour11").addClass("past")
    // } else if (11 > simpleTime) {
    //     $("#hour11").addClass("future")
    // } else {
    //     $("#hour11").addClass("present")
    // };

}







$(".saveBtn").click(function () {
    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
    // Save text in local storage
    localStorage.setItem(time, text);
    console.log(text, time);
});




// get local storage
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));



// clear local storage
var clearStorage = $('.clear');

clearStorage.on('click', function () {
    localStorage.clear();
    location.reload();
});