let container=document.querySelector(".container");
let questions=document.getElementsByClassName("question");
let btn=document.getElementsByTagName("button");
let correctAns=0;
let currentQuestion;
let currentQuestionNo=0;

visibleQuestion();

function visibleQuestion()
{
for(let i=0;i<questions.length;i++)
{
    if(i==currentQuestionNo)
    {
        questions[i].style.display="block";
        currentQuestion=questions[i];
    }
    else
    {
        questions[i].style.display="none";
    }
}
mainFun();
}

function mainFun(){
    currentQuestion.addEventListener("click",function(e){
    if(e.target.tagName==="INPUT")
    {
    let ans= e.target.parentElement.parentElement.getAttribute("ans");
      if(e.target.value==ans)
      {
        correctAns+=1;
        e.target.style.backgroundColor="rgb(138, 138, 241)";
        let ol=e.target.parentElement.parentElement;
        let inputArray=ol.querySelectorAll("ol > li > input");
        for(let i=0;i<4;i++)
        {
            inputArray[i].disabled=true;
        }
        if(currentQuestionNo==9)
        {
            addViewScoreButton();
            clickViewScoreButton();
        }
        else
        {
            addNextButton();
            clickNext();
        }
      }
      else
      {
        e.target.style.backgroundColor="rgb(206, 51, 51)";
        let ol=e.target.parentElement.parentElement;
        let inputArray=ol.querySelectorAll("ol > li > input");
        for(let i=0;i<4;i++)
        {
            inputArray[i].disabled=true;
        }
       
        for(let i=0;i<inputArray.length;i++)
        {
            if(inputArray[i].getAttribute("value")==ans)
            {
                inputArray[i].style.backgroundColor="rgb(138, 138, 241)";
            }
        }
        if(currentQuestionNo==9)
        {
            addViewScoreButton();
            clickViewScoreButton();
        }
        else
        {
            addNextButton();
            clickNext();
        }
      }
    }
  });
}

let nextBtn;

function addNextButton()
{
    removeElement();
    nextBtn=document.createElement("button");

    /*
    NOTE:- One can also add the view score button like this
    if(currentQuestionNo==2)
    {
        nextBtn.innerHTML="View Score";
    }
    else
    {
        nextBtn.innerHTML="Next";
    }
    */

    nextBtn.innerHTML="Next";
    nextBtn.value="NEXT";
    nextBtn.classList.add("nextButton");
    questions[currentQuestionNo].appendChild(nextBtn);
}

function addViewScoreButton()
{
    removeElement();
    nextBtn=document.createElement("button");
    nextBtn.innerHTML="View Score";
    nextBtn.value="View Score";
    nextBtn.classList.add("nextButton");
    currentQuestionNo++;
    questions[9].appendChild(nextBtn);
}

function clickNext()
{
    nextBtn.addEventListener("click",function(){ 
        currentQuestionNo++;
        visibleQuestion();
    });
}

function clickViewScoreButton()
{
    nextBtn.addEventListener("click",function(){ 
        questions[9].style.display="none";
        questions[10].style.display="block";
        showScore();
        nextBtn.disabled=true;
    });
}

function showScore()
{
    let div=document.createElement("div");
    div.innerHTML=`<h>You scored ${correctAns} out of ${questions.length-1}</h> !`;
<<<<<<< HEAD
    div.style.textAlign="center";
    div.style.fontSize="30px";
=======
>>>>>>> ad0ccc59178baa81b83eeaf434c575ed0a8c08cc
    div.classList.add("score");
    questions[10].insertAdjacentElement("afterend",div);
}


function removeElement()
{
    for(let i=0;i<btn.length;i++)
    {
        btn[i].remove();
    }
}
