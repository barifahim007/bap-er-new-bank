document.getElementById('btn-diposit').addEventListener('click', function () {
    const userDipositAmount = document.getElementById('diposit-money');
    const dipositAmount = userDipositAmount.value;
    const newDiposit = parseFloat(dipositAmount);
    userDipositAmount.value = '';
    // second part 
    const userDipositDoller = document.getElementById('diposited-doller');
    const userDoller = userDipositDoller.innerText;
    const userNewDoller = parseFloat(userDoller);
    const dipositTotal = newDiposit + userNewDoller;
    userDipositDoller.innerText = dipositTotal;
    // current balance addition
    const currentDipositDoller = document.getElementById('total-balance');
    const newDipositDoller = currentDipositDoller.innerText;
    const newTOtalDoller = parseFloat(newDipositDoller);
    const netDoller = newDiposit + newTOtalDoller;
    currentDipositDoller.innerText = netDoller;


})