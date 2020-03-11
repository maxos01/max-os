function sun() {
    document.body.style.backgroundColor = "white";
}
function moon() {
    document.body.style.backgroundColor = "#303030";
}

$(document).ready(function() {
    $("#showImg").click(function() {
        $(".project_img").slideToggle(1000);
    });
});