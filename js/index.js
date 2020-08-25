//vars
var initType;
var expense= {type:"", amount:0.0, desc:"", month:"", week:"", day:""};
var month =new Array(12);
var week = new Array();
var day =[0,0,0,0,0,0,0,0,0,0,0,0];
 for(let i =0;i<4;i++){
    week[i] = day;
 }
 console.log("week");
 console.log(week);
 for(let i =0;i<12;i++){
    month[i] = week;
 }
 console.log('month');
 console.log(month);
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
function setObject(){//called by submit button
    expense.type =initType;
    expense.amount = JSON.parse(document.getElementById("amount-input").value);
    expense.desc = document.getElementById("desc-input").value;
    let d = new Date();
    let month = JSON.stringify(d.getMonth()+1);
    let date = JSON.stringify(d.getDate());
    let year = JSON.stringify(d.getFullYear());
    expense.month = JSON.parse(month)-1;
    // expense.week =
    // intDate = JSON.parse(date);
    // if(intdate >0 && intdate<7)
    //     expense.week =0;
    // else if(intdate >=8 && intdate<=15)
    expense.day = month+"/"+date+"/"+year;
    noSeeDiv('input-div');
    console.log(expense);

}