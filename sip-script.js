document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const monthlyInvestmentInput = document.getElementById('monthly-investment');
    const investmentPeriodInput = document.getElementById('investment-period');
    const expectedReturnInput = document.getElementById('expected-return');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const monthlyInvestment = parseFloat(monthlyInvestmentInput.value);
        const investmentPeriod = parseFloat(investmentPeriodInput.value);
        const expectedReturn = parseFloat(expectedReturnInput.value);

        if (isNaN(monthlyInvestment) || isNaN(investmentPeriod) || isNaN(expectedReturn)) {
            resultDiv.textContent = 'Please enter valid numbers for all fields.';
            return;
        }

        const monthlyRate = expectedReturn / 12 / 100;
        const totalMonths = investmentPeriod * 12;
        const totalInvestment = monthlyInvestment * totalMonths;

        const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, totalMonths) - 1) / monthlyRate) * (1 + monthlyRate);
        const totalReturns = futureValue - totalInvestment;

        resultDiv.innerHTML = `
            <p>Total Investment: <span style="color: var(--primary-color);">₹${totalInvestment.toFixed(2)}</span></p>
            <p>Est. Returns: <span style="color: var(--secondary-color);">₹${totalReturns.toFixed(2)}</span></p>
            <p>Total Value: <span style="color: var(--primary-color);">₹${futureValue.toFixed(2)}</span></p>
        `;
    });
});