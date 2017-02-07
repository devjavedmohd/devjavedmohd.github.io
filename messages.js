function validateform() {
    var fullname = document.registration.name.value;
    var emailadd = document.registration.email.value;

    if (fullname === null || fullname === "") {
        resetErrorMsg();

        document.getElementById('f_error_msg').innerHTML = "Please enter Full Name";
        document.registration.name.focus();
        document.getElementById('f_error_msg').style.display = "block";
        return false;
    }else{
        document.getElementById('f_error_msg').style.display = "none";
    }

    var atposition = emailadd.indexOf("@");
    var dotposition = emailadd.lastIndexOf(".");

    if (atposition < 1 || dotposition < atposition + 2 || dotposition + 2 >= emailadd.length) {
        resetErrorMsg();

        //document.getElementById('e_error_msg').innerHTML = "Please enter a valid e-mail address \n atpostion:" + atposition + "\n dotposition:" + dotposition;
        document.getElementById('e_error_msg').innerHTML = "Please enter a valid e-mail address.";
        
        document.registration.email.focus();
        document.getElementById('e_error_msg').style.display = "block";
        return false;
    }else{
        document.getElementById('e_error_msg').style.display = "none";
    }
}

function resetErrorMsg(){
    document.getElementById('f_error_msg').style.display = "none";
    document.getElementById('e_error_msg').style.display = "none";
}

/*:::::::::::::::: Apply Validaton Script ::::::::::::::*/

