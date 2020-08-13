const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endgameEl = document.getElementById('end-game-container');
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

let difficulty = localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium' ;


//set difficulty selected value

//focus text on my input field

text.focus();


//start counting down

const timeinterval = setInterval(updateTime, 1000);
 

//update time function
function updateTime(){
  time--;

  timeEl.innerHTML = time + 's';

  if(time === 0){
    clearInterval(timeinterval);

    //end game

    gameOver();
  }
}

//game is over show end screen

function gameOver(){

  endgameEl.innerHTML =  `

  <h1> Time ran out </h1>

<p> Your final score is ${score}</p>

<button onclick="location.reload()">Reload</button>
  
  
  `;
endgameEl.style.display = 'flex';
}

//genrate rado m word from y array
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


//defficulty through timing

if(difficulty === 'hard'){
  time += 2;
}

  else if(difficulty === 'medium'){
    time += 3;
  }

  else{
    time += 5;
  }
}


updateTime();

}
)

//settings btn


settingsBtn.addEventListener('click', () =>{
  settings.classList.toggle('hide');
});

//set difficulty selected value

difficultySelect.value =

localStorage.getItem('difficulty') !== null ? localStorage.getItem('difficulty') : 'medium';





//settings select

settingsForm.addEventListener('change', e =>{

  difficulty = e.target.value;

  localStorage.setItem('difficulty', difficulty);

})