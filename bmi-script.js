document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const heightInput = document.getElementById('height');
    const weightInput = document.getElementById('weight');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const height = parseFloat(heightInput.value) / 100; // convert cm to m
        const weight = parseFloat(weightInput.value);

        if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
            resultDiv.textContent = 'Please enter valid height and weight.';
            return;
        }

        const bmi = weight / (height * height);
        const roundedBMI = bmi.toFixed(1);

        let category;
        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (bmi < 25) {
            category = 'Normal weight';
        } else if (bmi < 30) {
            category = 'Overweight';
        } else {
            category = 'Obese';
        }

        resultDiv.innerHTML = `Your BMI is <span style="color: var(--primary-color);">${roundedBMI}</span><br>Category: <span style="color: var(--secondary-color);">${category}</span>`;
    });
});