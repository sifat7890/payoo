// step 1: add an event handler to the add money button inside the form
document.getElementById('btn-add-money').addEventListener('click', function (event) {
    // prevent page reload after form submit
    event.preventDefault();
    // step 2:get money to be added to the account 
    const addMoneyInput = document.getElementById('input-amount-number').value;
    console.log(addMoneyInput);

    // get the pin number provide
    const addPinNUmber = document.getElementById('input-pin-number').value;
    console.log(addPinNUmber);

    // step 3: verify the pin number

    if (addPinNUmber === '1234') {
        console.log('adding money to your account');

        // step 4:get the current balance
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        // step 5:add money input with balance
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);
        const newBalance = balanceNumber + addMoneyNumber;
        console.log(newBalance);

        // step 6:update the balance the in the UI/DOM
        document.getElementById('account-balance').innerText = newBalance;

    }
    else {
        alert('Failed to add money!Please try again.')
    }

})