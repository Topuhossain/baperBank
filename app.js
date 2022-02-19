
function inputField( input){
    const inputText = document.getElementById(input) ;
    
    const inputNumber = parseFloat(inputText.value);
    inputText.value = '';
    // console.log(inputNumber);
    return inputNumber;
}
function inputadd(value,field){
    const oldvalue = document.getElementById(value);
    const oldvalueNumber = parseFloat(oldvalue.innerText);
    const input = inputField(field);
    const total = input + oldvalueNumber ;
    oldvalue.innerText = total;
    
} 

function totalBalance(value,add){
    const oldbalancetotal =document.getElementById('total-balance');
    const oldbalancetotalnmbr = parseFloat(oldbalancetotal.innerText);

    const amount =  inputField(value);
    console.log(value);
    // console.log(amount);
    let result;
    if(add==true){
        result = oldbalancetotalnmbr + amount;
        
    }
    else{
        result = oldbalancetotalnmbr - amount;
        
    }
    oldbalancetotal.innerText = result;
   
}


document.getElementById('deposit-button').addEventListener('click',function(){
//  const value =
//    inputadd('total-deposit','deposit');
   totalBalance('deposit',true);
    
})

document.getElementById('withdraw-button').addEventListener('click',function(){
    inputadd('total-withdraw','withdraw');
    totalBalance('withdraw',false)
})