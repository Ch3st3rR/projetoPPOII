/*https://opentdb.com/api.php?amount=10*/

/* const _question = document.getElementById('question'); 
const _options = document.querySelector('.quiz-options'); 
const _correctScore = document.getElementId('correct-score'); 
const _totalQuestion = document.getElementId('total-question'); 
const _checkBin = document.getElementById('play-again'); 
const _PlayAgainBtn = document.getElementById('play-again');
const _result = document.getElementById('result'); 

let correctAnswer = "", correctScore = askedCount = 0, totalQuestion = 10;

// event listener
function eventListeners(){
    _checkBin.addEventListener('click', checkAnswer); 
    _PlayAgainBtn.addEventListener('click', restartQuiz); 
}

document.addEventListener('DOMContentLoaded', () => {
  loadQuestion(); 
  eventListeners(); 
  _totalQuestion.textContent = totalQuestion;
  _correctScore.textContent = correctScore; 
});

async function loadQuestion(){
  const APIUrl = 'https://opentdb.com/api.php?amount=10';
  const result = await fetch('${APIUrl}'); 
  const data = await result.json();
  // console.log(data.results[0]);  
  _result.innerHTML = ""; 
  showQuestion(data.results[0]); 
}

// display question and options
function showQuestion(data) {
  _checkBin.disabled = false;
  correctAnswer = data.correct_answer; 
  let incorrectAnswers = data.incorrect_answers; 
  let optionsList = [...incorrectAnswers, correctAnswer];
  optionsList.sort(() => Math.random() - 0.5); // Embaralha as respostas

  _question.innerHTML = `${data.question}<br><span class="category">${data.category}</span>`;
  _options.innerHTML = optionsList.map((option, index) => `
    <li>
      ${index + 1}. <span>${option}</span>
    </li>
  `).join('');
}

  selectOption();

  // options selection
  function selectOptions() {
    _options.querySelectorAll('li').forEach(option => {
      option.addEventListener('click', () => {
        if (_options.querySelector('.selected')) {
          const activeOption = _options.querySelector('.selected');
          activeOption.classList.remove('selected'); 
        }
        option.classList.add('selected'); 
      });
    });
  
    console.log(correctAnswer); 
  }
  

// answer checking 
let selectedAnswer = _options.querySelector('.selected span').textContent;

if (selectedAnswer.trim() === HTMLDecode(correctAnswer.trim())) {
  correctScore++;
  _result.innerHTML = '<p><i class="fas fa-check"></i> Correct Answer!</p>';
} 

else {
  _result.innerHTML = `<p><i class="fas fa-times"></i> Incorrect Answer;</p><p><small><b>Correct Answer: </b>${correctAnswer}</small></p>`;
}

// to convert html entities into normal text of correct answer if there is any
function HTMLDecode(textString) {
  let doc = new DOMParser().parseFromString(textString, "text/html"); 
  return doc.documentElement.textContent; 
}


function checkCount() {
  askedCount++; 
  setCount(); 
  if (askedCount === totalQuestion) { // Use triple equals (===) for equality comparison
    _result.innerHTML += `<p> Your score is ${correctScore}. </p>`; // Use backticks (`) for string interpolation
    _playAgainBtn.style.display = "block"; 
    _checkBtn.style.display = "none"; 
    alert("hello"); 
  } else {
    setTimeout(() => {
      loadQuestion(); 
    }, 300);
  }
}


/* function setCount() {
  _totalQuestion(); // Call the _totalQuestion function (assuming it is defined elsewhere)
  // Add any additional code here
  setTimeout(() => {
    // Code to be executed after 300 milliseconds goes here (if needed)
  }, 300);
}

function setCount(){
  _totalQuestion.textContent = totalQuestion; 
  _correctScore.textContent = correctScore; 
}

function restartQuiz() {
  correctScore = askedCount = 0; 
  _playAgainBtn.style.display = "none"; 
  _checkBtn.style.display = "block"; 
  _checkBin.disabled = false; 
  setCount(); 
  loadQuestion(); 
}

const domQuestao = document.querySelector("div.questao")
const domAlternativas = document.querySelector("div.alternativas")
const domResposta = document.querySelector("div.resposta")
const domBtProximo = document.querySelector("button")

let parsedQuestoes
let alternativaCorretaAtual

async function main() {
  const requisicaoQuestoes = await fetch("questoes.json")
  parsedQuestoes = await requisicaoQuestoes.json()
  randomizarQuestoesEColocarNaTela()
}

function randomizarQuestoesEColocarNaTela() {
  domAlternativas.innerHTML = ""
  domResposta.innerHTML = ""
  const randomIndex = Math.floor(Math.random() * parsedQuestoes.length);
  const questao = parsedQuestoes[randomIndex]
  questao.alternativas.forEach(alternativa => {
    domAlternativas.innerHTML += `<div>${alternativa}</div>`
  })
  domQuestao.innerText = questao.questao
  alternativaCorretaAtual = questao.correta
}*/ 

/* <button id="play-btn">Jogar</button>
function play() {
  // Esconde o botão "play"
  document.getElementById("play-btn").style.display = "none";
  // Mostra as questões
  document.getElementById("questions").style.display = "block";
  // Mostra o botão "próximo"
  document.getElementById("next-btn").style.display = "block";
}
document.getElementById("play-btn").addEventListener("click", play);
<button id="next-btn" style="display: none;">Próximo</button>
function nextQuestion() {
  // Avança para a próxima pergunta
  // ...
}
document.getElementById("next-btn").addEventListener("click", nextQuestion);


function responder(event) {
  if(!alternativaCorretaAtual)
    return
  const domAlternativaClicada = event.target.closest("div")
  const indexAlternativaClicada = [...domAlternativaClicada.parentElement.children].indexOf(domAlternativaClicada)
  if(indexAlternativaClicada == alternativaCorretaAtual) {
    domResposta.innerText = "CERTO!"
  } else {
    domResposta.innerText = "ANIMAL"
  }
  alternativaCorretaAtual = null
}

domBtProximo.addEventListener("click", randomizarQuestoesEColocarNaTela)
domAlternativas.addEventListener("click", responder)

main() */ 


// fetch('question.json')
//     .then(response => response.json())
//     .then(data => { 
//     // Aqui você pode acessar as questões do JSON através do objeto 'data'
// });

// fetch('question.json')
//     .then(response => response.json())
//     .then(data => {
//     const pergunta = data.pergunta;
//     const alternativas = data.alternativas;
//     // Faça algo com a pergunta e as alternativas aqui
// });



const playButton = document.getElementById("play-btn");
const questionsContainer = document.querySelector(".quiz-body");
const questionElement = document.querySelector(".question");
const alternativesElement = document.querySelector(".alternatives");
const progressBar = document.getElementById("progress-bar");
const closeButton = document.getElementById("close-button");
// const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
let selectedAlternativeIndex = null;
let questionsData = null;
let respostaCorreta = null

let portalAudio = document.getElementById("portalMusic");
portalAudio.volume = 0.1
let correctSoundEffect = document.getElementById("correctSoundEffect");
correctSoundEffect.volume = 0.1

let jumpscare = document.getElementById("jumpscare");
jumpscare.volume = 0.05
jumpscare.style.display = "none";
jumpscare.addEventListener("ended", () => {
	jumpscare.style.display = "none";
});

fetch('question.json')
	.then(response => response.json())
    .then(data => {
    questionsData = data;
});

playButton.addEventListener("click", () => {
	playButton.innerHTML = "Próximo";
	questionsContainer.style.display = "block";
	playButton.style.display = "none";

	showQuestion();
});

closeButton.addEventListener("click", () => {
	welcoming();
});

function showQuestion() {
	const question = questionsData[currentQuestionIndex];
	questionElement.innerText = question.questao;
	respostaCorreta = question.correta;
	console.log(respostaCorreta);
	alternativesElement.innerHTML = "";
	question.alternativas.forEach((alternative, index) => {
	const alternativeElement = document.createElement("button");
	alternativeElement.innerText = alternative;
  if(currentQuestionIndex % 2 == 0){
    alternativeElement.style.backgroundColor = "#ffff00";
  }else if(currentQuestionIndex % 2 != 0){
    alternativeElement.style.backgroundColor = "#ffffff";
  }
    alternativeElement.addEventListener("click", () => {
		currentQuestionIndex++;
		alternativeElement.dataset.isCorrect = index === respostaCorreta-1 ? "true" : "false";
		checkAnswer(alternativeElement);
		selectedAlternativeIndex = index;
    });
    alternativesElement.appendChild(alternativeElement);
  });
}

function checkAnswer(selectedAlternativeElement) {
  const isCorrect = selectedAlternativeElement.dataset.isCorrect;

  if (isCorrect === "true") {
    selectedAlternativeElement.classList.add("correct");
    correctSoundEffect.play();
    score += 1;
  } else {
    selectedAlternativeElement.classList.add("incorrect");
    jumpscare.style.display = "block";
    jumpscare.play();
  }

  progressBar.innerHTML = `${currentQuestionIndex} / ${questionsData.length}`;
  const hasNextQuestion = currentQuestionIndex < questionsData.length;

  if (hasNextQuestion) {
    showQuestion();
  } else {
    console.log("jogo finalizado");
    showScore();
  }
}


function showScore() {
	questionElement.innerText = `Sua pontuação foi ${score} de ${questionsData.length}!`;
	alternativesElement.innerHTML = "";
	playButton.style.display = "block";
	playButton.innerText = "Jogar novamente";
	playButton.addEventListener("click", () => {
		currentQuestionIndex = 0;
		score = 0;
		progressBar.innerHTML = "0/0";
		playButton.style.display = "none";
		welcoming();
	});
}

function welcoming() {
	questionElement.innerText = "";
	alternativesElement.innerHTML = "";
	playButton.style.display = "block";
	playButton.innerText = "Jogar";
	playButton.addEventListener("click", () => {
		currentQuestionIndex = 0;
		score = 0;
		progressBar.innerHTML = "0/0";
		playButton.style.display = "none";
		showQuestion();
  });

  window.addEventListener("beforeunload", (event) => {
      event.preventDefault();
      if (score > 0) {
          event.returnValue = "";
      } else {
              window.close();
          }
      }
  )
    }



    



