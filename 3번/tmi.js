const tmi = [
    {
        question: "내가 가고 싶은 여행지는?",
        answer: "산티아고 순례길"
    },
    {
        question: "내가 가장 좋아하는 색?",
        answer: "초록색"
    },
    {
        question: "내가 가장 좋아하는 시집?",
        answer: "사랑하라 한 번도 상처받지 않은 것처럼"
    },
    {
        question: "쉴 때 뭐해?",
        answer: "만화책 보기"
    },
    {
        question: "언제 제일 행복해?",
        answer: "운동하고 러닝 뛸 때"
    },
];

const question = document.getElementById("tmi").firstElementChild;
const answer = document.getElementById("tmi").lastElementChild;
const todaysTmi = tmi[Math.floor(Math.random() * tmi.length)];

question.innerText = todaysTmi.question;
answer.innerText = todaysTmi.answer;