$("#btnLogin").click(function () {
    $(".loader3").show();
    var user_name = $("#txtUserName").val();
    if (user_name.length <= 0) {
        AlertMessage('#msg-login', 'Please enter user name or e-mail id.', 2);
        $("#txtUserName").focus(); $(".loader3").hide();
        return false;
    }
    var password = $("#txtPassword").val();
    if (password.length <= 0) {
        AlertMessage('#msg-login', 'Please enter password.', 2);
        $("#txtPassword").focus(); $(".loader3").hide();
        return false;
    }
    var data = {}; data.UserName = user_name; data.Password = password;
    $.ajax({
        type: "POST",
        url: ServerAddress() + "login.ashx",
        data: JSON.stringify(data), beforeSend: function () { $('#msg-login').html(''); },
        contentType: "application/json; charset=utf-8",
        async: true,
        dataType: "json",
        success: function (response) {
            if (response.status) {
                window.location = $("#pageUrl").val();
            }
            else {
                AlertMessage('#msg-login', response.msg, 2);
            }
        },
        complete: function () {

        },
        error: function () {
            alert('Unable process your request, Please try again...');
        }
    });
    $(".loader3").hide();
    return false;
});

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

$(document).ready(function () {
    loadSetting();
});