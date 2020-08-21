//vars
var initType;
var expense= {type:"",amount:0.0,desc:"" };
var day = new Array(12);


//frontend
function seeDiv(id){
    document.getElementById(id).className = "see inputs"; /*2 classes*/
}
function noSeeDiv(id){
    document.getElementById(id).className = "no-see inputs";
}
function secondDiv(){
    noSeeDiv('expense-type-div');
    seeDiv("input-div");
}
let expButtons = document.getElementsByClassName("exp-btns");
for(let i =0; i <expButtons.length; i++)
{
    expButtons[i].addEventListener("click",secondDiv);
}

//backend
/*
expButtons[0].addEventListener('click', setInitType1);
expButtons[1].addEventListener('click', setInitType(expButtons[1].innerHTML));
expButtons[2].addEventListener('click', setInitType(expButtons[2].innerHTML));
expButtons[3].addEventListener('click', setInitType(expButtons[3].innerHTML));
expButtons[4].addEventListener('click', setInitType(expButtons[4].innerHTML));
expButtons[5].addEventListener('click', setInitType(expButtons[5].innerHTML));
expButtons[6].addEventListener("click", setInitType(expButtons[6].innerHTML));*/

function setInitType(val){
    initType = val;
    console.log(initType);
}
//when user clicks submit amount and description will go into the object
function setObject(){
    expense.type =initType;
    expense.amount = JSON.parse(document.getElementById("amount-input").value);
    expense.desc = document.getElementById("desc-input").value;
    noSeeDiv('input-div');
    console.log(expense);
}