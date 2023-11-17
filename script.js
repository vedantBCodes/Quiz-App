let container=document.querySelector(".container");
let questions=document.getElementsByClassName("question");
let qst=document.getElementById("question");
let correctAns=0;
let currentQuestionNo=0;
visibleQuestion();
function visibleQuestion()
{
for(let i=0;i<questions.length;i++)
{
    if(i==currentQuestionNo )
    {
        questions[i].style.display="block";
    }
    else
    {
        questions[i].style.display="none";
    }

   
}
if(currentQuestionNo==3)
{
    showScore();
}
}
function showScore()
{
    let div=document.createElement("div");
    div.innerHTML=`<h>You scored ${correctAns} out of 3</h> !`;
    div.classList.add("score");
    container.appendChild(div);
}

container.addEventListener("click",function(e){
    if(e.target.tagName==="INPUT")
    {
    let ans= e.target.parentElement.parentElement.getAttribute("ans");
      if(e.target.value==ans)
      {
        e.target.style.backgroundColor="rgb(138, 138, 241)";
        let ol=e.target.parentElement.parentElement;
        let inputArray=ol.querySelectorAll("ol > li > input");
        for(let i=0;i<inputArray.length;i++)
        {
            inputArray[i].disabled=true;
        }
        console.log(inputArray);

        correctAns++;
        addNextButton();
      }
      else
      {
        e.target.style.backgroundColor="rgb(206, 51, 51)";
        let ol=e.target.parentElement.parentElement;
        let inputArray=ol.querySelectorAll("ol > li > input");
        for(let i=0;i<inputArray.length;i++)
        {
            inputArray[i].disabled=true;
        }
        // coloringRightAnswer();
        for(let i=0;i<inputArray.length;i++)
        {
            if(inputArray[i].getAttribute("value")==ans)
            {
                inputArray[i].style.backgroundColor="blue";
            }
        }
        addNextButton();
      }
    }
    currentQuestionNo++;
    // visibleQuestion();
    
  });

function addNextButton()
{
    let nextBtn=document.createElement("input");
    nextBtn.innerHTML="Next";
    nextBtn.value="NEXT";
    nextBtn.classList.add("nextButton");
    qst.appendChild(nextBtn);
}


// function clickNext(){
//     nextBtn.addEventListener("click",function(e){ 
//         visibleQuestion();
//     });
// }
