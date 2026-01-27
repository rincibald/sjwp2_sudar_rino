const celsiusInput = document.getElementById('celsiusInput');
const fahrenheitRez = document.getElementById('fahrenheitRez');
const kelvinRez = document.getElementById('kelvinRez');
document.getElementById('btnConvert').addEventListener('click', function convert() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    const kelvin = celsius + 273.15;
    fahrenheitRez.textContent = fahrenheit.toFixed(2);
    kelvinRez.textContent = kelvin.toFixed(2);
});