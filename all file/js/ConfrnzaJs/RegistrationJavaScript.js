function loadSetting() {
    $.ajax({
        url: ServerAddress() + "api/WebSetting/GetSettings",
        type: 'Get',
        datatype: 'JSON',
        data: {},
        contentType: "application/json; charset=utf-8", async: true,
        success: function (data) {
            if (isNullAndUndef(data.Favicon)) {
                $(".favicon").attr("href", "" + data.Favicon + "");

            } if (isNullAndUndef(data.SiteLogo)) {
                $("#siteLogo").attr("src", "" + data.SiteLogo + "");
                $("#siteLogo").removeClass("hidden");
            }
        },
        complete: function () {

        }
    });
}

function isNullAndUndef(variable) {

    return (variable !== null && variable !== undefined);
}

function CheckNumeric(e) {
    if (window.event) // IE
    {
        if ((e.keyCode < 48 || e.keyCode > 57) & e.keyCode != 8 & e.keyCode != 46) {
            event.returnValue = false;
            return false;
        }
    }
    else { // Fire Fox
        if ((e.which < 48 || e.which > 57) & e.which != 8 & e.keyCode != 46) {
            e.preventDefault();
            return false;
        }
    }
}

function space_chk(e) {
    if (window.event) // IE
    {
        if (e.keyCode == 32) {
            event.returnValue = false;
            return false;
        }
    }
    else {
        if (e.keyCode == 32) {
            e.preventDefault();
            return false;
        }
    }
}

$(document).ready(function () {

    loadSetting();

    $('#registration_form').validate({ // initialize the plugin
        rules: {
            txtname: {
                required: true,
                maxlength: 30
            },

            txtnumber: {
                required: true,
                maxlength: 10,
                minlength: 10,
                number: true
            },

            txtemail: {
                required: true,
                email: true
            },
            txtpass: {
                required: true,

            }, txtconpass: {
                equalTo: "#txtpass"
            }
        },
        submitHandler: function (form) { // for demo

            var UserForm = {
                FULL_NAME: $('#txtname').val(),
                LastName: $('#txtlastname').val(),
                MOBILE_NO: $('#txtnumber').val(),
                MAIL_ID: $('#txtemail').val(),
                PASSWORD: $('#txtpass').val(),
                Confirm_password: $('#txtconpass').val(),
            };
            $.ajax({
                url: "/Home/UserMst_JoinNow_NEW_Set",
                type: "POST",
                data: UserForm,
                datatype: 'JSON',
                success: function (data) {

                    if (data.Data == "-1") {
                        alert("User already exist ");
                        window.location.href = "/Home/SLogin/";

                    } else if (data.Data == "0") {
                        AlertMessage('#registration_msg', data.Massage, 2);
                    } else {

                        $("#registration_form")[0].reset()
                        alert("User added succesfully...");
                        window.location.href = "/Home/SLogin/";

                    }
                },
                error: function (a, b, c) {
                    console.log(a, b, c)
                }

            })

        }
    })
});
/*document.ready(function () {
    alert("hii")
});*/
