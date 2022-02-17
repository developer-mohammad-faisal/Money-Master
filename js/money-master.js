// Youser Function
function getInput(inputId){
  const inputField = document.getElementById(inputId);
  const inputValue = parseFloat(inputField.value);
  return inputValue;
}

// Calculatior Button
document.getElementById('calculate-btn').addEventListener('click',function(){
    const income = getInput('income-input')
    const food = getInput('food-input')
    const rent = getInput('rent-input')
    const clothes = getInput('clothes-input')
    if(isNaN(income) || isNaN(food) || isNaN(rent) || isNaN(clothes)){
            alert('Please Type The Number')
    }
    else if( income <0 || food <0 || rent <0 || clothes <0 ){
      alert ('Please Write The Possitive Number')
    }
    else{
       const totalBalance = food + rent + clothes;
       if(income < totalBalance){
          alert ("Please Earn Money")
       }
       else {
        document.getElementById("total-expenses").innerText = totalBalance;
        document.getElementById("total-balance").innerText = income - totalBalance;
        
       }
      
    }
})

// Saving Button
document.getElementById('save-btn').addEventListener('click', function(){
   const saveNumber = getInput('save-input');
   const income = getInput('income-input')
   const totalSavings = (income * saveNumber) / 100;
   const remainingAmount = document.getElementById('total-balance').innerText;

   if(totalSavings <= parseFloat(remainingAmount)){
        const remainingBalance = parseFloat(remainingAmount) - totalSavings;
        document.getElementById('saving-amount').innerText = totalSavings;
        document.getElementById('remaining-balance').innerText = remainingBalance;
   } 
   else {
     alert ('Your Balance Lasthan Saving Amount')

   }
   
})