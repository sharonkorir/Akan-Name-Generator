function submitForm (event){
  event.preventDefault();
  console.log("test");
  var birthday = document.getElementById("birthday").value;
  console.log(birthday);
  if(validateDate(birthday)){
    document.getElementById("userMessage").hidden = true;
    var dayOfBirth = getDayOfBirth(birthday);
    console.log(dayOfBirth)
    var male = document.getElementById("male").checked;
    var female = document.getElementById("female").checked;
    if(male){
      console.log('male selected', dayOfBirth);
      var maleName = generateMaleName(dayOfBirth)
      console.log(maleName)
    } else if(female){
      console.log('female selected', dayOfBirth)
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

function getDayOfBirth (date){
  var d = new Date(date);
  var day = d.getDay();
  var weekDay = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
  return weekDay[day]
}

function generateMaleName(day) {
  console.log(day)
  var maleNames = [
    {
      name: 'Kwasi',
      day: 'Sunday'
    },
    {
      name: 'Kwadwo',
      day: 'Monday'
    },
    {
      name: 'Kwabena',
      day: 'Tuesday'
    },
    {
      name: 'Kwaku',
      day: 'Wednesday'
    },
    {
      name: 'Yaw',
      day: 'Thursday'
    },
    {
      name: 'Kofi',
      day: 'Friday'
    },
    {
      name: 'Kwame',
      day: 'Saturday'
    }
  ]
  console.log(maleNames)
  maleNames.forEach(function (object) {
    if(object.day === day){
      return object.name;
    }
  })
}

function generateFemaleName(day) {
  console.log(day)
  var femaleNames = [
    {
      name: 'Akosua',
      day: 'Sunday'
    },
    {
      name: 'Adwoa',
      day: 'Monday'
    },
    {
      name: 'Abenaa',
      day: 'Tuesday'
    },
    {
      name: 'Akua',
      day: 'Wednesday'
    },
    {
      name: 'Yaa',
      day: 'Thursday'
    },
    {
      name: 'Afua',
      day: 'Friday'
    },
    {
      name: 'Ama',
      day: 'Saturday'
    }
  ]
  console.log(femaleNames)
  femaleNames.forEach(function (object) {
    if(object.day === day){
      return object.name;
    }
  })
}