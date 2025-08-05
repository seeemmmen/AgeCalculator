function calculate() {
    const date = document.getElementById('birthday').value;

    if (!date) {
        alert('Please enter your birth date.');
        return;
    }

    const DateTime = luxon.DateTime;

    const birthDate = DateTime.fromISO(date);
    const now = DateTime.now();


    const years = now.year - birthDate.year;
    const months = now.month - birthDate.month;

    const result= document.getElementById('result');
    result.innerHTML = `You are <b>${years} years, ${months} months </b> old.`;
}
