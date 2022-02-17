

function incomeCalculate(){
  const foodInput = document.getElementById('food-input');
  const rentInput = document.getElementById('rent-input');
  const clothesInput = document.getElementById('clothes-input');
  const totalAmount = parseFloat(foodInput.value) + parseFloat(rentInput.value) + parseFloat(clothesInput.value);
  return totalAmount;
}

// calculate Button 
document.getElementById('calculate-btn').addEventListener('click',function(){

      // total expenses
      document.getElementById('total-expenses').innerText = incomeCalculate();
      const incomeInput = document.getElementById('income-input');
      const incomeInputText = parseFloat(incomeInput.value) - incomeCalculate();
      document.getElementById('total-balance').innerText = incomeInputText;

})





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


