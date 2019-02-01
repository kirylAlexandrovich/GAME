import '../styles/index.scss';
import { heroMove } from './screens/buttle/heroMove.js';
import { healthBar } from './screens/healthBar/healthBar.js';
import { enemyMove } from './screens/buttle/enemyMove.js';
import { modalScreenAttack } from './modal-dialog/modalScreenAttack.js';

const loadingScreen = document.getElementById('loadingContainer');

function loaded() {
  healthBar();
  enemyMove();
  heroMove();
  loadingScreen.style.display = 'none';
};
setTimeout(loaded, 3000);

const attackButton = document.getElementById('attackButton');
attackButton.addEventListener('click', modalScreenAttack);