import {geographyList} from './geographyList';
import {taskScreen} from '../layoutTask.template';


export function geographyTask() {
  const modalScreenTask = document.getElementById('modalScreenTask');
  modalScreenTask.style.display = 'block';
  modalScreenTask.innerHTML = taskScreen;
  const taskHeader = document.getElementById('taskHeader');
  taskHeader.innerHTML = 'GEOGRAPHY TASK';
  
  const taskAnsver = document.getElementById('taskAnsver');
  taskAnsver.style.width = '200px';
  taskAnsver.style.margin = '0 50px 120px';
  
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  const number = random(0, 8);
  const country = geographyList[number].country;
  const capitalSity = geographyList[number].capitalSity;

  const task = document.getElementById('tasks');
  task.style.fontSize = '40px';
  task.innerHTML = 'Capital of:'+ ' ' + country;
  
  function checkAnsver() {
    if(taskAnsver.value.toLowerCase() == capitalSity.toLowerCase()) {
      const enemyDamage = document.getElementById('enemyDamage');
      enemyDamage.click();
      const enemyAttack = document.getElementById('enemyAttack');
      const heroDamage = document.getElementById('heroDamage');
      setTimeout(()=> {enemyAttack.click();
      heroDamage.click();
    }, 2000);
    }else{
      enemyAttack.click();
      heroDamage.click();
    };
    
    modalScreenTask.style.display = 'none';
  };

  const checkButton = document.getElementById('submitAnsver');
  checkButton.addEventListener('click', checkAnsver);
};