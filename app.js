window.onload = function(){
    let search= document.getElementById("btn");
    search.addEventListener("click", function(x){
        x.preventDefault();
        Fetch();
    });


const url = "http://localhost/info2180-lab4/superheroes.php"/*+"?query="+putsearchhere*/;

async function Fetch(){
    let response = await fetch(url);
    let data = await response.text();
    alert( data);
 
}
}
