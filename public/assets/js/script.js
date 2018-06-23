// add contact functionality
$("input[type=submit]").on("click", function(event) {
    event.preventDefault();

    var newContact = {
        firstName: $("#firstName").val().trim(),
        lastName: $("#lastName").val().trim(),
        contactType: $("#contactType").val().trim(),
        phoneNumber: $("#phoneNum").val().trim(),
        emailAddress: $("#emailAddr").val().trim()
    }
    // console.log("hit it!");
    $.ajax("/api/contacts", {
        method: "POST",
        data: newContact
    }).then(function(response) {
        location.href = "/";
    });
});

// delete contact functionality
$(".delete").on("click", function(event) {
    console.log(this);
    const id = $(this).attr("data-id"); 
    const query = "/api/contacts/" + id;

    $.ajax({
        method: "DELETE",
        url: query,
    }).then(function(response){
        location.href = "/";
    });
});



