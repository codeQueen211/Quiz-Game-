const questions = [
    {
        question: "What is the purpose of HTML?",
        options: ["HTML stands for Hyper Transfer Markup Language and is used for creating animations on websites.", 
                  "HTML is primarily used for creating and sending emails.", 
                  "The purpose of HTML is to structure and format the content of a web page.", 
                  "HTML is a programming language used to develop mobile apps."],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of CSS?",
        options: ["CSS is a programming language used to create dynamic content on websites.", 
                  "CSS, which stands for Cascading Style Sheets, is used to control the presentation and layout of web pages, including aspects like fonts, colors, spacing, and positioning.", 
                  "CSS is a tool for designing and editing images and graphics on a web page.", 
                  "CSS is used for creating and managing databases on a server."],
        correctAnswer: 2
    },
    {
        question: "What does CSS stand for?",
        options: ["Cascading Style Sheets", "Computer Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1
    },
    {
        question: "What HTML element is used to define an unordered (bulleted) list?",
        options: ["<ol>", "<li>", "<ul>", "<dl>"],
        correctAnswer: 3
    },
    {
        question: "What is the purpose of the <div> element in HTML?",
        options: ["It defines a hyperlink.", "It defines a division or a section in an HTML document.", "It defines an image.", "It defines an ordered list."],
        correctAnswer: 2
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        options: ["<a src='http://www.example.com'>Example</a>", "<a href='http://www.example.com'>Example</a>", "<a>http://www.example.com</a>", "<link>http://www.example.com</link>"],
        correctAnswer: 2
    },
    {
        question: "Which CSS property is used to change the text color of an element?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of the JavaScript `parseInt()` function?",
        options: ["It parses a string and returns an integer.", "It converts a decimal number to a string.", "It converts a string to a floating-point number.", "It parses a string and returns a floating-point number."],
        correctAnswer: 1
    },
    {
        question: "What is the primary use of the JavaScript `getElementById()` method?",
        options: ["To create new HTML elements.", "To get the value of a form field.", "To retrieve an HTML element by its id attribute.", "To add a class to an HTML element."],
        correctAnswer: 3
    },
    {
        question: "Which HTML tag is used to define an external JavaScript file?",
        options: ["<js>", "<script>", "<javascript>", "<link>"],
        correctAnswer: 2
    },
    {
        question: "What does the CSS property `display: none;` do?",
        options: ["Hides an element by removing it from the document flow.", "Changes the text color of an element.", "Displays the element as a block-level element.", "Italicizes the text within an element."],
        correctAnswer: 1
    },
    {
        question: "What is the purpose of the JavaScript `addEventListener()` method?",
        options: ["To change the background color of a webpage.", "To add an event listener to an HTML element.", "To load external scripts.", "To create a new HTML element."],
        correctAnswer: 2
    },
    {
        question: "What is the purpose of JAVA SCRIPT?",
        options: ["JavaScript is a programming language used to make web pages interactive and dynamic, allowing for features like form validation, animations, and real-time updates.", 
                  "JavaScript is primarily used for server-side programming and database management.",
                  "JavaScript is a graphic design tool for creating logos and images on websites.",
                  "JavaScript is a markup language used for structuring web page content."],
        correctAnswer: 1
    }
];

let currentQuestion=0; //the question index
let Score=0; //the number of questions the player got right

function RevealQuestion(){
    const questionElem= document.getElementById("question");
    const optionElem= document.querySelectorAll(".option");
    if(currentQuestion< questions.length){
        questionElem.textContent=questions[currentQuestion].question; //display the questions in the right place

        for(let i=0; i<4 ; i++){
            optionElem[i].textContent=questions[currentQuestion].options[i];//dispaly all the options in the right place
        }
    }
}
function checkAnswer(chosenAnswer){
    let answerIndex = questions[currentQuestion].correctAnswer;
    // is the chosen answer is the right -> result== currect answer
    if(chosenAnswer === answerIndex){
        Score++;
        document.getElementById("result").textContent="CORRECT ANSWER ✅🤩";
    }else{ //wrong answer
        document.getElementById("result").textContent="WRONG ANSWER ❌😥"
}
    //display the result after chosing an answer
    document.getElementById("result").style.display = "block"; 
    for (let i = 0; i < 4; i++) {
        document.getElementsByClassName("option")[i].disabled = true;
    }
    //display the next button to get to the next question
    document.getElementById("next").style.display = "block"; 
}
function nextQuestion(){
    currentQuestion++;
    const optionsContainer = document.querySelector('.answersContainer');
    if (currentQuestion < questions.length) {
        RevealQuestion();
        document.getElementById("result").style.display = "none";
        for (let i = 0; i < 4; i++) {
            document.getElementsByClassName("option")[i].disabled = false;
        }
        document.getElementById("next").style.display = "none"; //dont show the next button before choosing an answer
    }else{
        //Quizz ended display the score
        const questionElem= document.getElementById("question");
        questionElem.textContent=" ✨ YOU COMPLETED THE QUIZ ✨, YOUR SCORE IS "+ Score + "/" +currentQuestion;
        document.getElementById("result").style.display = "none";
        //Hide the options container
        optionsContainer.style.display = "none";
        document.getElementById("next").style.display = "none";

    }
    if(currentQuestion >= questions.length){
    const Restart =document.getElementById("restart").textContent= "RESTART QUIZ ↺ ";
    document.getElementById("restart").style.display = "block";
     }
}
function RestartQuiz(){
    window.location.reload();
}

RevealQuestion();//we call this function bc it's the only one without the onclick feature