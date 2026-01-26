const input = document.querySelector('.tekst');
const result = document.querySelector('.result span');

function countLetters() {
    const text = input.value;
    const letterCount = text.length;
    result.textContent = letterCount;
}

input.addEventListener('input', countLetters);