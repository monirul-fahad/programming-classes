function getInputValue(inputID){
    const inputField = document.getElementById(inputID);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
      //clear input field 
     inputField.value = '';
    return amountValue;
}

function updateTotalField(totalfieldID, amount) {
    const totalElement = document.getElementById(totalfieldID);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);
    totalElement.innerText = previousTotal + amount;
}

function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    return previousBalanceAmount
}

function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceAmount = parseFloat(balanceTotalText);

    const previousBalanceAmount = getCurrentBalance()

    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceAmount + amount;
    } else {
        balanceTotal.innerText = previousBalanceAmount - amount;
    }
}


document.getElementById('deposit-btn').addEventListener('click', function(){
   /* 
   const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText); 
    */
    

    //get and update deposit total 
  /*  
  const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositAmount + depositAmount; 
    */
 
    
    //update total balane 
  /*  
  const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceAmount + depositAmount;
    */
    const depositAmount = getInputValue('deposit-input');
    if(depositAmount > 0){
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true)
    }
  
});

//handle withdraw btn
document.getElementById('withdraw-btn').addEventListener('click', function(){
  /*  
  const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const withdrawAmount = parseFloat(withdrawAmountText) 
    */
 

    //get and update withdraw amount total
   /* const withdrawTotal = document.getElementById('withdraw-total')
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalText) 
    withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount; */

  
    //update balance after withdraw
   /*
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceAmount - withdrawAmount ;
    */
    const withdrawAmount = getInputValue('withdraw-input');
    const currentBalance = getCurrentBalance()
    if (withdrawAmount > 0 && withdrawAmount < currentBalance ) {
        updateTotalField('withdraw-total', withdrawAmount )
        updateBalance(withdrawAmount, false)
    }
    if (withdrawAmount > currentBalance) {
        alert('You can not withdraw more tha what you have in your5 acccount')
    }
   
});

