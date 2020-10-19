function myfunction() {
  event.preventDefault();
  var maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]; /* Sun - Sat */
  var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]; /* Sun - Sat */
  var date = document.getElementById("date").value;   // User's date of Birth is stored here //
  var dayOfBirth = new Date(date);
  var theDay = dayOfBirth.getDay();  // return user's DoB index eg. Sun=0, Mon=1 //
  var gender = document.getElementsByName("gender");
  var name = document.getElementById("name").value;
 
   for (var i = 0; i <= gender.length; i++) {
    if (gender[i].checked) {
      if (gender[i].value === "female") {
        document.getElementById('message').innerHTML = name + " your Akan name is " + femaleAkanNames[theDay];
      }
      else {
        document.getElementById('message').innerHTML = name + " your Akan name is " + maleAkanNames[theDay];
      }
    }

    else {
    
    }
  }
}