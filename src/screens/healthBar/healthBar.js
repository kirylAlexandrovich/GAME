function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let heroHealth = 200;

let heroHealthBar = document.getElementById('heroHealthBar').getContext('2d');
// heroHealthBar.innerWidth = '600px';
heroHealthBar.clearRect(0, 0, 3000, 50);
heroHealthBar.fillStyle = '#ff0000';
heroHealthBar.fillRect(0, 100, 200, 50);
heroHealthBar.font = '100px fantasy';
heroHealthBar.fillText('100 / 100', 30, 80, 40);

function damage() {
  let damage = random(10, 30)
  heroHealth -= damage;
  if (heroHealth <= 0) {
    heroHealth = 0;
  }
  let healthProcent = Math.round(heroHealth / 2);

  heroHealthBar.clearRect(0, 0, 500, 150);
  heroHealthBar.fillText(healthProcent + ' ' + '/ 100', 30, 80, 40);
  heroHealthBar.fillRect(0, 100, heroHealth, 50)

}
let klickMe = document.getElementById('healthButton');
klickMe.addEventListener('click', damage);



let enemyHealth = 200;

let a = window.innerWidth / 100 * 50;

let enemyHealthBar = document.getElementById('enemyHealthBar').getContext('2d');
enemyHealthBar.fillStyle = '#ff0000';
enemyHealthBar.transform(1, 0, 0, 1, a, 0);
enemyHealthBar.fillRect(0, 100, -200, 50);
enemyHealthBar.font = '100px fantasy';
enemyHealthBar.fillText('100 / 100', -70, 80, 40);

function damageEnemy() {
  let damage = random(10, 30)
  enemyHealth -= damage;
  if (enemyHealth <= 0) {
    enemyHealth = 0;
  }
  let healthProcent = Math.round(enemyHealth / 2);

  enemyHealthBar.clearRect(0, 0, -500, 150);
  enemyHealthBar.fillText(healthProcent + ' ' + '/ 100', -70, 80, 40);
  enemyHealthBar.fillRect(0, 100, -enemyHealth, 50)

}
// let klickMe = document.getElementById('healthButton');
// klickMe.addEventListener('click', damageEnemy);
// console.log(enemyHealthBar.width);