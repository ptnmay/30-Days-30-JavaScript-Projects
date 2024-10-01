const questions = [
    {
        question: "The larget animal on the world?",
        answers: [
            { text: "Shark", correct: false },
            { text: "Blue whale", correct: true },
            { text: "Elephant", correct: false },
            { text: "Giraffe", correct: false },
        ]
    },
    {
        question: "Guess?",
        answers: [
            { text: "Pizza", correct: true },
            { text: "Burger", correct: false },
            { text: "Vegan food", correct: false },
            { text: "Tom yum kung", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const ansBtn = document.getElementById("ans-btn");
const nextBtn = document.getElementById("next-btn");

let curQuesIndex = 0;
let score = 0;

function startQuiz() {
    curQuesIndex = 0;
    score = 0;
    nextBtn.innerHTML = "Next";
    showQuestion();
}

function showQuestion() {
    resetState();
    let curQues = questions[curQuesIndex];
    let questionNo = curQuesIndex + 1;
    questionElement.innerHTML = questionNo + ". " + curQues.question;

    curQues.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        ansBtn.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAns);
    })
}

function resetState() {
    nextBtn.style.display = "none";
    while (ansBtn.firstChild){
        ansBtn.removeChild(ansBtn.firstChild);
    }
}

function selectAns(e) {
    const selectBtn = e.target;
    const isCorrect = selectBtn.dataset.correct === "true";
    if (isCorrect) {
        selectBtn.classList.add("correct");
        score++;
    } else {
        selectBtn.classList.add("incorrect")
    }
    Array.from(ansBtn.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextBtn.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `Your socred ${score} out of ${questions.length}`;
    nextBtn.innerHTML = "Play again";
    nextBtn.style.display = "block";
}

function handleNext(){
    curQuesIndex++;
    if (curQuesIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextBtn.addEventListener("click", ()=>{
    if (curQuesIndex < questions.length) {
        handleNext();
    } else {
        startQuiz();
    }
});

startQuiz();