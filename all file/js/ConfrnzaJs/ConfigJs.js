
function ServerAddress() {
    return "https://www.conferenza.in/"
    //return "https://conferenzacdn.b-cdn.net/";
    //return "https://web.conferenzatech.in/"    
}

function AlertMessage(container, msg, typ) {
    if (typ == 1) {
        $(container).html("<div class='alert alert-block alert-success'><span class='close' data-dismiss='alert'>x</span>" + msg + "</div>");
    } else if (typ == 2) {
        $(container).html("<div class='alert alert-block alert-danger'><span class='close' data-dismiss='alert'>x</span>" + msg + "</div>");
    } else {
        $(container).html("<div class='alert alert-block alert-info'><span class='close' data-dismiss='alert'>x</span>" + msg + "</div>");
    }
}

function roundToTwo(value) {
    return (Math.round(value * 100) / 100);
}

function CountUpdate() {

    $.ajax({
        url: "/Home/GetCount/",
        type: "GET",
        success: function (data) {
            $(".cart_count").html("")
            $(".cart_count").html(data)
        }
    })

}
function copyDivToClipboard() {
    var range = document.createRange();
    range.selectNode(document.getElementById("pnameCopy"));
    window.getSelection().removeAllRanges(); // clear current selection
    window.getSelection().addRange(range); // to select text
    document.execCommand("copy");
    window.getSelection().removeAllRanges();// to deselect
}