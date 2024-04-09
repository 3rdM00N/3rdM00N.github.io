let Button = document.getElementById("SubmitButton");

Button.addEventListener("click", Submit);

let answer1 = document.getElementById("answer1");
let answer2 = document.getElementById("answer2");
let answer3 = document.getElementById("answer3");
let answer4 = document.getElementById("answer4");

function Submit()
{
    let answer1 = document.getElementById("answer1");
    let studentAnswer = answer1.value;
    let mark = 0;
    if (studentAnswer == "Cpu") {
        mark += 1;
        /*alert("Correct");*/
    }
    else {
        mark += 0;
        /*alert("INCORRECT");*/
    }

    let answer2 = document.getElementById("answer2");
    let studentAnswer2 = answer2.value;

    if (studentAnswer2 == "Hdd") {
        mark += 1;
        /*alert("Correct");*/
    }
    else if (studentAnswer2 == "Ssd") {
        mark += 1;
        /*alert("Correct");*/
    }
    else {
        mark += 0;
        /*alert("INCORRECT");*/
    }

    let answer3 = document.getElementById("answer3");
    let studentAnswer3 = answer3.value;

    if (studentAnswer3 == "Graphics processing unit") {
        mark += 1;
        /*alert("Correct");*/
    }
    else {
        mark += 0;
        /*alert("INCORRECT");*/
    }

    let answer4 = document.getElementById("answer4");
    let studentAnswer4 = answer4.value;

    if (studentAnswer4 == "3") {
        mark += 1;
        /*alert("Correct");*/
    }
    else if (studentAnswer4 == "4") {
        mark += 1;
        /*alert("Correct");*/
        
    }
    else {
        mark += 0;
        /*alert("INCORRECT");*/
    }

    let myMark = document.getElementById("Score");
    myMark.innerText = "Your score out of 4: " + mark;
}

let deleteBut = document.getElementById("ClearQuiz");
deleteBut.addEventListener("click", restart);

function restart() {
 
}

////ANTICheat

//let cheat = document.getElementById("antiCheat");

//cheat.addEventListener("mouseout", cheater);

//function cheater()
//{
//    alert("Teacher Alerted");

//}


//OLD Correction system
//function Submit2() {
//     let answer2 = document.getElementById("answer2");
//    let studentAnswer2 = answer2.value;

//    if (studentAnswer2 == "Hdd") {
//        alert("Correct");
//    }
//    else if (studentAnswer2 == "Ssd") {
//        alert("Correct");
//    }
//    else {
//        alert("INCORRECT");
//    }
//}
//Old Button
//let Button2 = document.getElementById("Answer2");

//Button2.addEventListener("click", Submit2);
//Search element