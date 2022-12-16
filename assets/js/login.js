'use strict';

function search() {
    if (document.querySelector(".search").value != "") {
        window.location.href = "https://cn.bing.com/search?q=" + document.querySelector(".search").value;
        document.querySelector(".search").value = "";
    }
    return false;
}

function checkUserName() {
    let fname = document.myform.username.value;
    let reg = /^[0-9a-zA-Z]/;
    if (fname.length != 0) {
        for (i = 0; i < fname.length; i++) {
            if (!reg.test(fname)) {
                alert("Only letters or number allowed");
                return false;
            }
        }
        if (fname.length < 4 || fname.length > 16) {
            alert("The username must be 4-12 characters long");
            return false;
        }
    }
    else {
        alert("Please enter your username");
        document.myform.username.focus();
        return false;
    }
    return true;
}

function passCheck() { 
    let userpass = document.myform.password.value;
    if (userpass == "") {
        alert("No password was entered \n" + "Please enter your password");
        document.myform.password.focus();
        return false;
    }
    if (userpass.length < 6 || userpass.length > 12) {
        alert("The password must be 6-12 characters long.\n");
        return false;
    }
    return true;
}

function passCheck2() {
    let p1 = document.myform.password.value;
    let p2 = document.myform.password2.value;
    if (p1 != p2) {
        alert("Confirm password is inconsistent with password entry");
        return false;
    } else {
        return true;
    }
}

function checkEmail() {
    let Email = document.getElementById("email").value;
    let e = Email.indexOf("@" && ".");
    if (Email.length != 0) {
        if (e > 0) {
            if (Email.charAt(0) == "@" && ".") {
                alert("Symbols '@' and '.' cannot be first placed in the email address");
                return false;
            }
            else {
                return true;
            }
        }
        else {
            alert("The email format is incorrect\n" + "Must contain symbols'@' and '.'");
            return false;
        }
    }
    else {
        alert("Please enter your email");
        return false;
    }
}

function checkbirthday() {    //验证用户名
    let year = document.myform.birthday.value;
    if (year < 1902 || year > 2022) {
        alert("The year ranges from 1902-2022");
        return false;
    }
    return true;
}

function validateform() {
    if (checkUserName() && passCheck() && passCheck2() && checkEmail() && checkbirthday())
        return true;
    else
        return false;
}

function clearText() {
    document.myform.user.value = "";
    document.myform.password.value = "";
}

//显示隐藏对应的密码方法:
function show_hide_pwd(id) {
    let type = $("#" + id).attr('type')
    if (type === "password") {
        $("#" + id + "eye").attr('src', "img/eye_close.svg");
        $("#" + id).attr("type", "text");
    } else {
        $("#" + id + "eye").attr('src', "img/eye_open.svg");
        $("#" + id).attr("type", "password");
    }
}