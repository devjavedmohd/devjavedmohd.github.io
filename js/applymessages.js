function validateForm() {
    var firstname = document.myForm.fname.value;
    var lastname = document.myForm.lname.value;
    var locat = document.myForm.location.value;
    var emailaddress = document.myForm.emailadd.value;
    var phonenumber = document.myForm.phone.value;
    var uploadResume = document.myForm.resume.value;
    var positionapplied = document.myForm.positionapply.value;

    if (firstname == null || firstname == "") {
        document.getElementById('f_error_message').innerHTML = "Please enter First Name";
        document.myForm.fname.focus();
        return false;
    } else {
        document.getElementById('f_error_message').style.display = "none";
    }

    if (lastname == null || lastname == "") {
        document.getElementById('l_error_message').innerHTML = "Please enter Last Name";
        document.myForm.lname.focus();
        return false;
    } else {
        document.getElementById('l_error_message').style.display = "none";
    }
    if ( document.getElementsByName('positionapply')[0].value == 'blank' ) {
        document.getElementById('pa_error_message').innerHTML = "Please enter which position you have apply.";
        document.myForm.positionapply.focus();
        return false;
    } else {
        document.getElementById('pa_error_message').style.display = "none";
    }
    if (locat == null || locat == "") {
        document.getElementById('lo_error_message').innerHTML = "Please enter your location";
        document.myForm.location.focus();
        return false;
    } else {
        document.getElementById('lo_error_message').style.display = "none";
    }

    var atpos = emailaddress.indexOf("@");
    var dotpos = emailaddress.lastIndexOf(".");

    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= emailaddress.length) {
        document.getElementById('e_error_message').innerHTML = "Not a valid e-mail address";
        document.myForm.emailadd.focus();
        return false;
    } else {
        document.getElementById('e_error_message').style.display = "none";
    }

    // var phoneNum = phonenumber.replace(/[^\d]/g, '');
    var phoneNum = phonenumber.length;
    if (phoneNum == null || phoneNum == "") {
        document.getElementById('t_error_message').innerHTML = "Please enter your phone number";
        document.myForm.phone.focus();
        return false;
        // }else if (phoneNum != 10 && phoneNum != 11){  
    } else if (phoneNum != 10) {
        document.getElementById('t_error_message').innerHTML = "Please enter valid phone number";
        document.myForm.phone.focus();
        return false;
    } else {
        document.getElementById('t_error_message').style.display = "none";
    }

    if (uploadResume == null || uploadResume == "") {
        document.getElementById('file_error_message').innerHTML = "Please upload your resume in .pdf .doc format";
        document.myForm.resume.focus();
        return false;
    } else {
        document.getElementById('file_error_message').style.display = "none";
    }
}
