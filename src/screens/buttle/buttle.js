// import {damage, damageEnemy} from '../healthBar/healthBars';
let elf_1 = new Image();
let elf_1_attack = new Image();
let troll_1 = new Image();
let troll_1_attack = new Image();

elf_1.src = 'images/heroes/elf_1/elf_1_idle.png';
elf_1_attack.src = 'images/heroes/elf_1/elf_1_attack.png';
troll_1_attack.src = 'images/heroes/troll_1/troll_1_attak.png';
troll_1.src = 'images/heroes/troll_1/troll_1_idle.png';

let elfSprite = elf_1;

let moveElf = 0;

function attackHero() {
  elfSprite = elf_1_attack;
  setTimeout(() => {elfSprite = elf_1}, 1000);
  return moveElf = 0;
};

function move() {
  let heroCanvas = document.getElementById('hero');
  let screenWidth = window.innerWidth;
  heroCanvas.style.width = screenWidth / 100 * 45 + 'px';
  heroCanvas.style.left = screenWidth / 100 * 15 + 'px';
  let elf = heroCanvas.getContext('2d');
  elf.clearRect(0, 0, 606, 10000);
  if (moveElf === -1212) {
    moveElf = 0;
  } else {
    moveElf -= 303;
  };
  elf.drawImage(elfSprite, 0, moveElf);
};

let idle = setInterval(move, 250);



// let attackButton = document.getElementById('attackButton');
// attackButton.addEventListener('click', attackHero);

let trollPosition = 0;
let trollMove = setInterval(() => {
  let enemyCanvas = document.getElementById('enemy');
  let screenWidth = window.innerWidth;
  enemyCanvas.style.width = screenWidth / 100 * 35 + 'px';
  enemyCanvas.style.left = screenWidth / 100 * 55 + 'px';
  let troll = enemyCanvas.getContext('2d');
  troll.clearRect(0, 0, 500, 3000);

  if (trollPosition <= -3000) {
    trollPosition = 0;
  } else {
    trollPosition -= 500;
  }
  // console.log(position1);
  // troll.drawImage(troll_1_attack, trollPosition, 0);
  troll.drawImage(troll_1, trollPosition, 120);
}, 200);


// drawElf();
// drawTroll();