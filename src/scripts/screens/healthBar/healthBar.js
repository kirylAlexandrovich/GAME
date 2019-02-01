import { endGame } from '../buttle/gameOver';

export function healthBar() {
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  let healthBarWidth = window.innerWidth / 2;
  let healthBarHeight = 100;
  let heroHealth = healthBarWidth / 1.5;
  let oneProcentHeroHealth = heroHealth / 100;

  let heroHealthBar = document.getElementById('heroHealthBar').getContext('2d');
  heroHealthBar.canvas.width = healthBarWidth;
  heroHealthBar.canvas.height = healthBarHeight;
  heroHealthBar.fillStyle = '#ff0000';
  heroHealthBar.fillRect(0, 50, heroHealth, 20);
  heroHealthBar.font = '50px fantasy';
  heroHealthBar.fillText('100 / 100', 30, 40, 100);

  function damage() {
    let damage = random(40, 60);
    heroHealth -= damage;
    if (heroHealth <= 0) {
      heroHealth = 0;
      endGame('enemy');
      const heroDie = document.getElementById('heroDie');
      heroDie.click();
    };

    let healthProcent = Math.round(heroHealth / oneProcentHeroHealth);
  
    heroHealthBar.clearRect(0, 0, healthBarWidth, healthBarHeight);
    heroHealthBar.fillText(healthProcent + ' ' + '/ 100', 30, 40, 100);
    heroHealthBar.fillRect(0, 50, heroHealth, 20);
  };

  let damageHero = document.getElementById('heroDamage');
  damageHero.addEventListener('click', damage);

  let enemyHealth = -healthBarWidth / 1.5;
  let oneProcentEnemyHealth = enemyHealth / 100;

  let enemyHealthBar = document.getElementById('enemyHealthBar').getContext('2d');
  enemyHealthBar.canvas.width = healthBarWidth;
  enemyHealthBar.canvas.height = healthBarHeight;
  enemyHealthBar.fillStyle = '#ff0000';
  enemyHealthBar.transform(1, 0, 0, 1, healthBarWidth, 0);
  enemyHealthBar.fillRect(0, 50, enemyHealth, 20);
  enemyHealthBar.font = '50px fantasy';
  enemyHealthBar.fillText('100 / 100', -130, 40, 100);

  function damageEnemy() {
    let damage = random(50, 70);
    enemyHealth += damage;
    if (enemyHealth >= 0) {
      enemyHealth = 0;
      endGame('hero');
      const enemyDie = document.getElementById('enemyDie');
      enemyDie.click();
    };
  
    let healthProcent = Math.round(enemyHealth / oneProcentEnemyHealth);
  
    enemyHealthBar.clearRect(0, 0, -healthBarWidth, healthBarHeight);
    enemyHealthBar.fillText(healthProcent + ' ' + '/ 100', -130, 40, 100);
    enemyHealthBar.fillRect(0, 50, enemyHealth, 20);
  };
  let enemyDamage = document.getElementById('enemyDamage');
  enemyDamage.addEventListener('click', damageEnemy);
  
};