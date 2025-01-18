window.onload = ()=>{
    console.log("hey there believer");
    getVerse({book:'john',chapter:3,verse:16})
}


const refresh = document.querySelector('.angel');
const scripture = document.querySelector('.scripture');
const word = document.querySelector('.word');
const mode = document.querySelector('.color-mode');
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

function lineLoading(){
    let line = document.querySelector('.loading-bar');
    if(line){
        line.classList.toggle('hidden');
    }
}

function changeMode(){
    document.querySelector('body').classList.toggle('light');
}

if(mode){
    mode.onclick = changeMode;
}
// refresh.onclick = ()=>{
//     getVerse({book:'mathew',chapter:3,verse:10})
// }


async function fetchData(verseUrl){
    
    try{
        loading = true;
        updateWord('');
        updateScripture('loading...');
        lineLoading();
        
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
        updateWord('Verse not found.Try another verse.');
        updateScripture('error 404');
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
    if(data){
        loading = false;
        updateScripture(data.reference);
        updateWord(data.text);
        lineLoading();
    }
}

getVerse();