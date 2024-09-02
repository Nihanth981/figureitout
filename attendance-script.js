document.addEventListener('DOMContentLoaded', function() {
    const calculateBtn = document.getElementById('calculate');
    const totalClassesInput = document.getElementById('total-classes');
    const attendedClassesInput = document.getElementById('attended-classes');
    const resultDiv = document.getElementById('result');

    calculateBtn.addEventListener('click', function() {
        const totalClasses = parseInt(totalClassesInput.value);
        const attendedClasses = parseInt(attendedClassesInput.value);

        if (isNaN(totalClasses) || isNaN(attendedClasses) || totalClasses <= 0 || attendedClasses < 0) {
            resultDiv.textContent = 'Please enter valid numbers for classes.';
            return;
        }

        if (attendedClasses > totalClasses) {
            resultDiv.textContent = 'Attended classes cannot be more than total classes.';
            return;
        }

        const attendancePercentage = (attendedClasses / totalClasses) * 100;
        const roundedPercentage = attendancePercentage.toFixed(2);

        let message;
        if (attendancePercentage >= 75) {
            message = 'Good job! Your attendance is above the required 75%.';
        } else {
            const classesNeeded = Math.ceil((0.75 * totalClasses - attendedClasses) / 0.25);
            message = `Your attendance is below 75%. You need to attend at least ${classesNeeded} more class(es) to reach 75%.`;
        }

        resultDiv.innerHTML = `Your attendance is <span style="color: var(--primary-color);">${roundedPercentage}%</span><br>${message}`;
    });
});