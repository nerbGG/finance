
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

let expenseTypes= ["Groceries","Food","Bills","Clothing","Gas","Fun"];
readExpenseTypesList();
function readExpenseTypesList(){
    let btn_div = document.getElementById("button-div");
    for(let i=0;i<expenseTypes.length;i++){
        let btn = document.createElement("BUTTON");
        btn.innerHTML =expenseTypes[i];
        btn_div.appendChild(btn);
        btn.addEventListener("click",secondDiv);
    }
}
function capitalizeStr(str) { //stole this from: https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return str.charAt(0).toUpperCase() + str.slice(1);
}

function addExpenseType(){
    let btn_div = document.getElementById("button-div");
    let input = document.createElement("INPUT");
    input.setAttribute("type","text");
    btn_div.appendChild(input);
    input.addEventListener("change",function(){
        btn_div.removeChild(input);
        while(btn_div.firstChild){                             //removing all the buttons: https://www.javascripttutorial.net/dom/manipulating/remove-all-child-nodes/
            btn_div.removeChild(btn_div.firstChild) 
        }
         expenseTypes.push(capitalizeStr(input.value));       //adding all the buttons + the new one
         readExpenseTypesList();
    });
}


// for(let i =0; i <expButtons.length; i++){
//     expButtons[i].addEventListener("click",secondDiv);
// }