function submitForm (event){
  event.preventDefault();
  //console.log("test");
  var birthday = document.getElementById("birthday").value;
  var gender = document.getElementById("gender").value;
  console.log(gender);
  //split string
  var birthdayArray = birthday.split("-");
  var dateOfBirth = birthdayArray[2];
  var month = birthdayArray[1];
  var year = birthdayArray[0];
  // convert to integers
  var dateInt = parseInt(dateOfBirth);
  var monthInt = parseInt(month);
  //get CC and YY
  var century = year.slice(0,2);
  var bornYear = year.slice(2,5);
  var CC = parseInt(century);
  var YY = parseInt(bornYear);
  //invalid input alert
  if(validateDate(birthday)){
    document.getElementById("userMessage").hidden = true;
    var dayOfBirth = getDayOfBirth(dateInt, monthInt, CC, YY, gender);
    console.log(dayOfBirth)
  } else {
    document.getElementById("userMessage").hidden = false;
    document.getElementById("userMessage").innerText = "birthday not set.";
  } 
}

function validateDate (date){
  if(date === "" || date === " "){
    console.log("input invalid")
    return false;
  } else {
    //if valid
    console.log("input valid")
    return true;
  }
}

// add get day formula
//Day of the week (d) = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) mod 7
function getDayOfBirth (dateInt, monthInt, CC, YY, gender){
  console.log( CC + " " + YY);
  var bornDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthInt+1)/10)) + dateInt ) % 7;
  var dw = Math.floor(bornDay);
  console.log(dw);
  getAkanName(dw, gender);
}

function getAkanName(dw, gender) {
  console.log(dw);
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]

  if (dw == 1 && gender === "male"){
    alert("You were born on " + week[0] + ". Your akan name is " +maleNames[0])
    } else if (dw == 1 && gender === "female") {
      alert("You were born on " + week[0] + ". Your akan name is " +femaleNames[0])
    } else if (dw == 2 && gender === "male") {
      alert("You were born on " + week[1] + ". Your akan name is " +maleNames[1])
    } else if (dw == 2 && gender === "female") {
      alert("You were born on " + week[1] + ". Your akan name is " +femaleNames[1])
    } else if (dw == 3 && gender === "male") {
      alert("You were born on " + week[2] + ". Your akan name is " +maleNames[2])
    } else if (dw == 3 && gender === "female") {
      alert("You were born on " + week[2] + ". Your akan name is " +femaleNames[2])
    } else if (dw == 4 && gender === "male") {
      alert("You were born on " + week[3] + ". Your akan name is " +maleNames[3])
    } else if (dw == 4 && gender === "female") {
      alert("You were born on " + week[3] + ". Your akan name is " +femaleNames[3])
    } else if (dw == 5 && gender === "male") {
      alert("You were born on " + week[4] + ". Your akan name is " +maleNames[4])
    } else if (dw == 5 && gender === "female") {
      alert("You were born on " + week[4] + ". Your akan name is " +femaleNames[4])
    } else if (dw == 6 && gender === "male") {
      alert("You were born on " + week[5] + ". Your akan name is " +maleNames[5])
    }else if (dw == 6 && gender === "female") {
      alert("You were born on " + week[5] + ". Your akan name is " +femaleNames[5])
    }else if (dw == 7 && gender === "male") {
      alert("You were born on " + week[6] + ". Your akan name is " +maleNames[6])
    }else if(dw == 7 && gender === "female") {
      alert("You were born on " + week[6] + ". Your akan name is " +femaleNames[6])
    }
  }
