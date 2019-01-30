import {taskScreen} from '../layoutTask.template';

export function mathTask() {

  let modalScreenTask = document.getElementById('modalScreenTask');
  modalScreenTask.innerHTML = taskScreen;
  let taskHeader = document.getElementById('taskHeader');
  taskHeader.innerHTML = 'MATH TASK';

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let num1 = random(1, 20);
  let num2 = random(1, 20);
  let symbol;
  let result;

  function findSymbol() {
    let a = random(1, 4);
    switch (a) {
      case 1:
        result = num1 + num2;
        symbol = '+';
        break;

      case 2:
        if (num1 < num2) {
          num1 = num1 + 19;
        };
        result = num1 - num2;
        symbol = '-';
        break;

      case 3:
        if (num1 > 10 && num2 > 10) {
          num2 = num2 - 10;
        };
        result = num1 * num2;
        symbol = '*';
        break;

      case 4:
        if (num1 < num2) {
          num1 = num2 * 3;
        } else if (num1 % num2 > 0) {
          num1 = num2 * 2;
        };
        result = num1 / num2;
        symbol = '/';
        break;
    };
  };
  findSymbol();

  let expression = num1 + ' ' + symbol + ' ' + num2 + ' ' + '=';
  console.log(result);
  let task = document.getElementById('tasks');
  task.innerHTML = expression;
  
  let mathAnsver = document.getElementById('taskAnsver');
  mathAnsver.type = 'number';

  function chekAnsver() {
    const enemyAttack = document.getElementById('enemyAttack');
    const heroDamage = document.getElementById('heroDamage');
    const enemyDamage = document.getElementById('enemyDamage');
    const screenAttack = document.getElementById('modalScreenAttack');

    if (+mathAnsver.value === result) {
      enemyDamage.click();
      setTimeout(() => {
        enemyAttack.click();
        heroDamage.click();
      }, 3000);
    } else {
      enemyAttack.click();
      heroDamage.click();
    };

    modalScreenTask.style.display = 'none';
    // screenAttack.style.display = 'none';
  };

  let chekButton = document.getElementById('submitAnsver');
  chekButton.addEventListener('click', chekAnsver);
};