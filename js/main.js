



var user= {};
var users = [];
var signedin={};



var signedin_user=JSON.parse(localStorage.getItem("signedinuser"));
var signup=document.getElementById("sign_up");
var login=document.getElementById("log_in");
var sin=document.getElementById("loog_in");
var logout=document.getElementById("log_out");
if (signedin_user != null)
if(signedin_user.username != null){
    signup.setAttribute("class", "hid");
    login.setAttribute("class", "hid");
    sin.setAttribute("class", "vis");
    sin.textContent=signedin_user.username;
    logout.setAttribute("class", "vis");
}

logout.addEventListener("click", function(){
    var msg = window.confirm("Are you sure?");
    
    if ( msg==false){return;}
    
    
    
   localStorage.setItem("signedinuser", null);
    window.location.reload();
    
     
    
    
    });
    
//registracija
signup.addEventListener("click", function(){
 
document.getElementById("login").setAttribute("class", "hid");
var ff = document.getElementById("regis");

if (ff.getAttribute("class") == "hid"){
    ff.setAttribute("class", "registration");
} else if (ff.getAttribute("class") == "registration"){
    ff.setAttribute("class", "hid")
}
document.getElementById("yt").style.display="none"
//Provera pojedinacnih polja
ff.onsubmit = function(){
  var error = document.getElementById('error1');
 
  var name = document.getElementById("name_reg").value.trim();
 if (name == "") {
   error.textContent = "Name required";
   return false;
 }  
 for ( let i=0; i < name.length; i++){
     if (name.charAt(i).toUpperCase() == name.charAt(i).toLowerCase()){
     error.textContent = "Letters only"
     return false;
     } }

     var email= document.getElementById("email").value.trim();
     if (email ==""){
         error.textContent = "Email is missing"
         return false;
     }

     if( email.includes("@") ==false || email == " " || email.includes(" ")){
         error.textContent = "Invalid email format"
         return false;
     }
     var username = document.getElementById("id_reg").value.trim();
     if (username == "") {
       error.textContent = "Username required";
       return false;
     }
     var f = fetch();
    if (f != null) {
      for (var i = 0; i < f.length; i++) {
        if (f[i].username == username) {
          error.textContent = "Username is taken";
          return false;
        }
      }
    }

     var password = document.getElementById("reg_pass").value.trim();
    if (password == "") {
      error.textContent = "Password required";
      return false;
    }

    var num = 0;
    var low = 0;
    var up = 0;

    for (i=0; i<password.length; i++){
        if (password[i]>="0" && password[i]<="9"){
            num++;
        } else if ( password[i].toUpperCase()==password[i]){
           up++;
        } else if ( password[i].toLowerCase()==password[i]){
            low++;
         } 
         
    }
    if (up == 0 || low == 0 || num == 0) {
        error.textContent =
          "Must contain at least one capital letter and a number";
        return false;
}


 user.name= name;
 user.email= email;
 user.username=username;
 user.password= password;

if (f !=null){
    f.push(user);
    line = JSON.stringify(f);

} else {
    users.push(user);
    line = JSON.stringify(users);
}
localStorage.setItem("UsersPNSHR", line);

};


});

//Logovanje
login.addEventListener("click", function () {
  var f = fetch();
  if (f == null) {
    alert("User are not registered!");
    return false;
  } else {
    document.getElementById("regis").setAttribute("class", "hid");
    var ul = document.getElementById("login");

    if (ul.getAttribute("class") == "log") {
      ul.setAttribute("class", "hid");
    } else if (ul.getAttribute("class") == "hid") {
      ul.setAttribute("class", "log");
    }

    document.getElementById("yt").style.display="none"

    ul.onsubmit = function () {
      var error = document.getElementById("error");
      var usrname = document.getElementById("id_log").value.trim();
      var password = document.getElementById("id_pass").value.trim();

      for (let i = 0; i < f.length; i++) {
        if (f[i].username == usrname) {
          if (f[i].username == usrname && f[i].password == password) {
            signedin.username = usrname;
            signedin.password = password;
            var empty1 = JSON.stringify(signedin);
            localStorage.setItem("signedinuser", empty1);
            return;
          } else {
            if (f[i].username == usrname && f[i].password != password) {
              error.textContent = "Incorrect password";
              return false;
            }
          }
        } else {
          error.textContent = "Incorrect username";
          return false;
        }
      }
    };

    ul.onreset=function(){
        var msg=window.confirm("Confirm");
        if (msg==false){
            return false;
        }
        window.location.reload();
    }
  }
});


//Dohvatanje objekta iz local storage-a
 function fetch (){
    var fetch=localStorage.getItem("UsersPNSHR");
    var f = JSON.parse(fetch);
    return f;
}


