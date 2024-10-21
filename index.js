/* Instructions

Write a isValidPassword function

It accepts 2 arguments: password and username

Password must:

- be atleast 8 characters

- cannot contain spaces

- cannot contain the username

If all requirements are met, return true,

otherwise return false */

let username = "1337DiscoDevil";  
let password = "mindBlown";
let validPassword = false;

isValidPassword(password, username)


function isValidPassword(password, username) {

    if (password.length <=7){
        console.log("Password must contain atleast 8 charaters.");
        console.log(validPassword);
    }
    
    else if (password.includes(username)) {
        console.log("Password cannot contain the username.");
        console.log(validPassword);
    }

    else if(password.includes(" ")) {
        console.log("Password cannot contain space.");
        console.log(validPassword);
    }

    else{
        console.log("New password is valid.");
        validPassword = true;
        console.log(validPassword);
    }
}