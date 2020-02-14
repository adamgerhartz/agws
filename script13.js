function validateForm() {
  var a       = document.forms["myForm"]["name"].value;
  var aBord   = document.getElementById("name");
  var b       = document.forms["myForm"]["email"].value;
  var bBord   = document.getElementById("email");
  var c     = document.forms["myForm"]["subject"].value;
  var cBord = document.getElementById("subject");
  var d     = document.forms["myForm"]["message"].value;
  var dBord = document.getElementById("message");
  
  // blank info
  if (a == "") {
    aBord.style.borderRight = "4px solid red";
  } else {
    aBord.style.borderRight = "none";
  }
  if (b == "") {
    bBord.style.borderRight = "4px solid red";
  } else {
    bBord.style.borderRight = "none";
  }
  if (c == "") {
    cBord.style.borderRight = "4px solid red";
  } else {
    cBord.style.borderRight = "none";
  }
  if (d == "") {
    dBord.style.borderRight = "4px solid red";
  } else {
    dBord.style.borderRight = "none";
  }
  

  // final verdict
  if (aBord.style.borderRight   != "none" || bBord.style.borderRight   != "none" ||
      cBord.style.borderRight   != "none" || dBord.style.borderRight != "none") {
    return false;
  } else if (aBord.style.borderRight   == "none" && bBord.style.borderRight   == "none" &&
             cBord.style.borderRight   == "none" && dBord.style.borderRight == "none") { 
    loadDoc();
    return true;
  }
}

function resetForm() {
  var x = document.getElementById("other");
  var y = document.getElementById("form_2");
  var z = document.getElementById("form_2_1");
  var a = document.getElementById("form_2_2");
  var aBord   = document.getElementById("name");
  var bBord   = document.getElementById("email");
  var cBord   = document.getElementById("subject");
  var dBord = document.getElementById("message");
  aBord.style.borderRight = bBord.style.borderRight = cBord.style.borderRight = 
  dBord.style.borderRight = "none";
}

/**************************************                                                            
* Function: loadDoc                                         
* This function will send a XMLHttpRequest                                                         
* object to the server ands calls callback                                                         
***************************************/
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  var elements = document.getElementsByClassName("formVal");
  var formData = new FormData();
  for (var i = 0; i < elements.length; i++) {
    formData.append(elements[i].name, elements[i].value);
  }
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("demo").innerHTML = this.responseText;
    }
  };
  xhttp.open("POST", "assign13.php", true);
  xhttp.send(formData);
}



