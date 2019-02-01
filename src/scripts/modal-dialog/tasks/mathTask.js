import {taskScreen} from '../layoutTask.template';

export function mathTask() {

  const modalScreenTask = document.getElementById('modalScreenTask');
  modalScreenTask.style.display = 'block';
  modalScreenTask.innerHTML = taskScreen;
  const taskHeader = document.getElementById('taskHeader');
  taskHeader.innerHTML = 'MATH TASK';

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  let num1 = random(1, 20);
  let num2 = random(1, 20);
  let symbol;
  let result;

  function findSymbol() {
    let num = random(1, 4);
    switch (num) {
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
  let task = document.getElementById('tasks');
  task.innerHTML = expression;
  
  let mathAnsver = document.getElementById('taskAnsver');
  mathAnsver.type = 'number';

  function checkAnsver() {
    const enemyAttack = document.getElementById('enemyAttack');
    const heroDamage = document.getElementById('heroDamage');
    const enemyDamage = document.getElementById('enemyDamage');


    if (+mathAnsver.value === result) {
      enemyDamage.click();
      setTimeout(() => {
        enemyAttack.click();
        heroDamage.click();
      }, 2000);
    } else {
      enemyAttack.click();
      heroDamage.click();
    };

    modalScreenTask.style.display = 'none';
  };

  let checkButton = document.getElementById('submitAnsver');
  checkButton.addEventListener('click', checkAnsver);
};