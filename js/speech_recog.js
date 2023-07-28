const guess_element = document.getElementById('guess');

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new SpeechRecognition();
recognition.lang = "pt-Br";
recognition.start();

recognition.addEventListener('result',onSpeak);

recognition.addEventListener('end', () => {recognition.start();})

function onSpeak(event){
  
  const guess = event.results[0][0].transcript;
  updateGuess(guess);
  isValid(guess);
}

function updateGuess(guess){
  guess_element.innerHTML = "";

  const uSaid_elem = document.createElement('div');
  uSaid_elem.classList.add('message__u-said');
  uSaid_elem.innerText = "Você disse:";
  guess_element.appendChild(uSaid_elem);

  const guess_elem = document.createElement('span');
  guess_elem.classList.add('message__box');
  guess_elem.innerText = guess;

  guess_element.appendChild(guess_elem);

}