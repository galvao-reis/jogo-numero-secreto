const min_value = 0;
const max_value = 1000;

const secret_number = make_random(min_value,max_value);


function make_random(min,max){
    const rand = parseInt((Math.random()*(max-min+1)+min));
    return rand;
}

const min_element = document.getElementById('min-value');
const max_element = document.getElementById('max-value');

min_element.innerHTML = min_value;
max_element.innerHTML = max_value;

console.log('Secret Number:',secret_number)