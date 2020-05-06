//Declaration
let startBtn = document.querySelector(".start-btn");
let headSection = document.querySelector(".head-section");
let button = document.querySelector(".btn");
let btnOne = document.querySelector(".btn-one");
let btnTwo = document.querySelector(".btn-two");
let btnThree = document.querySelector(".btn-three");
let btnFour = document.querySelector(".btn-four");
let score = 0;


//First Event
startBtn.addEventListener("click", firstPage);

//First Page
function firstPage() {
    let button = document.querySelector(".btn"); 
    let questionCount = document.createElement("p");
    let scoreCountOne = document.createElement("p");
    let display = document.querySelector(".display");
    let firstQuestion = document.createElement("h1");
    firstQuestion.innerText = "What is the correct CSS syntax for making all the <span> elements bold?";
    firstQuestion.classList.add("display");
    let optionOne = document.createElement("button");
    optionOne.innerText = "span {text-size: bold}";
    
    let optionTwo = document.createElement("button");
    optionTwo.innerText = "span {font-weight: bold}";
    
    let optionThree = document.createElement("button");
    optionThree.innerText = '<span style="text-size: bold">';
    
    let optionFour = document.createElement("button");
    optionFour.innerText = '<span style="font-size: bold">';
    
    
    questionOneAndOptions = [firstQuestion , optionOne, optionTwo, optionThree, optionFour];
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }

   
    questionCount.style.fontSize = "20px";
    scoreCountOne.style.fontSize = "20px";

    headSection.appendChild(questionCount);
    headSection.appendChild(scoreCountOne);

    button.firstElementChild.classList.remove("start-btn");
    button.firstElementChild.classList.add("btn-one");

    startBtn.innerText = "next question";
    

    for(question of questionOneAndOptions) {
        display.appendChild(question);
        question.classList.add("options");
        
        if(question === optionTwo) {
            optionTwo.addEventListener("click", function() {
                optionTwo.style.background = "rgb(105, 241, 105)";
                optionTwo.style.color = 'white'; 
                optionOne.disabled = true;
                optionThree.disabled = true;  
                optionFour.disabled = true;  
                score += 10;
                scoreCountOne.innerText = `Score: ${score} /50`;
            })
            
        } else if(question === optionOne) {
            optionOne.addEventListener("click", function() {
                optionOne.style.background = "rgb(248, 115, 115)";
                optionOne.style.color = 'white';
                optionTwo.style.background = "rgb(105, 241, 105)";
                optionTwo.style.color = 'white';
                optionThree.disabled = true;  
                optionFour.disabled = true;
            })

        } else if (question === optionThree) {
            optionThree.addEventListener("click", function() {
                optionThree.style.background = "rgb(248, 115, 115)";
                optionThree.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.style.background = "rgb(105, 241, 105)";
                optionTwo.style.color = 'white'; 
                optionFour.disabled = true;
            })
        
        } else if (question === optionFour) {
            optionFour.addEventListener("click", function() {
                optionFour.style.background = "rgb(248, 115, 115)";
                optionFour.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.style.background = "rgb(105, 241, 105)";
                optionTwo.style.color = 'white';  
                optionThree.disabled = true;
            })
            questionCount.innerText = "Question 1/5";
            scoreCountOne.innerText = `Score:  ${score} /50`;
        }
    }
    startBtn.addEventListener("click", secondPage);
}
//Second Question
function secondPage() {
    let button = document.querySelector(".btn"); 
    let questionCount = document.createElement("p");
    let scoreCountTwo = document.createElement("p");
    let display = document.querySelector(".display");
    let secondQuestion = document.createElement("h1");
    secondQuestion.innerText = "How do you add a comment in a CSS file?";
    secondQuestion.classList.add("display");

    let optionOne = document.createElement("button");
    optionOne.innerText = "<!--this is a comment-->";
    
    let optionTwo = document.createElement("button");
    optionTwo.innerText = "//this is a comment//";
    
    let optionThree = document.createElement("button");
    optionThree.innerText = "/*this is a comment*/";
    
    let optionFour = document.createElement("button");
    optionFour.innerText = "//this is a comment";
    
    questionTwoAndOptions = [secondQuestion , optionOne, optionTwo, optionThree, optionFour];
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }


    while(headSection.firstChild) {
        headSection.removeChild(headSection.firstChild);
    }
    headSection.appendChild(questionCount);
    headSection.appendChild(scoreCountTwo);

    button.firstElementChild.classList.remove("btn-one");
    button.firstElementChild.classList.add("btn-two");

    startBtn.innerText = "next question";

    for(question of questionTwoAndOptions) {
        display.appendChild(question);
        question.classList.add("options");
        
        if(question === optionThree) {
            optionThree.addEventListener("click", function() {
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionFour.disabled = true;  
                score += 10;
                scoreCountTwo.innerText = `Score: ${score} /50`;
            })
            
        } else if(question === optionOne) {
            optionOne.addEventListener("click", function() {
                optionOne.style.background = "rgb(248, 115, 115)";
                optionOne.style.color = 'white';
                optionTwo.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
                optionFour.disabled = true;
            })

        } else if (question === optionTwo) {
            optionTwo.addEventListener("click", function() {
                optionTwo.style.background = "rgb(248, 115, 115)";
                optionTwo.style.color = 'white';
                optionOne.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
                optionFour.disabled = true;
            })
        
        } else if (question === optionFour) {
            optionFour.addEventListener("click", function() {
                optionFour.style.background = "rgb(248, 115, 115)";
                optionFour.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
            })
            questionCount.innerText = "Question 2/5";
            scoreCountTwo.innerText = `Score: ${score} /50`;
        }
    }

    startBtn.addEventListener("click", thirdPage);
}
//Thrid Question
function thirdPage() {
    let button = document.querySelector(".btn"); 
    let questionCount = document.createElement("p");
    let scoreCountThree = document.createElement("p");
    let display = document.querySelector(".display");
    let thirdQuestion = document.createElement("h1");
    thirdQuestion.innerText = "What does CSS stand for?";
    thirdQuestion.classList.add("display");

    let optionOne = document.createElement("button");
    optionOne.innerText = "Computer Style Sheets";
    
    let optionTwo = document.createElement("button");
    optionTwo.innerText = "Colorful Style Sheets";
    
    let optionThree = document.createElement("button");
    optionThree.innerText = "Custom Style Sheets";
    
    let optionFour = document.createElement("button");
    optionFour.innerText = "Cascading Style Sheets";
    
    questionThreeAndOptions = [thirdQuestion , optionOne, optionTwo, optionThree, optionFour];
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
    

    while(headSection.firstChild) {
        headSection.removeChild(headSection.firstChild);
    }
    headSection.appendChild(questionCount);
    headSection.appendChild(scoreCountThree);

    button.firstElementChild.classList.remove("btn-two");
    button.firstElementChild.classList.add("btn-three");

    startBtn.innerText = "next question";

    for(question of questionThreeAndOptions) {
        display.appendChild(question);
        question.classList.add("options");
        
        if(question === optionFour) {
            optionFour.addEventListener("click", function() {
                optionFour.style.background = "rgb(105, 241, 105)";
                optionFour.style.color = 'white'; 
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionThree.disabled = true;  
                score += 10;
                scoreCountThree.innerText = `Score: ${score} /50`;
            })
            
        } else if(question === optionOne) {
            optionOne.addEventListener("click", function() {
                optionOne.style.background = "rgb(248, 115, 115)";
                optionOne.style.color = 'white';
                optionTwo.disabled = true;
                optionThree.disabled = true;  
                optionFour.style.background = "rgb(105, 241, 105)";
                optionFour.style.color = 'white';
            })

        } else if (question === optionTwo) {
            optionTwo.addEventListener("click", function() {
                optionTwo.style.background = "rgb(248, 115, 115)";
                optionTwo.style.color = 'white';
                optionOne.disabled = true;
                optionThree.disabled = true;  
                optionFour.style.background = "rgb(105, 241, 105)";
                optionFour.style.color = 'white';
            })
        
        } else if (question === optionThree) {
            optionThree.addEventListener("click", function() {
                optionThree.style.background = "rgb(248, 115, 115)";
                optionThree.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionFour.style.background = "rgb(105, 241, 105)";
                optionFour.style.color = 'white';
            })

            questionCount.innerText = "Question 3/5";
            scoreCountThree.innerText = `Score: ${score} /50`;
        }
    }

    startBtn.addEventListener("click", forthPage);
}
//Forth Question
function forthPage() {
    let button = document.querySelector(".btn"); 
    let questionCount = document.createElement("p");
    let scoreCountFour = document.createElement("p");
    let display = document.querySelector(".display");
    let forthQuestion = document.createElement("h1");
    forthQuestion.innerText = "Which is the correct CSS syntax?";
    forthQuestion.classList.add("display");

    let optionOne = document.createElement("button");
    optionOne.innerText = "{p;color:blcak}";
    
    let optionTwo = document.createElement("button");
    optionTwo.innerText = "p:color=black";
    
    let optionThree = document.createElement("button");
    optionThree.innerText = "p{color:black;}";
    
    let optionFour = document.createElement("button");
    optionFour.innerText = "{p:color=black(p}";
    
    questionFourAndOptions = [forthQuestion , optionOne, optionTwo, optionThree, optionFour];
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
    

    while(headSection.firstChild) {
        headSection.removeChild(headSection.firstChild);
    }
    headSection.appendChild(questionCount);
    headSection.appendChild(scoreCountFour);

    button.firstElementChild.classList.remove("btn-three");
    button.firstElementChild.classList.add("btn-four");

    startBtn.innerText = "next question";

    for(question of questionFourAndOptions) {
        display.appendChild(question);
        question.classList.add("options");
        
        if(question === optionThree) {
            optionThree.addEventListener("click", function() {
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionFour.disabled = true;  
                score += 10;
                scoreCountFour.innerText = `Score: ${score} /50`;
            })
            
        } else if(question === optionOne) {
            optionOne.addEventListener("click", function() {
                optionOne.style.background = "rgb(248, 115, 115)";
                optionOne.style.color = 'white';
                optionTwo.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white';  
                optionFour.disabled = true;
            })

        } else if (question === optionTwo) {
            optionTwo.addEventListener("click", function() {
                optionTwo.style.background = "rgb(248, 115, 115)";
                optionTwo.style.color = 'white';
                optionOne.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white';  
                optionFour.disabled = true;
            })
        
        } else if (question === optionFour) {
            optionFour.addEventListener("click", function() {
                optionFour.style.background = "rgb(248, 115, 115)";
                optionFour.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white';
            })

            questionCount.innerText = "Question 4/5";
            scoreCountFour.innerText = `Score: ${score} /50`;
        }
    }

    startBtn.addEventListener("click", fifthPage);
}
//Fifth Question
function fifthPage() {
    let button = document.querySelector(".btn"); 
    let questionCount = document.createElement("p");
    let scoreCountFive = document.createElement("p");
    let display = document.querySelector(".display");
    let fifthQuestion = document.createElement("h1");
    fifthQuestion.innerText = "Which snippet of CSS is commonly used to center a website horizontally?";
    
    let optionOne = document.createElement("button");
    optionOne.innerText = "margin: auto 0;";
   
    let optionTwo = document.createElement("button");
    optionTwo.innerText = "site-align: center;";
    
    let optionThree = document.createElement("button");
    optionThree.innerText = "margin: 0 auto;";
    
    let optionFour = document.createElement("button");
    optionFour.innerText = "{margin: center;";
    
    
    questionFiveAndOptions = [fifthQuestion , optionOne, optionTwo, optionThree, optionFour];

    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
    

    while(headSection.firstChild) {
        headSection.removeChild(headSection.firstChild);
    }
    headSection.appendChild(questionCount);
    headSection.appendChild(scoreCountFive);

    button.firstElementChild.classList.remove("btn-three");
    button.firstElementChild.classList.add("btn-four");

    startBtn.innerText = "end quiz";

    for(question of questionFiveAndOptions) {
        display.appendChild(question);
        question.classList.add("options");
        
        if(question === optionThree) {
            optionThree.addEventListener("click", function() {
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionFour.disabled = true;  
                score += 10;
                scoreCountFive.innerText = `Score: ${score} /50`;
            })
            
        } else if(question === optionOne) {
            optionOne.addEventListener("click", function() {
                optionOne.style.background = "rgb(248, 115, 115)";
                optionOne.style.color = 'white';
                optionTwo.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white';  
                optionFour.disabled = true;
            })

        } else if (question === optionTwo) {
            optionTwo.addEventListener("click", function() {
                optionTwo.style.background = "rgb(248, 115, 115)";
                optionTwo.style.color = 'white';
                optionOne.disabled = true;
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white';   
                optionFour.disabled = true;
            })
        
        } else if (question === optionFour) {
            optionFour.addEventListener("click", function() {
                optionFour.style.background = "rgb(248, 115, 115)";
                optionFour.style.color = 'white';
                optionOne.disabled = true;
                optionTwo.disabled = true;  
                optionThree.style.background = "rgb(105, 241, 105)";
                optionThree.style.color = 'white'; 
            })

            questionCount.innerText = "Question 5/5";
            scoreCountFive.innerText = `Score: ${score} /50`;
        }
    }

    startBtn.addEventListener("click", endPage);
}
//displays Final Score
function endPage() {
    let button = document.querySelector(".btn"); 
    let display = document.querySelector(".display");
    let header1 = document.createElement("h1");
    let header2 = document.createElement("h1");
    header1.innerText = "Wow!😲, Nice Try";
    header2.innerText = `You Scored: ${score}/50.`;
    
    while(display.firstChild) {
        display.removeChild(display.firstChild);
    }
    
    while(headSection.firstChild) {
        headSection.removeChild(headSection.firstChild);
    }

    button.removeChild(startBtn);

    display.appendChild(header1);
    display.appendChild(header2);
}
