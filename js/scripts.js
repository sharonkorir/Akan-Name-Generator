function submitForm (event){
  event.preventDefault();
  //console.log("test");
  var birthday = document.getElementById("birthday").value;
  console.log(birthday);
  //split string
  var birthdayArray = birthday.split("-");
  console.log(birthdayArray);
  var dateOfBirth = birthdayArray[2];
  var month = birthdayArray[1];
  var year = birthdayArray[0];
  // convert to integers
  var dateInt = parseInt(dateOfBirth);
  var monthInt = parseInt(month);
  //get CC and YY
  var century = year.slice(0,2);
  var bornYear = year.slice(2,5);
  console.log(century + " " + bornYear);
  var CC = parseInt(century);
  var YY = parseInt(bornYear);
  console.log(CC + " " + YY);
  //invalid input alert
  if(validateDate(birthday)){
    document.getElementById("userMessage").hidden = true;
    var dayOfBirth = getDayOfBirth(dateInt, monthInt, CC, YY);
    console.log(dayOfBirth)
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if(male){
      console.log('male selected')
      var maleName = generateMaleName(dayOfBirth)
      console.log(maleName)
    } else if(female){
      console.log('female selected')
      var femaleName = generateFemaleName(dayOfBirth)
      console.log(femaleName)
    } else{
      console.log('none selected')
      document.getElementById("userMessage").hidden = false;
      document.getElementById("userMessage").innerText = "gender not set.";
    }
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
function getDayOfBirth (dateInt, monthInt, CC, YY,){
  console.log( CC + " " + YY);
  var bornDay = ( ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(monthInt+1)/10)) + dateInt ) % 7;
  var dw = Math.floor(bornDay);
  console.log(dw);
  generateMaleName(dw);
}

function generateMaleName(dw) {
  console.log(dw);
  var week = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  if(dw == 1 && "male selected" == true){
    alert("You were born on" + week[0] + "Your Akan name is " + maleNames[0]);
   } else if(dw == 2){
     alert("no")
   }
  }