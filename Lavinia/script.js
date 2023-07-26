function validateForm() {
    var checkin = document.getElementById("checkin").value;
    var checkout = document.getElementById("checkout").value;
    var guest = document.getElementById("guest").value;
  
    if (checkin == "" || checkout == "" || guest == "") {
      alert("Please fill out all of the fields.");
      return false;
    }
  
    if (checkout < checkin) {
      alert("Check out date must be after check in date.");
      return false;
    }
  
    return true;
  }
  
  document.getElementById("form").onsubmit = validateForm;
  