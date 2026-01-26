document.querySelector('.dugme').addEventListener('click', function() {
    const weight = parseFloat(document.querySelector('.weight').value);
    const height = parseFloat(document.querySelector('.height').value);
    const result = document.getElementById('result');


    const bmi = weight / ((height / 100) ** 2);
    result.textContent = `Your BMI is: ${bmi.toFixed(2)}`;
});