//  calls the currentTime function every second
time();
setInterval(time, 1000);

//  calls the colourUpdate function every 60sec
colourUpdate();
setInterval(colourUpdate, 60000);

// update page with local storage values on page refresh
setLS();

// adds current time to #currentDay element
function time() {
    var currentTime = moment().format("dddd, MMMM Do, h:mm:ss a");
    $("#currentDay").text(currentTime);
}

// checks every minute if colours need to change
function colourUpdate() {
    // makes a current hour variable using moment
    var simpleTime = moment().hours();

    // looks at every .time-block and stores the value of its specific data attribute and then compares it to the current time and gives it a class to show if the time has passed or not
    $(".time-block").each(function () {
        var blockTime = parseInt($(this).attr("data"));
        if (blockTime < simpleTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (blockTime === simpleTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        } else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        }
    })
}

// when saveBtn is clicked store the textarea value and also store its specific data attribute
$(".saveBtn").click(function (event) {
    event.preventDefault();
    var time = $(this).parent().attr("data");
    var text = $(this).siblings(".description").val();
    // Save text in local storage
    localStorage.setItem(time, text);
});

// get local storage when page is reloaded
function setLS() {
    $("[data='9'] .description").val(localStorage.getItem("9"));
    $("[data='10'] .description").val(localStorage.getItem("10"));
    $("[data='11'] .description").val(localStorage.getItem("11"));
    $("[data='12'] .description").val(localStorage.getItem("12"));
    $("[data='13'] .description").val(localStorage.getItem("13"));
    $("[data='14'] .description").val(localStorage.getItem("14"));
    $("[data='15'] .description").val(localStorage.getItem("15"));
    $("[data='16'] .description").val(localStorage.getItem("16"));
    $("[data='17'] .description").val(localStorage.getItem("17"));
}

// clear local storage
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});