

// calculate Button 
document.getElementById('calculate').addEventListener('click',function(){

      // income
      const incomeInput = document.getElementById('income-input');
      const incomeInputText = incomeInput.value;
      const incomeNumber = parseFloat(incomeInputText);
      incomeInput.value = "";
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
      const expensesTotal = totalExpensesNumber + totalInput;
      totalExpenses.innerText = expensesTotal;

      // total balance
      const totalBalance = document.getElementById('total-balance');
      const totalBalanceText = totalBalance.innerText;
      const totalBalanceNumber = parseFloat(totalBalanceText);
      const balanceTotal = incomeNumber - expensesTotal;
      totalBalance.innerText = balanceTotal;

})