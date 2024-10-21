/* Instructions

Write a isValidPassword function

It accepts 2 arguments: password and username

Password must:

- be atleast 8 characters

- cannot contain spaces

- cannot contain the username

If all requirements are met, return true,

otherwise return false */

let password = "";
let username = "";  
let validPassword = false;

isValidPassword()


function isValidPassword() {

    username = prompt("Chose a username:")
    password = prompt("Chose a password. Must be atleast 8 charaters, cannot include spaces, may not include you username:")

    if (password.length <=7){
        console.log("Password must contain atleast 8 charaters.");
        console.log(validPassword);
        isValidPassword();
    }
    
    else if (password.includes(username)) {
        console.log("Password cannot contain the username.");
        console.log(validPassword);
        isValidPassword();
    }

    else if(password.includes(" ")) {
        console.log("Password cannot contain space.");
        console.log(validPassword);
        isValidPassword();
    }

    else{
        console.log("New password is valid.");
        validPassword = true;
        console.log(validPassword);
    }
}