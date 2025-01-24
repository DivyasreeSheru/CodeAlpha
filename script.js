const form = document.getElementById('ageForm');
const result = document.getElementById('result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const dob = new Date(document.getElementById('dob').value);
    if (isNaN(dob)) {
        result.textContent = 'Invalid date. Please try again.';
        return;
    }
    const today = new Date();
    let age = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < dob.getDate())) {
        age--;
    }
    result.textContent = `Your age is ${age} years.`;
});
