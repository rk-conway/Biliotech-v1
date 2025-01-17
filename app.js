window.onload = ()=>{
    console.log("hey there believer");
}


const refresh = document.querySelector('.angel');
const scripture = document.querySelector('.scripture');
const word = document.querySelector('.word');
let loading = true;

function updateWord(newWord){
    if(word){
        word.textContent = newWord;
    }
}

function updateScripture(newScripture){
    if(word){
        scripture.textContent = newScripture;
    }
}

refresh.onclick = ()=>{
    updateWord("for God so loved the world");
    updateScripture("mathew 3:16");
}



async function fetchData(verseUrl){

    try{

        const response = await fetch(verseUrl);
        
        if(!response.ok){
            throw new Error("Not in the book");
        }

        const data = await response.json();
        console.log(data);
    }
    
    catch(error){
        console.error(error);
    }
}

function getVerse(){
    let book = "mathew";
    let chapter = 1;
    let verse = 2;

    let verseUrl = "https://bible-api.com/mathew+3:16";

    fetchData(verseUrl);
}

getVerse();