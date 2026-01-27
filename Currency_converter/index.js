const bitcoinInput = document.getElementById('bitcoinInput');
const euroRez = document.getElementById('euroRez');
const dollarRez = document.getElementById('dollarRez');
document.getElementById('btnConvert').addEventListener('click', function convert() {
    const bitcoin = parseFloat(bitcoinInput.value);
    const euro = bitcoin * 73754.79;
    const dollar = bitcoin * 87899.96;
    euroRez.textContent = euro.toFixed(2);
    dollarRez.textContent = dollar.toFixed(2);

});