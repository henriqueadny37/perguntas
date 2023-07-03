const question = document.querySelector(".question");
const answers = document.querySelector(".answers");
const spnQtd = document.querySelector(".spnQtd");
const textFinalizar = document.querySelector(".finalizar span");
const content = document.querySelector(".content");
const contentFinalizar = document.querySelector(".finalizar");
const btnRestart = document.querySelector(".finalizar button");

import questions from "./questions.js";

let currentIndex = 0;
/*armazenamento de questão atual ln 10 */
let questionsCorrect = 0;
/*quantidade de acertos ln 12*/
btnRestart.onclick = () => {
    content.style.display = "flex";
    contentFinalizar.style.display = "none";
    
    currentIndex = 0;
    questionsCorrect = 0;
    loadQuestion();
};

function nextQuestion(e) {
    if(e.target.getAttribute("data-correct") === "true") {
        questionsCorrect++;
    }

    if(currentIndex < questions.length - 1) {
        currentIndex++;
        loadQuestion();
    }else{
        finalizar();
    }
}

function finalizar() {
    textFinalizar.innerHTML = `você acertou ${questionsCorrect} de ${questions.length}`;
    content.style.display = "none";
    contentFinalizar.style.display = "flex";
}

function loadQuestion(){
    spnQtd.innerHTML = `${currentIndex + 1}/${questions.length}`;
    const item = questions[currentIndex];
    answers.innerHTML = "";
    question.innerHTML = item.question;

    item.answers.forEach((answer) => {
        const div = document.createElement("div");

        div.innerHTML = `
        <button class="answer" data-correct="${answer.correct}">
        ${answer.option}
        </button> 
        `;

        answers.appendChild(div);
    });

    document.querySelectorAll(".answer").forEach((item) => {
        item.addEventListener("click", nextQuestion);
    });
}
loadQuestion();