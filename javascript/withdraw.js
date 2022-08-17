/*
1. add event handler to withdraw btn
2. get input value from input field
3. user string value convert to parseFloat number
4. clear input field by empty string
*/

document.getElementById('btn-withdraw').addEventListener('click', function () {

    // step-2
    const userWithdrawValue = document.getElementById('user-input-value');
    const widthdrawValue = userWithdrawValue.value;
    const userStrinValue = parseFloat(widthdrawValue);
    // console.log(userStrinValue);
    // step-2.5
    userWithdrawValue.value = '';
    // step-3
    const myWithDrawMoney = document.getElementById('withdraw-money');
    const userWithdraw = myWithDrawMoney.innerText;
    // step -4 parseFloat userwithdraw 
    const newUserWithdraw = parseFloat(userWithdraw);
    // step-5 addition the value 
    const newTotalWithdraw = userStrinValue + newUserWithdraw;
    // step-6 
    myWithDrawMoney.innerText = newTotalWithdraw;


})