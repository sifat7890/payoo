// step 1: set event handler
document.getElementById('button-login').addEventListener('click', function (event) {
    // step 2: prevent default behavior (prevent reload browser)
    event.preventDefault();


    // step 3:get the phone number
    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber);

    // step 4: validate phone and pin
    if (phoneNumber === '0123456789' && pinNumber === '1234') {
        console.log('You are locked in');
        window.location.href = './home.html';

    }
    else {
        alert('Wrong phone number or Pin')
    }

})

