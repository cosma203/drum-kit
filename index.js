document.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', function() {
    makeSound(this.innerHTML);
    btnAnimation(this.innerHTML);
  });
});

addEventListener('keypress', e => {
  makeSound(e.key);
  btnAnimation(e.key);
});

function makeSound(key) {
  switch (key) {
    case 'w':
      new Audio('sounds/tom-1.mp3').play();
      break;
    case 'a':
      new Audio('sounds/tom-2.mp3').play();
      break;
    case 's':
      new Audio('sounds/tom-3.mp3').play();
      break;
    case 'd':
      new Audio('sounds/tom-4.mp3').play();
      break;
    case 'j':
      new Audio('sounds/snare.mp3').play();
      break;
    case 'k':
      new Audio('sounds/crash.mp3').play();
      break;
    case 'l':
      new Audio('sounds/kick-bass.mp3').play();
      break;
    default:
      alert('no sound to play');
      break;
  }
}

function btnAnimation(currentKey) {
  const activeBtn = document.querySelector(`.${currentKey}`);

  activeBtn.classList.add('pressed');
  setTimeout(() => {
    activeBtn.classList.remove('pressed');
  }, 100);
}
