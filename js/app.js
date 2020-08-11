const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game');
const settingsBtn = document.getElementById('setting-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('setting-form');
const difficultySelect = document.getElementById('difficulty');





//List of words

const words = [

'sigh',
'tense',
'awesome',
'ball',
'juice',
'tomatoes',
'child',
'eight',
'egg',
'love',
'stewart',
'admit',
'fever',
'virus'
];


//init word

let randomword;


//init score

let score = 0;


//init time

let time = 10;


//focus text on my input field

text.focus();


//genrate radom word from y array
function getRandomWord(){
  return words[Math.floor(Math.random()* words.length)];
}


//add random word to the DOM

function addWordToDom(){

randomword = getRandomWord()
word.innerHTML = randomword;
scoreEl.innerHTML = score;

}

addWordToDom();

//increase score function

function increaseScore(){
  score++;
}

//add an event listeners to my input


text.addEventListener('input', (e)=>{
const insertedtext = e.target.value;

if(insertedtext === randomword){
  addWordToDom();

  increaseScore();

  
//empty the field

e.target.value = '';
}
  else{
    console.log('no match');
  }
}
)