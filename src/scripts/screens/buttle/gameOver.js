export function endGame(whoWin) {
  const heroWin = `<div id="endGame" class="end-game"><h2>YOU WIN</h2><div id="reloadButton" class="reload-button">PLAY AGAIN</div></div>`;
  const enemyWin = `<div id="endGame" class="end-game"><h2>YOU LOSE</h2><div id="reloadButton" class="reload-button">PLAY AGAIN</div></div>`;
  const screen = document.getElementById('finalScreen');
  const hero = document.getElementById('hero');
  const enemy = document.getElementById('enemy');
  hero.style.display = 'none';
  enemy.style.display = 'none';
  if (whoWin === 'hero') {
    screen.innerHTML = heroWin;
  };
  if (whoWin === 'enemy') {
    if(screen.innerHTML != heroWin) {
      screen.innerHTML = enemyWin;
    }
  };

  function playAgain() {
    document.location.reload();
  };
  const reloadButton = document.getElementById('reloadButton');
  reloadButton.addEventListener('click', playAgain);
};