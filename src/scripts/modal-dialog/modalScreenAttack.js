import { layoutScreenAttack } from './modalScreenAttack.template';
import { mathTask } from './tasks/mathTask';
import { translateTask } from './tasks/translateTask';
import { historyTask } from './tasks/historyTask';
import { geographyTask } from './tasks/geographyTask';

export function modalScreenAttack() {
  const screenAttack = document.getElementById('modalScreenAttack');
  screenAttack.innerHTML = layoutScreenAttack;
  screenAttack.style.display = 'block';
  screenAttack.onclick = modalScreenTask;

  function modalScreenTask() {
    screenAttack.style.display = 'none';
    switch (event.target) {
      case document.getElementById('fire'):
        mathTask();
        break;
      case document.getElementById('water'):
        translateTask();
        break;
      case document.getElementById('forest'):
        historyTask();
        break;
      case document.getElementById('flash'):
        geographyTask();
        break;
    }
  };
};