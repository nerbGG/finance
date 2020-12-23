//vars
var initType;
var expense= {type:"", amount:0.0, desc:"", month:"", week:"", day:""};
// localStorage.getItem("")
var yearArr = localStorage.getItem("yearArray")?JSON.parse(localStorage.getItem("yearArray")): setArray();
function setArray(){
    let arr = [[],[],[],[],[],[],[],[],[],[],[],[]];
    for(let i=0; i<12;i++)
        arr[i] = [
                {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[],total:0},
                {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[],total:0},
                {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[],total:0},
                {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[],total:0}
            ];
    localStorage.setItem("yearArray",JSON.stringify(arr));
    return arr;
}

 console.log(yearArr);
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
function setInitType(val){
    initType = val;
    console.log(initType);
}
//when user clicks submit amount and description will go into the object
function setObject(){//called by submit button
    expense.type =initType;
    expense.amount = JSON.parse(document.getElementById("amount-input").value);//getting in5tput from the html document
    expense.desc = document.getElementById("desc-input").value;

    let d = new Date();
    let monthHolder = JSON.stringify(d.getMonth()+1); //object.setMonth()
    let date = JSON.stringify(d.getDate());
    let year = JSON.stringify(d.getFullYear());
    expense.month = JSON.parse(monthHolder)-1;
    expense.week =setWeek(date);
    expense.day = monthHolder+"/"+date+"/"+year;
    toArray();
    //console.log(expense)//when expense is stored in yearArr, its stored by reference so all elements would  be the same
    noSeeDiv('input-div');
   
}
function setWeek(date){
    var intDate = JSON.parse(date);
    var expWeek;
    if(intDate >0 && intDate<=7)
        expWeek =0;
    else if(intDate >=8 && intDate<=15)//object.setWeek()
        expWeek=1;
    else if(intDate >=16 && intDate <=28)
        expWeek=2;
    else
        expWeek=3;

    return expWeek;
}

function toArray(){
    let expenseCopy =Object.assign({},expense);//shallow copy of the object since the object is stored by reference
    console.log(expenseCopy);
    var expType =(expense.type).toLowerCase();
    yearArr[expense.month][expense.week][expType].push(expenseCopy);
    yearArr[expense.month][expense.week].total +=  expenseCopy.amount; //total in yearArr = total + expensecopy.amount;
    // yearArr[expense.month][expense.week].push(Object.assign({},expense)); //works too
    localStorage.setItem("yearArray",JSON.stringify(yearArr));
}


