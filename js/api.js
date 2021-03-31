 const jokeBtn = document.getElementById("but");
 const jokeTex = document.getElementById("jok");

 jokeBtn.addEventListener("click", () =>{
    
     const url = "https://api.chucknorris.io/jokes/random";
     fetch(url)
     .then(res =>{
         return res.json()
     }).then(data=>{
         console.log(data.value);
         jokeTex.innerText= data.value;
     })
 });