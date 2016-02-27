// ensure modal is only shown on page load
$(function() {
    // wire up the buttons to dismiss the modal when shown
    $("#myModal").bind("show", function() {
        $("#myModal a.btn").click(function(e) {
            // do something based on which button was clicked
            // we just log the contents of the link element for demo purposes
            console.log("button pressed: "+$(this).html());
            // hide the dialog box
            $("#myModal").modal('hide');
        });
    });

    // remove the event listeners when the dialog is hidden
    $("#myModal").bind("hide", function() {
        // remove event listeners on the buttons
        $("#myModal a.btn").unbind();
    });

    // finally, wire up the actual modal functionality and show the dialog
    $("#myModal").modal({
      "backdrop"  : "static",
      "keyboard"  : true,
      "show"      : true    // this parameter ensures the modal is shown immediately
    });
});