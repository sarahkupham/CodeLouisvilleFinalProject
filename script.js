function sConsole() {
    var data = document.getElementById("email");
    var dataValue = data.value;
    console.log(data.value);
    var email = document.getElementById('email');
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    if (!filter.test(email.value)) {
      
    alert(document.getElementById('email').value + ' is not valid. Please enter a valid email address and resubmit.');
    email.focus;
    return false;
 }



 sConsole();

var submitButton = document.getElementById("submit");
submitButton.addEventListener("click",(e)=>{e.preventDefault(); sConsole();}) 
}