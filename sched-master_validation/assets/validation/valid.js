//************login*************** */
var username = document.forms['form']['username'];
var password = document.forms['form']['password'];

var username_error = document.getElementById('username_error');
var password_error = document.getElementById('password_error');

username.addEventListener('textInput', usernameVerify);
password.addEventListener('textInput', passwordVerify);


function validated(){
    if(username.value.length < 9){
        username.style.border = "1px solid red";
        username_error.style.display = "block";
        username.focus();
        return false;
    }
    if(password.value.length < 9){
        password.style.border = "1px solid red";
        password_error.style.display = "block";
        password.focus();
        return false;
    }
}

function usernameVerify(){
    if(username.value.length >= 8){
        username.style.border = "1px solid silver";
        username_error.style.display = "none";
        return true;
    }
}
function passwordVerify(){
    if(password.value.length >= 8){
        password.style.border = "1px solid silver";
        password_error.style.display = "none";
        return true;
    }
}

// **************registration**************
var team_name = document.forms['form_reg']['team_name'];
var email = document.forms['form_reg']['email'];
var pass1 = document.forms['form_reg']['pass1'];
var pass2 = document.forms['form_reg']['pass2'];

var team_name_error = document.getElementById('team_name_error');
var email_error = document.getElementById('email_error');
var pass1_error = document.getElementById('pass1_error');
var pass2_error = document.getElementById('pass2_error');


team_name.addEventListener('textInput', team_nameVerify);
email.addEventListener('textInput', emailVerify);
pass1.addEventListener('textInput', pass1Verify);
pass2.addEventListener('textInput', pass2Verify);

function validate_reg(){
    if(team_name.value.length < 9){
        team_name.style.border = "1px solid red";
        team_name_error.style.display = "block";
        team_name.focus();
        return false;
    }
    if(email.value.length < 9){
        email.style.border = "1px solid red";
        email_error.style.display = "block";
        email.focus();
        return false;
    }
    if(pass1.value.length < 9){
        pass1.style.border = "1px solid red";
        pass1_error.style.display = "block";
        pass1.focus();
        return false;
    }
    if(pass2.value.length < 9){
        pass2.style.border = "1px solid red";
        pass2_error.style.display = "block";
        pass2.focus();
        return false;
    }
}

function team_nameVerify(){
    if(team_name.value.length >= 8){
        team_name.style.border = "1px solid silver";
        team_name_error.style.display = "none";
        return true;
    }
}
function emailVerify(){
    if(email.value.length >= 8){
        email.style.border = "1px solid silver";
        email_error.style.display = "none";
        return true;
    }
}
function pass1Verify(){
    if(pass1.value.length >= 8){
        pass1.style.border = "1px solid silver";
        pass1_error.style.display = "none";
        return true;
    }
}
function pass2Verify(){
    if(pass2.value.length >= 8){
        pass2.style.border = "1px solid silver";
        pass2_error.style.display = "none";
        return true;
    }
}