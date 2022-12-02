const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input")
const scoreEl = document.getElementById("score");

questionEl.innerHTML = `${num1} x ${num2} = ?`

const correctAns = num1 * num2;

let score = JSON.parse(localStorage.getItem("score"));
if(!score) {
    score = 0;
}
scoreEl.innerText = `Điểm:${score}`;

formEl.addEventListener("submit", () =>{
    const userAns = +inputEl.value;
    if(userAns === correctAns) {
        score ++;
        updateLocalStorage()
    }
    else {
        score--;
        updateLocalStorage()
    }
})

function updateLocalStorage() {
    localStorage.setItem("score",JSON.stringify(score));
}