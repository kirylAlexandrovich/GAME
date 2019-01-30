import '../styles/index.scss';

import { heroMove } from './screens/buttle/heroMove.js';
import { healthBar } from './screens/healthBar/healthBar.js';
import { enemyMove } from './screens/buttle/enemyMove.js';
import { modalScreenAttack } from './modal-dialog/modalScreenAttack.js';
// import { modalScreenTask } from './modal-dialog/modalScreenAttack.js';



healthBar();
enemyMove();
heroMove();

let attackButton = document.getElementById('attackButton');
attackButton.addEventListener('click', modalScreenAttack);

// let g = layoutScreenAttack;
// console.log(g);


