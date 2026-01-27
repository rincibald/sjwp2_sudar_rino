const input = document.getElementById('weightInput');
const poundsRez = document.getElementById('poundsRez');
const ouncesRez = document.getElementById('ouncesRez');
const gramsRez = document.getElementById('gramsRez');
document.getElementById('btnGo').addEventListener('click', function convert() {
    const weight = parseFloat(input.value);
    const pounds = weight * 2.2046;
    const ounces = weight * 35.274;
    const grams = weight * 1000;
    poundsRez.textContent = pounds.toFixed(2);
    ouncesRez.textContent = ounces.toFixed(2);
    gramsRez.textContent = grams.toFixed(2);
});