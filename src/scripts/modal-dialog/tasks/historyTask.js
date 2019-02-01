import {questionList} from './historyQuestion';
import {taskScreen} from '../layoutTask.template';
import {checkboxLayout} from '../layoutTask.template';
 
export function historyTask() {
  const modalScreenTask = document.getElementById('modalScreenTask');
  modalScreenTask.style.display = 'block';
  modalScreenTask.innerHTML = taskScreen;
  const taskHeader = document.getElementById('taskHeader');
  taskHeader.innerHTML = 'HISTORY TASK';

  const submitButton = document.getElementById('submitAnsver');
  submitButton.style.display = 'none';
  
  const taskAnsver = document.getElementById('taskAnsver');
  taskAnsver.style.display = 'none';

  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  let count = 0;
  count + 1;
  console.log(count);

  const questionNumber = questionList[random(0, 11)];

  const task = document.getElementById('tasks');
  task.style.fontSize = '25px';
  task.innerHTML = questionNumber.question;

  const ansverContainer = document.getElementById('ansverContainer');
  ansverContainer.innerHTML = checkboxLayout;

  const firstButton = document.getElementById('firstButton');
  const secondButton = document.getElementById('secondButton');
  const thirdButton = document.getElementById('thirdButton');
  const fourthButton = document.getElementById('fourthButton');

  console.log(questionNumber.rightAnswer);

  firstButton.innerText = questionNumber.ansver[0];
  secondButton.innerText = questionNumber.ansver[1];
  thirdButton.innerText = questionNumber.ansver[2];
  fourthButton.innerText = questionNumber.ansver[3];

  const enemyDamage = document.getElementById('enemyDamage');
  const enemyAttack = document.getElementById('enemyAttack');
  const heroDamage = document.getElementById('heroDamage');
  ansverContainer.addEventListener('click', checkAnsver);

  function checkAnsver() {
    if(event.target.innerText === questionNumber.rightAnswer) {
      enemyDamage.click();
      setTimeout(()=> {enemyAttack.click();
      heroDamage.click();
    }, 2000);
    }else{
      enemyAttack.click();
      heroDamage.click();
    };

    modalScreenTask.style.display = 'none';
  };
};