

// calculate Button 
document.getElementById('calculate').addEventListener('click',function(){
      // food
      const foodInput = document.getElementById('food-input');
      const foodInputText = foodInput.value;
      const foodNumber = parseFloat(foodInputText);
      foodInput.value = ""; 
      // rent
      const rentInput = document.getElementById('rent-input');
      const rentInputText = rentInput.value;
      const rentNumber = parseFloat(rentInputText); 
      rentInput.value = ""; 
      // clothes
      const clothesInput = document.getElementById('clothes-input');
      const clothesInputText = clothesInput.value;
      const clothesNumber = parseFloat(clothesInputText); 
      clothesInput.value = ""; 
      const totalInput = foodNumber + rentNumber + clothesNumber;
      // total expenses
      const totalExpenses = document.getElementById('total-expenses');
      const totalExpensesText = totalExpenses.innerText;
      const totalExpensesNumber = parseFloat(totalExpensesText);
      const ExpensesTotal = totalExpensesNumber + totalInput;

      totalExpenses.innerText = ExpensesTotal;
      
})