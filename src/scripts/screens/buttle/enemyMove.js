export function enemyMove() {
  let troll_1 = new Image();
  troll_1.src = '../images/heroes/troll_1/troll_1_idle.png';

  let troll_1_attack = new Image();
  troll_1_attack.src = '../images/heroes/troll_1/troll_1_attack.png';

  let troll_1_die = new Image();
  troll_1_die.src = '../images/heroes/troll_1/troll_1_die.png';

  let trollImage = troll_1;

  let trollPosition = 0;

  let trollMove = setInterval(() => {
    let enemyCanvas = document.getElementById('enemy');
    let screenWidth = window.innerWidth;
    enemyCanvas.style.left = screenWidth / 2 + 'px';

    let troll = enemyCanvas.getContext('2d');
    troll.canvas.width = '600';
    troll.canvas.height = '521';
    troll.clearRect(0, 0, 500, 3000);

    if (trollPosition <= -3600) {
      trollPosition = 0;
    } else {
      trollPosition -= 600;
    }
    troll.drawImage(trollImage, trollPosition, 0);
  }, 250);

  function trollAttack() {
    trollPosition = 0;
    trollImage = troll_1_attack;
    setTimeout(() => {
      trollImage = troll_1;
    }, 1500);
    return trollPosition = 0;
  };


  function trollDie() {
    trollPosition = 0;
    trollImage = troll_1_die;
    setTimeout(() => {
      clearInterval(trollMove);
    }, 1500);
    return trollPosition = 0;
  }

let eAttack = document.getElementById('enemyAttack');
eAttack.addEventListener('click', trollAttack);

};