
$(document).ready(function () {

    $("#modal").hide();


    if (localStorage.getItem("username") != null && localStorage.getItem("password") != null) {
        $("#username").val(localStorage.getItem("username"));
        $("#password").val(localStorage.getItem("password"));

        if (localStorage.getItem("isChecked") == "true") {
            $("#checkbox").prop("checked", true);
        }
    }

    $("#loginBtn").click(function () {

        if ($("#username").val() == "admin" && $("#password").val() == "admin") {

            if ($("#checkbox").is(":checked")) {
                localStorage.setItem("username", $("#username").val());
                localStorage.setItem("password", $("#password").val());
                localStorage.setItem("isChecked", "true");
            }
            else {
                localStorage.clear();
            }

            window.location.assign("main.html");
        }
        else {
            $("#modal").show();
        }
    });

    $("#close").click(function () {
        $("#modal").hide();
    });

});
