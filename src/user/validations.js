export function validateSave() {
    var isValid = true;
    var characters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("txtEmail").value;
    var splitemail = email.split(/\r|\r\n|\n/);
    var emailcount = splitemail.length;
    var mediumRegex = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.*[@#$%^&+=])(?=.{8,})"); 
    if (document.getElementById("txtUserName").value === "") {
        alert("User Name Required.");
        document.getElementById("txtUserName").focus();
        isValid = false;
    }
    else if (document.getElementById("txtPhoneNo").value === "") {
        alert("Mobile No Required.");
        document.getElementById("txtPhoneNo").focus();
        isValid = false;
    }
    else if (document.getElementById("txtPhoneNo").value !== "" && !document.getElementById("txtPhoneNo").value.match(/^[0-9]{10}$/)) {
        alert("Please enter valid Mobile No.");
        document.getElementById("txtPhoneNo").focus();
        isValid = false;
    }
    else if (document.getElementById("txtEmail").value === "") {
        alert("Email Id Required.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (characters.test(splitemail[emailcount - 1]) === false && document.getElementById("txtEmail").value !== "") {
        alert("Invalid Email Id.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (document.getElementById("txtPassword").value !== "" && !mediumRegex.test(document.getElementById("txtPassword").value)) {
        alert("Password must have at least 8 characters and a special.");
        document.getElementById("txtPassword").focus();
        isValid = false;
    }
    else if (document.getElementById("txtPassword").value === "") {
        alert("Password Required.");
        document.getElementById("txtPassword").focus();
        isValid = false;
    }
    else if (document.getElementById("txtConfirmPassword").value === "") {
        alert("Confirm Password Required");
        document.getElementById("txtConfirmPassword").focus();
        isValid = false;
    }
    else if (document.getElementById("txtConfirmPassword").value !== document.getElementById("txtPassword").value) {
        alert("Password and Confirm Password miss match");
        document.getElementById("txtConfirmPassword").focus();
        isValid = false;
    }
    return isValid;
}
export function loginValidateSave() {
    var isValid = true;
    var characters = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var email = document.getElementById("txtEmail").value;
    var splitemail = email.split(/\r|\r\n|\n/);
    var emailcount = splitemail.length;
    if (document.getElementById("txtEmail").value === "") {
        alert("Email Id Required.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (characters.test(splitemail[emailcount - 1]) === false && document.getElementById("txtEmail").value !== "") {
        alert("Invalid Email Id.");
        document.getElementById("txtEmail").focus()
        isValid = false;
    }
    else if (document.getElementById("txtPassword").value === "") {
        alert("Password Required.");
        document.getElementById("txtPassword").focus();
        isValid = false;
    }
    return isValid;
}