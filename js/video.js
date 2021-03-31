

  document.getElementById("nes").onclick = function(){
    var e = document.getElementById("yt");
    e.style.display = ((e.style.display != 'none') ? 'none' : 'block');
    document.getElementById("login").setAttribute("class", "hid")
    var ff = document.getElementById("regis");
   
    if (ff.getAttribute("class") == "registration"){
      ff.setAttribute("class", "hid");
  } 
 };


 