
function getInput(inputId){
  const inputField = document.getElementById(inputId);
  const inputValue = parseInt(inputField.value);
  inputField.value = '';
  return inputValue;
}

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
   const savingField = getInput('save-input').innerText;
   
   
})










/* 

function incomeCalculate(){
  const foodInput = document.getElementById('food-input');
  const rentInput = document.getElementById('rent-input');
  const clothesInput = document.getElementById('clothes-input');
  const totalAmount = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);

  return totalAmount;

}

// Calculate Button 
document.getElementById('calculate-btn').addEventListener('click',function(){

      // total expenses
      document.getElementById('total-expenses').innerText = incomeCalculate();
      const incomeInput = document.getElementById('income-input');
      const incomeInputText = parseFloat(incomeInput.value) - incomeCalculate();
      document.getElementById('total-balance').innerText = incomeInputText;

})



// Save Button 
document.getElementById('save-btn').addEventListener('click',function(){
  // save
  const saveInput = document.getElementById('save-input');
  const saveInputText = saveInput.value;
  const saveInputNumber = parseFloat(saveInputText);
  // saving ammount 
  const savingAmount = document.getElementById('income-input');
  const savingAmountText = savingAmount.value;
  const savingAmountNumber = parseFloat(savingAmountText);
  const totalSavings = (savingAmountNumber * saveInputNumber) / 100;
 
  document.getElementById('saving-amount').innerText = totalSavings;
  const remainingAmount = document.getElementById('total-balance').innerText;
  const remainingAmountNumber = parseFloat(remainingAmount);
  document.getElementById('remaining-balance').innerText = remainingAmountNumber - totalSavings;

})

 */