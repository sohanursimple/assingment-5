const button = document.querySelectorAll('.Select-btn');
let playerArray = [];
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {
        this.disabled = true;
        const clickButton = this.parentNode.firstElementChild.innerText;
        playerArray.push(clickButton);
        playerName(playerArray);

    });
}

function playerName(array) {
    const ol = document.getElementById('list-item');
    ol.style.background = 'silver';
    ol.innerText = '';
    for (let i = 0; i < array.length; i++) {
        let player = array[i];
        const li = document.createElement('li');
        li.style.borderBottom = '1px solid red';
        li.style.padding = '10px';
        li.innerHTML = player;
        if (array.length === 6) {
            alert("No More Add Player");
            return;
        } else {
            ol.appendChild(li);
        }

    }
}


// common function

function getInputField(getId) {
    const getInputField = document.getElementById(getId);
    const getInputFieldString = getInputField.value;
    getInputField.value = '';
    const inputFieldPrice = parseInt(getInputFieldString);

    return inputFieldPrice;

}



// calculate 
document.getElementById('calculate').addEventListener('click', function() {
    const playerRate = document.getElementById('player-rate');
    const playerRateString = playerRate.value;
    playerRate.value = '';
    const playerPrice = parseInt(playerRateString);
    if (isNaN(playerPrice)) {
        alert('Please Enter a Valid Amount');
        return;
    }

    const totalCost = playerPrice * 5;

    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerPriceOne = parseInt(playerExpenseString);
    const totalExpense = playerPriceOne + totalCost;
    playerExpense.innerText = totalExpense;
});

document.getElementById('total-calculate').addEventListener('click', function() {
    //    per player cost
    const playerExpense = document.getElementById('player-expense');
    const playerExpenseString = playerExpense.innerText;
    const playerPriceOne = parseInt(playerExpenseString);
    const totalExpense = playerPriceOne;

    // use common function
    const managerPrice = getInputField('manager');
    const coachPrice = getInputField('coach');
    if (isNaN(managerPrice)) {
        alert('Please Enter a valid amount');
        return;
    }
    if (isNaN(coachPrice)) {
        alert('Please Enter a valid amount');
        return;
    }
    // if(totalExpense.value=''){
    //     alert('Please Fill up the player price');
    //     return;
    // }
    const totalPrice = managerPrice + coachPrice;

    // total amount declare
    const finalAmount = document.getElementById('total-price');
    const finalAmountString = finalAmount.innerText;
    const finalAmountValue = parseInt(finalAmountString);
    console.log(finalAmountValue)



    // totali final amount
    const finalAmountTotal = totalPrice + totalExpense;
    finalAmount.innerText = finalAmountTotal;
})