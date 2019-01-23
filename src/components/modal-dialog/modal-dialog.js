function modalDialog() {
  let taskScreen = document.getElementById('taskScreen');
  taskScreen.style.display = 'block'; 
   
};

let attackButton = document.getElementById('attackButton');
attackButton.addEventListener('click', modalDialog);