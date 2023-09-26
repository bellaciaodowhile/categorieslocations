const triggerMyPay = document.querySelector('.trigger-my-pay')
const myPay = document.querySelector('.my-pay')

triggerMyPay.addEventListener('click', (e) => {
    e.preventDefault();
    myPay.style.display = 'block'
    myAds.style.display = 'none'
    myMovements.style.display = 'none'
    myAds.style.display = 'none'
    myAds.style.display = 'none'
    postingAd.style.display = 'none'
    triggerMyPay.classList.add('active')
    triggerMyAds.classList.remove('active')
    triggerMyMovements.classList.remove('active')
})

const inputNumberCredit = document.querySelector('.credit-payments .input-number input')
const myCreditPay = document.querySelector('.my-credits-pay .count span')
const summaryCredit = document.querySelector('.summary-pay .card-summary .content-summary span.credits')
const summaryPrice = document.querySelector('.summary-pay .card-summary .content-summary span.price')
const totalSummaryCredits = document.querySelector('.summary-pay .total span')
const btnPayFullCredits = document.querySelector('.btn-pay-full span')
inputNumberCredit.addEventListener('keyup', (e) => {
    const price = e.target.value
    const credits = e.target.value * 10
    myCreditPay.innerHTML = credits
    summaryCredit.innerHTML = credits
    if (price === '') {
        summaryPrice.innerHTML = '0 €'
        totalSummaryCredits.innerHTML = '0 €'
        btnPayFullCredits.innerHTML = ''
    } else {
        summaryPrice.innerHTML = price + ' €'
        totalSummaryCredits.innerHTML = price + ' €'
        btnPayFullCredits.innerHTML = price + ' € por mis créditos'
    }
});

const mainMethodCredit = document.querySelector('.main-method.credit')
const mainMethodTransfer = document.querySelector('.main-method.transfer')
const mainMethodCrypto = document.querySelector('.main-method.crypto')

mainMethodCredit.addEventListener('click', (e) => {
    e.preventDefault()
    const content = mainMethodCredit.parentElement.children[1]
    if (content.style.display == '' || content.style.display == 'none') {
        content.style.display = 'block'
        mainMethodTransfer.parentElement.children[1].style.display = 'none'
        mainMethodCrypto.parentElement.children[1].style.display = 'none'
        mainMethodCredit.parentElement.classList.add('active')
        mainMethodCrypto.parentElement.classList.remove('active')
        mainMethodTransfer.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.add('active')
    } else {
        content.style.display = 'none'
        mainMethodCredit.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.remove('active')
    }
})
mainMethodTransfer.addEventListener('click', (e) => {
    e.preventDefault()
    const content = mainMethodTransfer.parentElement.children[1]
    if (content.style.display == '' || content.style.display == 'none') {
        content.style.display = 'block'
        mainMethodCredit.parentElement.children[1].style.display = 'none'
        mainMethodCrypto.parentElement.children[1].style.display = 'none'
        mainMethodTransfer.parentElement.classList.add('active')
        mainMethodCrypto.parentElement.classList.remove('active')
        mainMethodCredit.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.add('active')
    } else {
        content.style.display = 'none'
        mainMethodTransfer.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.remove('active')
    }
})
mainMethodCrypto.addEventListener('click', (e) => {
    e.preventDefault()
    const content = mainMethodCrypto.parentElement.children[1]
    if (content.style.display == '' || content.style.display == 'none') {
        content.style.display = 'block'
        mainMethodTransfer.parentElement.children[1].style.display = 'none'
        mainMethodCredit.parentElement.children[1].style.display = 'none'
        mainMethodCrypto.parentElement.classList.add('active')
        mainMethodTransfer.parentElement.classList.remove('active')
        mainMethodCredit.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.add('active')
    } else {
        content.style.display = 'none'
        mainMethodCrypto.parentElement.classList.remove('active')
        btnPayFullCredits.parentElement.classList.remove('active')
    }
})

function separateNumber(str, size) {
    let res = '';
    for (let i = 0; i < str.length; i += size) {
        res += str.substring(i, i + size) + ' ';
    }
    return res.substring(0, res.length - 1);
}
const inputCardCredit = document.querySelector('.input-card-credit')
const inputExpCredit = document.querySelector('.input-exp-credit')
inputCardCredit.addEventListener('keyup', (e) => {
    const value = e.target.value
    if (e.key == 'Backspace' || e.key == 'Delete') {} else {
        if (value.length == 4 || value.length == 9 || value.length == 14) {
            e.target.value += ' '
        }
    }
})
inputExpCredit.addEventListener('keyup', (e) => {
    const value = e.target.value
    if (e.key == 'Backspace' || e.key == 'Delete') {} else {
        if (value.length == 2) {
            e.target.value += '/'
        }
    }
})
window.addEventListener("load", function () {
    inputCardCredit.addEventListener("keypress", soloNumeros, false);
    inputExpCredit.addEventListener("keypress", soloNumeros, false);
});
function soloNumeros(e) {
    var key = window.event ? e.which : e.keyCode;
    if (key < 48 || key > 57) {
        e.preventDefault();
    }
}