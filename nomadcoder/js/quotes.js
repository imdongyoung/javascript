const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "하루에 3시간을 걸으면 7년 후에 지구를 한바퀴 돌 수 있다.",
        author: "사무엘 존슨",
    },
    {
        quote: "진정으로 웃으려면 고통을 참아야하며, 나아가 고통을 즐길 줄 알아야 한다.",
        author: "찰리 채플린",
    },
    {
        quote: "피할수 없으면 즐겨라",
        author: "로버트 엘리엇",
    },
    {
        quote: "행복한 삶을 살기 위해 필요한 것은 거의 없다.",
        author: "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote: "행복은 습관이다, 그것을 몸에 지니라",
        author: "허버드",
    },
    {
        quote: "계단을 밟아야 위에 올라설 수 있다.",
        author: "앙드레 말로",
    },
    {
        quote: "평생 살 것처럼 꿈을 꾸어라, 그리고 내일 죽을 것처럼 오늘을 살아라.",
        author: "제임스 딘",
    },
    {
        quote: "사막이 아름다운 것은 어딘가에 샘이 숨겨져 있기 때문이다.",
        author: "생떽쥐베리",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerHTML = randomQuote.quote;
author.innerHTML = randomQuote.author;