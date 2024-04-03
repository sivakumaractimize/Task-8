
function validForm() {




  if (!validName()) {
    document.getElementById('dobErr').innerHTML = ""
    document.getElementById("dob").style.borderColor = "lightgrey"
    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey"
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""


    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";






  } else if (!validDate()) {
    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""



    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";


  }
  else if (!validMail()) {


    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""


    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";



  }

  else if (!validMobile()) {


    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";

    document.getElementById('genErr').innerHTML = ""

    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";


  }
  else if (!validGender()) {


    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";

  }

  else if (!validCountry()) {




    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";


  }

  else if (!validPincode()) {


    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""



    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"


    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";


  }
  else if (!validPassword()) {



    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";
    document.getElementById("checkErr").innerHTML = "";


    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""



    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";
  }

  else if (!revalidPassword()) {

    console.log("ok pass")


    document.getElementById("checkErr").innerHTML = "";


    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""

    document.getElementById('cityErr').innerHTML = ""
    document.getElementById("city").style.borderColor = "lightgrey"


    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"
    document.getElementById("checkErr").innerHTML = "";

  }

  else if (!matchPassword()) {

    document.getElementById("pserr2").innerHTML = "password and conform password should be same";


  }
  else if (!validChekbox()) {
    document.getElementById('emailErr').innerHTML = "";
    document.getElementById("email").style.borderColor = "lightgrey";
    document.getElementById('mobErr').innerHTML = ""
    document.getElementById("mobile").style.borderColor = "lightgrey"

    document.getElementById('genErr').innerHTML = ""




    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "lightgrey"

    document.getElementById('zipErr').innerHTML = ""
    document.getElementById("zip").style.borderColor = "lightgrey"


    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "lightgrey";
    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "lightgrey";



  }


 


  else {
    document.getElementById("btn").addEventListener("click", function () {

      if (validName()&& validDate()&&validMail()&&validMobile()&&validGender()&&validCountry()&&validPincode()&&validPassword()&&revalidPassword()&&validChekbox()) 
      {
        let modal = new bootstrap.Modal(document.getElementById("modal"));
        modal.show();
        document.getElementById("form").reset();

      }

      // document.getElementsByClassName("form").style.borderColor = "none";

    })

  }




}
function formReset() {
  document.getElementById("form").reset();

}
// function openModal() {
//   if (document.getElementById("check").checked)
//    {
//     let modal = new bootstrap.Modal(document.getElementById("modal"));
//     modal.show();
//     document.getElementById("form").reset();
//   }
// }

// document.getElementById("btn").addEventListener("click" ,validForm());




function validName() {
  var name = document.getElementById("name").value;

  if (name === "") {
    document.getElementById("nameErr").innerHTML = "Please enter name";
    document.getElementById("name").style.borderColor = "red";
    return false
  }

  else if (name.length < 3) {
    document.getElementById("nameErr").innerHTML = "Name contains atleast 3 letters";
    document.getElementById("name").style.borderColor = "red";
    return false


  }

  else if (name.charAt(0) >= 'A' && name.charAt(0) <= 'Z') {
    var containsNumber = false;
    for (var i = 0; i < name.length; i++) {
      if (!isNaN(parseInt(name[i]))) {
        containsNumber = true;
        break;
      }
    }
    if (!containsNumber) {
      document.getElementById('nameErr').innerHTML = "";
      document.getElementById("name").style.borderColor = "green";
      return true



    }
    else {
      document.getElementById("nameErr").innerHTML = "Name should not contain numbers";
      document.getElementById("name").style.borderColor = "red";
      return false;


    }

  }
  else {
    document.getElementById("nameErr").innerHTML = "Name first letter should be capital and name should not contain numbers";
    document.getElementById("name").style.borderColor = "red";

    return false


  }

}
function validDate() {
  var dob = document.getElementById("dob").value;


  if (dob === "") {
    document.getElementById("dobErr").innerHTML = "Please enter dob";

    document.getElementById("dob").style.borderColor = "red";
    return false

  } else {
    document.getElementById('dobErr').innerHTML = ""
    document.getElementById("dob").style.borderColor = "green"
    return true
  }


}


function validMail() {
  var email = document.getElementById("email").value;
  var emailErr = document.getElementById("emailErr");
  var atIndex = email.indexOf("@");

  if (email.trim() === "") {
    emailErr.innerHTML = "Please enter an email";
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else if (atIndex === -1 || email.indexOf(".") === -1) {
    emailErr.innerHTML = "Please enter a valid email";
    document.getElementById("email").style.borderColor = "red";
    return false;
  } else {
    var domain = email.substring(atIndex + 1);
    if (/^\d/.test(domain)) {
      emailErr.innerHTML = "Numbers are not allowed immediately after '@'";
      document.getElementById("email").style.borderColor = "red";
      return false;
    } else {
      emailErr.innerHTML = "";
      document.getElementById("email").style.borderColor = "green";
      return true;
    }
  }
}


function validMobile() {
  var mobile = document.getElementById("mobile").value;
  var mobErr = document.getElementById("mobErr");

  if (mobile === "") {
    mobErr.innerHTML = "Please enter mobile";
    document.getElementById("mobile").style.borderColor = "red";
    return false;
  } else {
    if (mobile.length === 10 && (mobile.startsWith('9') || mobile.startsWith('8') || mobile.startsWith('7') || mobile.startsWith('6'))) {
      mobErr.innerHTML = "";
      document.getElementById("mobile").style.borderColor = "green";
      return true;
    } else {
      mobErr.innerHTML = "Number should start with 9, 8, 7, or 6 and should be 10 digits long";
      document.getElementById("mobile").style.borderColor = "red";
      return false;
    }
  }
}



function validGender() {
  var male = document.getElementById("male").checked;
  var female = document.getElementById("female").checked;

  if (!male && !female) {

    document.getElementById("genErr").innerHTML = "Please select gender";

    return false
  }
  else {

    document.getElementById('genErr').innerHTML = ""
    return true
  }




}


function validCountry() {

  var country = document.getElementById("inputCountry").value;



  if (country === "") {
    document.getElementById("countryErr").innerHTML = "Please select  country";
    document.getElementById("inputCountry").style.borderColor = "red";

    return false

  }

  else {
    document.getElementById('countryErr').innerHTML = ""
    document.getElementById("inputCountry").style.borderColor = "green"
    return true
  }



}

function validPincode() {


  var zip = document.getElementById("zip").value;

  if (zip === "") {
    document.getElementById("zipErr").innerHTML = "please enter pin code"

    document.getElementById("zip").style.borderColor = "red";
    return false
  }
  else {
    if (zip.length == 6 && zip.length == 6) {

      document.getElementById('zipErr').innerHTML = ""
      document.getElementById("zip").style.borderColor = "green"

      return true
    }
    else {
      document.getElementById("zipErr").innerHTML = "pin code should be 6 digits";
      return false
    }

  }

}
function validChekbox() {
  var chek = document.getElementById("check").checked;

  if (!chek) {
    document.getElementById("checkErr").innerHTML = "please conform the check box"
    return false
  }
  else {
    document.getElementById("checkErr").innerHTML = "";
    return true
  }

}


function validPassword() {

  let password = document.getElementById("password").value;
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  const specialChars = "!@#$%^&*()_-+=<>,.?/:;{}[]|";
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }

    else if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    }

    else if (char >= '0' && char <= '9') {
      hasNumber = true;
    }

    else if (specialChars.includes(char)) {
      hasSpecialChar = true;
    }
  }


  if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {

    document.getElementById("pssErr").innerHTML = "";
    document.getElementById("password").style.borderColor = "green";
    return true;
  } else {

    document.getElementById("pssErr").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    document.getElementById("password").style.borderColor = "red";
    return false;
  }

}



function revalidPassword() {

  let password = document.getElementById("password2").value;
  let hasUppercase = false;
  let hasLowercase = false;
  let hasNumber = false;
  let hasSpecialChar = false;

  const specialChars = "!@#$%^&*()_-+=<>,.?/:;{}[]|";
  for (let i = 0; i < password.length; i++) {
    const char = password[i];

    if (char >= 'A' && char <= 'Z') {
      hasUppercase = true;
    }

    else if (char >= 'a' && char <= 'z') {
      hasLowercase = true;
    }

    else if (char >= '0' && char <= '9') {
      hasNumber = true;
    }

    else if (specialChars.includes(char)) {
      hasSpecialChar = true;
    }
  }



  if (hasUppercase && hasLowercase && hasNumber && hasSpecialChar) {

    document.getElementById("pserr2").innerHTML = "";
    document.getElementById("password2").style.borderColor = "green";
    return true;
  } else {

    document.getElementById("pserr2").innerHTML = "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.";
    document.getElementById("password2").style.borderColor = "red";
    return false;
  }

}

function matchPassword() {
  let password = document.getElementById("password").value;
  let password2 = document.getElementById("password2").value;

  if (password == password2) {
    document.getElementById("pssErr").innerHTML = "";
    return true;

  }
  else {
    return false;


  }






}










function myFunction() {
  var x = document.getElementById("password");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
function myFunction1() {
  var y = document.getElementById("password2");
  if (y.type === "password") {
    y.type = "text";
  } else {
    y.type = "password";
  }
}


