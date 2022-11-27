

function getGridNum() {
   

   let promptBox = prompt('To set up the grid please choose a number between 2 and 10.', 'Enter digits please');

   let numIn = parseInt(promptBox);

   if (numIn >=2 && numIn <= 10) {
      setUpScreen(numIn);

   } else {

      alert('Please enter a valid number');

   }

   
}

const createCells = numChoice => {
  
   let numCells = numChoice * numChoice
   
   for( i = 1; i <= numCells; ++i) {
    createdScreen.innerHTML += '<div class="cell"></div>';
   }
  
};

const createGrid = size => {

  createdScreen.setAttribute('style', 'display: grid;')
  createdScreen.setAttribute('style', `grid-template: repeat(${size}, 1fr) / repeat(${size}, 1fr);`);
  
};

function setUpScreen(promptChoice) {
   
   createdScreen.setAttribute('class', 'createdScreen');
   etchaScreen.appendChild(createdScreen);

  
   createGrid(promptChoice);
   createCells(promptChoice);
  
   const allCells = document.querySelectorAll('.cell');

   
  
   allCells.forEach(function(cell) {
      
      cell.addEventListener('mouseover', 
                           function() {cell.setAttribute('style', 'background-color: black;')}
      )
   })
}

function resetScreen() {

   createdScreen.remove();
}

const etchaScreen = document.querySelector('.etchaScreen');
const createdScreen = document.createElement('div');