$(document).ready(function () {
    function trackHabit() {
        var habit = $("#habit").val();
        var date = $("#date").val();
        var time = $("#time").val();
  
      if (habit && date && time) {
        // Convert time to AM/PM format
        var formattedTime = new Date("2000-01-01T" + time + ":00").toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        // Add a new row to the table with a Clear button
        $("#habitTable tbody").append(
          "<tr><td>" + habit + "</td><td>" + date + "</td><td>" + formattedTime + "</td><td><button class='clearButton'>Clear</button></td></tr>"
        );
  
        // Clear the form fields
        $("#habitForm")[0].reset();
        showNotification("Habit tracked successfully!");
      } else {
        showNotification("Please fill out all habit, date, and time fields.",true);
     }
    }
    // Track habit on button click
  $("#trackButton").on("click", trackHabit);

  // Track habit on Enter key press
  $("#habitForm").on("keydown", function (event) {
    if (event.which === 13) {
      trackHabit();
      event.preventDefault(); // Prevent the default form submission behavior
    }
  });
  
    // click event for the Clear button
    $("#habitTable").on("click", ".clearButton", function () {
      $(this).closest("tr").remove();
      showNotification("Habit cleared successfully!");
    });
  });

  
function showNotification(message, isError = false) {
    var notification = $("#customAlert");
    var notificationText = $("#notificationText");
  
    notificationText.text(message);
    if (isError) {
      notification.css({
        backgroundColor: "#e74c3c",
        color: "#fff" // 
      });
    } else {
      // Reset styles for non-error messages
      notification.css({
        backgroundColor: "#4CAF50",
        color: "#fff" // 
      });
    }
    notification.fadeIn().delay(2000).fadeOut();
  }
  
  