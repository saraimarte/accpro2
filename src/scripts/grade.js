var grid1 = document.getElementById('grid-1');
var grid2 = document.getElementById('grid-2');
var grid3 = document.getElementById('grid-3');
var grid4 = document.getElementById('grid-4');
var displayWhenGraded = document.getElementById("displayWhenGraded");
var rightCountDisplay = document.getElementById("rightCount");
var rightHeading = document.getElementById("rightHeading");
var wrongHeading = document.getElementById("wrongHeading");
var wrongCountDisplay = document.getElementById("wrongCount");
var allNodes = grid1.querySelectorAll(".activity");
var gradeButton = document.getElementById("btn");
var col3 = document.getElementById("col3")
//Check 

function notDone(){
    alert("Opps! You did not finish the task!");
}

gradeButton.addEventListener("click", ()=>{
    var allNodes = grid1.querySelectorAll(".item-content");
    console.log(allNodes.length)
    //If Column 1 is empty then...
    if(allNodes.length <=0){
        col3.style.display = "flex";
        var rightCount = 0;
        var wrongCount = 0;       
        function grade (column, correctAnswer, wrongAnswer1, wrongAnswer2) {
            var CorrectArray = column.getElementsByClassName(correctAnswer);
            var WrongArray1 = column.getElementsByClassName(wrongAnswer1);
            var WrongArray2 = column.getElementsByClassName(wrongAnswer2);
            var correct = CorrectArray.length;
            var incorrect = WrongArray1.length + WrongArray2.length;
            rightCount += correct;
            wrongCount += incorrect;
            return rightCount, wrongCount
        };
        //Asset Column
        grade(grid2, 'A', 'L', 'S');
        //Liability Column
        grade(grid3, 'L', 'A', 'S');
        //Equity Column
        grade(grid4, 'S', 'A', 'L');
         
        rightCountDisplay.textContent = rightCount;
        wrongCountDisplay.textContent = wrongCount;
        if (wrongCount === 0) {
            gradeButton.style.borderRadius = "50px";
            gradeButton.style.padding = "0.8em";
            gradeButton.textContent = "Great, Play Again!";
            gradeButton.addEventListener("click", function() {
            window.location.reload();
        
            })
        
        } else {
            gradeButton.textContent = "Grade Again!"
            gradeButton.style.padding = "0.5em 1em";

        }
       
    }



    //If Column 1 is not empty then...
    else{
        console.log(allNodes.length);
        console.log("Can't be graded!");
        alert("Finish your work!")
    }


})