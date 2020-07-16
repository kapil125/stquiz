const container = document.getElementById("container");
const nextBtn = document.getElementById("next-btn");
const questionHolder = document.getElementById("question");
const answerOne = document.getElementById("one");
const answerTwo = document.getElementById("two");
const answerThree = document.getElementById("three");
const answerFour = document.getElementById("four");
const resultBox = document.getElementById("result-box");
const barBox = document.getElementById("bar-container");
const scorePlacer = document.getElementById('scored');
let myMusic= document.getElementById("music");

let barValue = 0;
let result;
let checker = 0;
let userAnswers = [];

alert("StrangerThings Theme Music Will Be Played!!!!!!!!!");

const questions = [
  `2)What is real name of Mike Wheeler?`,
  `3)What is Max fullname?`,
  `4)Soundtrack played when Will's body is found?`,
  `5)What's Jim Hopper daughter's name?`,
  `6)What's El's mother name?`,
  `7)What's the name of S01 Chapter 4?`,
  `8)Where are Billy and Max from?`,
  `9)What is supposed to attract Demogorgan?`,
  `10)What's Dustin name according to Mouth-Breather?`
];
const answers = [
  ["Mike Wolfhard", "Finn Wolfhard", "Noah Schanapp", "Joy Keery"],
  ["Maxine Sinclair", "Maxine Byers", "Maxine Hopper", "Maxine Mayfield"],
  ["Heroes", "Die In Your Arms", "Never Surrender", "Night We Met"],
  ["Millie", "Jane", "Erica", "Sarah"],
  ["Karen", "Joyce", "Terry", "Maya"],
  ["Jolly Wolly", "Body Of Will Byers", "The Body", "Died Will"],
  ["Mirkwood", "Hawkins", "Paris", "California"],
  ["Meat", "Blood", "Animals", "Human"],
  ["Toothless", "Frog-Face", "Midnight", "Weirdo"]
];
const correctAns = ["three", "two", "four", "one", "four", "three", "three", "four", "two", "one"];

const nextQuestion = () => {
  if (
    answerOne.className === "active" ||
    answerTwo.className === "active" ||
    answerThree.className === "active" ||
    answerFour.className === "active"
  ) {
    answerOne.className = "";
    answerTwo.className = "";
    answerThree.className = "";
    answerFour.className = "";

    questionHolder.textContent = questions[checker];
    answerOne.textContent = answers[checker][0];
    answerTwo.textContent = answers[checker][1];
    answerThree.textContent = answers[checker][2];
    answerFour.textContent = answers[checker][3];
    checker++;
  } else {
    alert("select the answer first!!!!!!!!!!!!!!!");
  }
};

const click = (check) => {
  if (
    answerOne.className === "active" ||
    answerTwo.className === "active" ||
    answerThree.className === "active" ||
    answerFour.className === "active"
  ) {
    alert("answerIsLocked");
  } else {
    check.className = "active";
    play();
    userAnswers.push(check.id);
    if (checker === questions.length) {
      resultBox.innerHTML = `
        <button id="resultBtn">Show Result</button>
        `;
      nextBtn.remove();
      result = document.getElementById("resultBtn");
      result.addEventListener("click", totalScored);
    }
  }
};

const totalScored = () => {
  const toChange = document.querySelector("h1");
  toChange.textContent = "Showing Result";
  result.remove();
  container.remove();
  barBox.style.display = "flex";

  let scored = scoreCalculation();
  const progressBar = () => {
    const barProg = document.getElementById("inner-bar");
    if(barValue >= scored){
      return;
    }else {
    barValue += .5;
    barProg.style.width = `${barValue}%`;
    scorePlacer.textContent = `You Scored \n ${Math.trunc(barValue)}%`;
  }
};
  let intervaler = setInterval(progressBar, 50);
};


const scoreCalculation  = () => {
  let totalScore = 0;
  for(i = 0; i< userAnswers.length; i++) {
    if(correctAns[i] === userAnswers[i]) {
      totalScore += 10;
    }
  }
  return totalScore;
};


nextBtn.addEventListener("click", nextQuestion);
answerOne.addEventListener("click", click.bind(null, answerOne));
answerTwo.addEventListener("click", click.bind(null, answerTwo));
answerThree.addEventListener("click", click.bind(null, answerThree));
answerFour.addEventListener("click", click.bind(null, answerFour));
  
function play() {
  myMusic.play();
}
