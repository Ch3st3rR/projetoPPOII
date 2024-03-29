// Load the necessary elements
const playButton = document.getElementById("play-btn");
const questionsContainer = document.querySelector(".quiz-body");
const questionElement = document.querySelector(".question");
const alternativesElement = document.querySelector(".alternatives");
const progressBar = document.getElementById("progress-bar");
const closeButton = document.getElementById("close-button");
const choseMathButton = document.getElementById("chose-math");
const choseHistoryButton = document.getElementById("chose-history");
let currentQuestionIndex = 0;
let score = 0;
let selectedAlternativeIndex = null;
let questionsData = null;
let respostaCorreta = null;

const portalAudio = document.getElementById("portalMusic");
portalAudio.volume = 0.1

const correctSoundEffect = document.getElementById("correctSoundEffect");
correctSoundEffect.volume = 0.1

let jumpscare = document.getElementById("jumpscare");
jumpscare.volume = 0.05
jumpscare.style.display = "none";
jumpscare.addEventListener("ended", () => {
	jumpscare.style.display = "none";
});

start();

function start() {
	currentQuestionIndex = 0;
	score = 0;
	selectedAlternativeIndex = null;
	questionsData = null;
	respostaCorreta = null;
	document.body.style.backgroundImage = "url(./res/stars.gif)";
	document.body.style.backgroundSize = "auto";
	choseMathButton.style.display = "none";
	choseHistoryButton.style.display = "none";

	welcoming();
}

function showQuestion() {
	choseMathButton.style.display = "none";
	choseHistoryButton.style.display = "none";
	let question = questionsData[currentQuestionIndex];
	questionElement.innerText = question.questao;
	respostaCorreta = question.correta;
	console.log("Resposta correta: ", respostaCorreta);
	alternativesElement.innerHTML = "";
	// Will iterate in each question's alternatives
	question.alternativas.forEach((alternative, index) => {

		const alternativeElement = document.createElement("button");
		alternativeElement.innerText = alternative;

		if(currentQuestionIndex % 2 == 0){
			alternativeElement.style.backgroundColor = "#ffff00";
		}else if(currentQuestionIndex % 2 != 0){
			alternativeElement.style.backgroundColor = "#ffffff";
		}

		alternativeElement.addEventListener("click", () => {
			alternativeElement.dataset.isCorrect = index === respostaCorreta ? "true" : "false";
			checkAnswer(alternativeElement);
			selectedAlternativeIndex = index;
			currentQuestionIndex++;
			console.log("Index da questão: ", currentQuestionIndex);
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
		playJumpscare();
	}

	progressBar.innerHTML = `${currentQuestionIndex} / ${questionsData.length}`;
	const hasNextQuestion = currentQuestionIndex < questionsData.length;

	if (hasNextQuestion) {
		showQuestion();
	} else {
		showScore();
	}
}

function playJumpscare() {
	let randomNumJumpscare = Math.floor(Math.random() * 8 + 1);
	let jumpscare = document.getElementById("jumpscare");
	jumpscare.src = "./res/jumpscare " + randomNumJumpscare + ".mp4";
	jumpscare.volume = 0.5
	jumpscare.style.display = "none";
	jumpscare.addEventListener("ended", () => {
		jumpscare.style.display = "none";
	})
	jumpscare.style.display = "block";
	jumpscare.play();
	console.log("Jumpscare played: ", jumpscare.src)
	start();
}

console.log("Teste")
function showScore() {
	questionElement.innerText = `Sua pontuação foi ${score} de ${questionsData.length}!`;
	alternativesElement.innerHTML = "";
	playButton.style.display = "block";
	playButton.addEventListener("click", () => {
		start();
	});
}

closeButton.addEventListener("click", () => {
	start();
});

console.log("teste");

function selectQuestions() {
	choseMathButton.style.display = "block";
	choseHistoryButton.style.display = "block";
	playButton.style.display = "none";
	questionElement.innerText = "Selecione sua matéria."

	choseMathButton.addEventListener("click", () => {
		fetch('question2.json')
			.then(response => response.json())
			.then(data => {
			questionsData = shuffle(data);
			showQuestion();
		});
	});

	choseHistoryButton.addEventListener("click", () => {
		fetch('question.json')
			.then(response => response.json())
			.then(data => {
			questionsData = shuffle(data);
			showQuestion();
		});
	})
}

function welcoming() {
	questionElement.innerText = "Aperte JOGAR para iniciar.";
	alternativesElement.innerHTML = "";
	playButton.style.display = "block";
	playButton.innerText = "Jogar";

	playButton.addEventListener("click", () => {
		score = 0;
		selectQuestions();
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

function shuffle(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// Enquanto existirem elementos a serem embaralhados
	while (0 !== currentIndex) {

		// Seleciona um elemento restante
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// E faz a troca com o elemento atual
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

// Extrai os valores do JSON
var values = Object.values('question.json');

// Embaralha a ordem dos valores
var shuffledValues = shuffle(values);

// Cria um novo objeto JSON com os valores embaralhados
var randomizedJSON = {};
Object.keys('question.json').forEach(function(key, index) {
	randomizedJSON[key] = shuffledValues[index];
});

// Exibe o JSON randomizado
console.log("JSON randomizado: ", randomizedJSON);

var values = Object.values('question.json');



    



