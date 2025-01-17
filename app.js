window.onload = ()=>{
    console.log("hey there believer");
    getVerse({book:'john',chapter:3,verse:16})
}


const refresh = document.querySelector('.angel');
const scripture = document.querySelector('.scripture');
const word = document.querySelector('.word');
let loading = true;


let book = document.querySelector('#book').value? document.querySelector('.angel') : "john";
let chapter =  document.querySelector('#chapter').value? document.querySelector('#chapter') : 3;
let verse =  document.querySelector('#verse').value? document.querySelector('#verse') : 16;


function updateBook(){
    if(document.querySelector('#book').value){
        book = document.querySelector('#book').value;
    }
}
function updateChapter(){
    if(document.querySelector('#chapter').value){
        chapter = document.querySelector('#chapter').value;
    }
}
function updateVerse(){
    if(document.querySelector('#verse').value){
        verse = document.querySelector('#verse').value;
    }
}

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
    getVerse({book:'mathew',chapter:1,verse:3})
}



async function fetchData(verseUrl){
    
    try{
        
        const response = await fetch(verseUrl);
        
        if(!response.ok){
            throw new Error("Not in the book");
        }
        
        const data = await response.json();
        console.log(data);
        updateAll(data);
        
    }
    
    catch(error){
        console.error(error);
    }
}

function getVerse(prompter){

    if(prompter){
        book = prompter.book;
        chapter = prompter.chapter;
        verse = prompter.verse;
    }
    
    let verseUrl = `https://bible-api.com/${book}+${chapter}:${verse}`;
    
    fetchData(verseUrl);
}

function updateAll(data){
    updateScripture(data.reference);
    updateWord(data.text);
}

getVerse();