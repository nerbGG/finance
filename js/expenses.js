
var yearArr = localStorage.getItem("yearArray")?JSON.parse(localStorage.getItem("yearArray")):0;
let x = new Date();
var month = x.getMonth();
var monthYear = JSON.stringify(month+1)+"/"+x.getFullYear();
document.getElementById('month-year').innerHTML = monthYear;
setOutput();
function setOutput(){
    // document.getElementById('0-food').innerHTML="POOP";
    var outputTypes =["food","bills","clothing", "entertainment","gas_trans", "tuition","o"];
    for(var i =0; i < 4;i++){
        if (yearArr[month][i].total == 0){
            continue;//skip this iteration
        }
        for(let z=0;z<7;z++){
            var iden= JSON.stringify(i)+"-"+outputTypes[z];
            var arr = yearArr[month][i][outputTypes[z]];
            if(arr.length == 0){//arr stores the expenses if the type specified by outputTypes
                document.getElementById(iden).innerHTML = outputTypes[z]+":$0";
                continue;
            }   
            else{
                // document.getElementById(iden).innerHTML = getSum(arr);
                document.getElementById(iden).innerHTML = outputTypes[z]+": $"+JSON.stringify(getSum(arr));
            }      
        }
    }
}
 function getSum(arr){
    var sum =0;
    for (let index = 0; index < arr.length; index++) {
        sum+= arr[index].amount;       
    }
   // console.log(sum);
    return sum;
 }



  /*var yearArr =[ 
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainment:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
                [
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]},
                    {food:[],bills:[],tuition:[],clothing:[],gas_trans:[],entertainemnt:[],other:[]}
                ],
            ];*/