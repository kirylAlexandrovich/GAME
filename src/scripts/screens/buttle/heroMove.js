export function heroMove() {
  let elf_1 = new Image();
  elf_1.src = '../images/heroes/elf_1/elf_1_idle.png';

  let elf_1_attack = new Image();
  elf_1_attack.src = '../images/heroes/elf_1/elf_1_attack.png';

  let elf_1_die = new Image();
  elf_1_die.src = '../images/heroes/elf_1/elf_1_die.png';

  let elfSprite = elf_1;
  let elfPosition = 0;

  function move() {
    let heroCanvas = document.getElementById('hero');
    let screenWidth = window.innerWidth;
    
    heroCanvas.style.left = screenWidth / 100 * 15 + 'px';
    let elf = heroCanvas.getContext('2d');

    elf.canvas.width = screenWidth / 2;
    elf.canvas.height = '310';

    elf.clearRect(0, 0, 606, 10000);
    if (elfPosition === -1212) {
      elfPosition = 0;
    } else {
      elfPosition -= 303;
    };
    if(elfSprite ===elf_1_die) console.log('eee');
    elf.drawImage(elfSprite, 0, elfPosition);
  };

  let idle = setInterval(move, 250);

  function heroAttack() {
    elfSprite = elf_1_attack;
    setTimeout(() => {
      elfSprite = elf_1;
    }, 1250);
    return elfPosition = 0;
  };

  let enemyDamage = document.getElementById('enemyDamage');
  enemyDamage.addEventListener('click', heroAttack);

  function heroDie() {
    elfPosition = 0;
    elfSprite = elf_1_die;
    setTimeout(() => {
      clearInterval(idle);
    }, 1050);
    return elfPosition = 0;
  };
};