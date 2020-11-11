window.onload = function(){
    let search= document.getElementById("btn");
    search.addEventListener("click", function(x){
        x.preventDefault();
        // Used to give an alert - Exercise 2
        // alertHeroes();
        processRequest();
    });


async function alertHeroes(){
    const url = "superheroes.php"
    let response = await fetch(url);
    let data = await response.text();
    alert(data);
 
    }
}

async function processRequest(){
    let form = document.getElementById('input');
    const url = `superheroes.php?query=${form.value}`;
    let response = await fetch(url);
    let data = await response.text();
    displayData(data);
}

function isJsonString(str) {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

function checkEmptyDiv(div){
    if(div.innerHTML === ''){
        return true;
    }else{
        return false;
    }
}

function addError(data, resultDiv){
    if(data.includes('Superhero not found')){
        resultDiv.classList.add('error');
    }else if (resultDiv.classList.contains('error')) {
            resultDiv.classList.remove('error');
        }
    }

function displayData(data){
    resultDiv = document.getElementById('result');
    if(checkEmptyDiv(resultDiv) === false){
        resultDiv.innerHTML = '';
    }
    addError(data, resultDiv);
    if(isJsonString(data) === true){
        let JSONData = JSON.parse(data);
        const nameElement = document.createElement('h1');
        const aliasElement = document.createElement('h3');
        const bioElement = document.createElement('p');
        let name = document.createTextNode(JSONData.name);
        let alias = document.createTextNode(`A.K.A ${JSONData.alias}`);
        let bio = document.createTextNode(JSONData.biography);
        nameElement.appendChild(name);
        resultDiv.appendChild(nameElement);
        aliasElement.appendChild(alias);
        resultDiv.appendChild(aliasElement);
        bioElement.appendChild(bio);
        resultDiv.appendChild(bioElement);
    }else{
        resultDiv.innerHTML = data;
    }
}