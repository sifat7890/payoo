document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutInput = document.getElementById('input-cash-out').value;

    const cashOutPinInput = document.getElementById('input-cash-out-pin').value;

    if (cashOutPinInput === '1234') {
        console.log('Cash out money from your account');
        const balance = document.getElementById('account-balance').innerText
        const cashOutMoney = parseFloat(cashOutInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber - cashOutMoney;
        console.log(newBalance);
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to cash out. Please try again letter')
    }


})