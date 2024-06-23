const form = document.querySelector('form');
//this code will give us empty value.
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
    e.preventDefault();
    //but this code give us height and weight.
    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')

    if (height === '' || height <= 0 || isNaN(height)) {
        results.innerHTML = "Please give a valid height";
    }
    else if (weight === '' || weight < 0 || isNaN(weight)) {
        results.innerHTML = "Please give a valid weight";
    } else {
        const bmi = (weight / ((height * height)) * 10000).toFixed(2);
        //showing the result
        results.innerHTML = `<span>${bmi}</span>`

    if (bmi < 18.6) {
        results.innerHTML += `<p>You are underweight</p>`
    }
    else if (bmi >= 18.6 && bmi < 24.9) {
        results.innerHTML += `<p>You are normal weight</p>`
    }
    else if (bmi >= 25 && bmi < 29.9) {
        results.innerHTML += `<p>You are overweight</p>`
    }
    else if (bmi >= 30) {
        results.innerHTML += `<p>You are obese</p>`
    }
}
});