window.onload = pageload;
function pageload() {
    var form = document.getElementById("myForm");
    form.onsubmit = validateForm;
}

function validateForm() {
    var password = document.forms["myForm"]["password"];
    var repassword = document.forms["myForm"]["repassword"];

    if(password.value == repassword.value) {
        alert("Register Success");
    }
    else {
        var error = document.getElementById("errormsg");
        error.innerHTML = "ERROR PASSWORD!!"
        return false;

    }
}