import {dictionary} from './dictionary';
import {taskScreen} from '../layoutTask.template';

export function translateTask() {
  const modalScreenTask = document.getElementById('modalScreenTask');
  modalScreenTask.innerHTML = taskScreen;
  const taskHeader = document.getElementById('taskHeader');
  taskHeader.innerHTML = 'TRANSLATE TASK';
  
  const taskAnsver = document.getElementById('taskAnsver');
  taskAnsver.style.width = '200px';
  taskAnsver.style.margin = '0 50px 0 50px';
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const number = random(1, 15);
  console.log(number);
  const englishWord = dictionary[number].key;
  const russianWord = dictionary[number].value;

  const task = document.getElementById('tasks');
  task.innerHTML = englishWord;
  
  function chekAnsver() {
    if(taskAnsver.value.toLowerCase() == russianWord) {
      const enemyDamage = document.getElementById('enemyDamage');
      enemyDamage.click();
      const enemyAttack = document.getElementById('enemyAttack');
      const heroDamage = document.getElementById('heroDamage');
      setTimeout(()=> {enemyAttack.click();
      heroDamage.click();
    }, 3000);
    }else{
      enemyAttack.click();
      heroDamage.click();
    };
    
    modalScreenTask.style.display = 'none';
    // const screenAttack = document.getElementById('modalScreenAttack');
    // screenAttack.style.display = 'none';
    // const shutterScreenAttack = document.getElementById('shutterScreenAttack');
    // shutterScreenAttack.click();
    
  };

  const chekButton = document.getElementById('submitAnsver');
  chekButton.addEventListener('click', chekAnsver);
};