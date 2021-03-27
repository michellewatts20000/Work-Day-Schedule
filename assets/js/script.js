//  calls the currenttime function every second
time();
setInterval(time, 1000);

//  calls the colour update function every 60sec
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
}

// when saveBtn is clicked store the value inside all textareas and also store their parent ID
$(".saveBtn").click(function () {
    var time = $(this).parent().attr("id");
    var text = $(this).siblings(".description").val();
    
    // Save text in local storage
    localStorage.setItem(time, text);
});


// get local storage when page is reloaded
function setLS (){
    $("#9 .description").val(localStorage.getItem("9"));
    $("#10 .description").val(localStorage.getItem("10"));
    $("#11 .description").val(localStorage.getItem("11"));
    $("#12 .description").val(localStorage.getItem("12"));
    $("#13 .description").val(localStorage.getItem("13"));
    $("#14 .description").val(localStorage.getItem("14"));
    $("#15 .description").val(localStorage.getItem("15"));
    $("#16 .description").val(localStorage.getItem("16"));
    $("#17 .description").val(localStorage.getItem("17"));

}

// clear local storage
$("#clear").click(function () {
    localStorage.clear();
    location.reload();
});