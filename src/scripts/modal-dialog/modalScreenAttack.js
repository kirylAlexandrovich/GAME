import {
  layoutScreenAttack
} from './modalScreenAttack.template';
import {
  mathTask
} from './tasks/mathTask';
import {
  translateTask
} from './tasks/translateTask';
import {
  historyTask
} from './tasks/historyTask';

export function modalScreenAttack() {
  const screenAttack = document.getElementById('modalScreenAttack');
  screenAttack.innerHTML = layoutScreenAttack;
  screenAttack.style.display = 'block';
  screenAttack.addEventListener('click', modalScreenTask);

  function modalScreenTask() {
    const screenTask = document.getElementById('modalScreenTask');
    screenTask.style.display = 'block';
    if (event.target === document.getElementById('fire')) {
      mathTask();
    }
    if (event.target === document.getElementById('water')) {
      translateTask();
    }
    if (event.target === document.getElementById('forest')) {
      // historyTask();
    }
    if (event.target === document.getElementById('flash')) {
      console.log('flash');
    }
  };
  const shutterScreenAttack = document.getElementById('shutterScreenAttack');
  shutterScreenAttack.addEventListener('click',closeScreenAttack);

  function closeScreenAttack() {
    screenAttack.style.display = 'none';
  }
};