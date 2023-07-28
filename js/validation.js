function isValid(guess){
    const number = parseInt(guess);

    if (isNotValidGuess(number)){
        guess_element.appendChild(invalidElement());
        return;
    }
    if (isGreaterOrLower(number)){
        guess_element.appendChild(invalidNumber());
        return;
    }

    const diff = number - secret_number;

    if (number > secret_number || number < secret_number){ 
        guess_element.appendChild(guessedLowHigh(diff));
        return;
    }

    if (number === secret_number){ gameWin() }


}

function isNotValidGuess(number) {
    return Number.isNaN(number);
}

function isGreaterOrLower(number){
    return (number > max_value || number < min_value);
}

function invalidElement(){
    const element = makeDiv("Este valor não é válido. O valor deve ser um ");

    const bold = document.createElement('b');
    bold.id="bold";
    bold.innerText = "número";

    element.appendChild(bold);
    element.innerHTML += ".";
    return element;

}

function invalidNumber(){
    const element = makeDiv("Este valor não é válido. O valor deve estar entre ");

    const min_bold = makeBold(min_value);
    const max_bold = makeBold(max_value);

    console.log(min_bold);
    console.log(max_bold);

    element.appendChild(min_bold);
    element.innerHTML += " e ";
    element.appendChild(max_bold);
    element.innerHTML += " !";

    return element;
}


// I could make a single function here, by passing the type of element beforehand.
// But honestly, adding a class and a id would be a pain in the butt, so i'll leave them separated.
function makeDiv(innerText) {
    const element = document.createElement('div');
    element.classList.add('message__text');
    element.innerText = innerText;
    return element;
}

function makeBold(innerText){
    const element = document.createElement('b');
    element.id = 'bold';
    element.innerText = innerText;
    return element;
}

function makeArrow(difference){
    const arrow = document.createElement('i');
    if (difference < 0){
        arrow.classList.add("fa-solid", "fa-arrow-turn-up");
    }
    if (difference > 0){
        arrow.classList.add("fa-solid", "fa-arrow-turn-down");
    }
    return arrow;
}

function guessedLowHigh(difference){
    const element = makeDiv("O número secreto é ");
    let bold;
    if (difference < 0){
        bold = makeBold('maior');
    }
    if (difference > 0){
        bold = makeBold('menor');
    }

    element.appendChild(bold);

    element.appendChild(makeArrow(difference))

    return element;
}

function gameWin(){
    const main = document.querySelector('main');
    main.innerHTML = "";

    const h2 = document.createElement('h2');
    h2.classList.add('main__title');
    h2.innerText = "Você acertou!";

    const h3 = document.createElement('h3');
    h3.classList.add('main__subtitle');
    h3.innerText = "O número secreto era "

    const box = document.createElement('span');
    box.classList.add('message__box');
    box.innerText = secret_number;
    
    
    recognition.stop();
    recognition.abort();

    main.appendChild(h2);
    main.appendChild(h3);
    main.appendChild(box);
    main.appendChild(makeResetButton());

}

function makeResetButton(){
    const button = document.createElement('button');
    button.id = 'reset-btn';
    button.classList.add('reset-button');
    button.innerText = 'Jogar Novamente';

    button.addEventListener("click", reset_game)
    return button;

}

function reset_game(){
    window.location.reload();
}