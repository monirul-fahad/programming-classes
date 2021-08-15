document.getElementById('deposit-btn').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const depositAmountText = depositInput.value;
    const depositAmount = parseFloat(depositAmountText);

    //get current deposit 
    const depositTotal = document.getElementById('deposit-total');
    const depositTotalText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(depositTotalText);
    depositTotal.innerText = previousDepositAmount + depositAmount;
    
    //update total balane 
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(balanceTotalText);

    balanceTotal.innerText = previousBalanceAmount + depositAmount;

    //clear input field 
    document.getElementById('deposit-input').value = '';
})