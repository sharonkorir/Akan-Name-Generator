function submitForm (event){
  event.preventDefault();
  console.log("test");
  var birthday = document.getElementById("birthday").value;
  console.log(birthday);
  if(validateDate(birthday)){
    document.getElementById("userMessage").hidden = true;
    console.log(getDayOfBirth(birthday))
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

function validateGender (){

}
function getDayOfBirth (date){
  var d = new Date(date);
  var day = d.getDay();
  var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekDay[day]
}