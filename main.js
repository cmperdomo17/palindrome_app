import './style.css'

let close = document.getElementById('close-icon')
let text = document.getElementById('textbox')
let verify = document.getElementById('button-verify')
let isPalCont = document.querySelector('.is-palindrome-container')
let isntPalCont = document.querySelector('.isnt-palindrome-container')

function isPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    let array = string.split("");
    let reverse = array.reverse().join("");
    return string === reverse;
}

close.addEventListener('click', () => {
    text.value = '';
})

verify.addEventListener('click', () => {
    let string = text.value;
    if (isPalindrome(string)) {
        isPalCont.style.display = 'flex';
        isntPalCont.style.display = 'none';
    } else {
        isntPalCont.style.display = 'flex';
        isPalCont.style.display = 'none';
    }
})