  function createGrid(){ //Create default grid 16x16
    const container = document.querySelector('.container');
    const column = document.querySelectorAll('.column');
  
    for(let x = 0; x < 16; x++){ //create rows and columns
      const row = document.createElement('div');
      const column = document.createElement('div');
      column.classList.add('.column');
      row.classList.add('.row');

      for(let i = 0; i < 16; i++){ //add squares to column
        const squares = document.createElement('div');
        squares.classList.add('squares');
        column.appendChild(squares);
      }

      row.appendChild(column);
      container.appendChild(row);
    }

  }
 
  function createUserGrid(){ //Create user grid if button is pressed
    const container = document.querySelector('.container');
    let size = prompt('Add number to change grid (Note: MAX 100)', '16');
    if(size <= 100 && size > 0){
      while(container.hasChildNodes()){ //Remove all existing grids
        container.removeChild(container.firstChild);
      }
      for(let x = 0; x < size; x++){ //create rows and columns of size prompted
        const row = document.createElement('div');
        const column = document.createElement('div');
        column.classList.add('.column');
        row.classList.add('.row');

        for(let i = 0; i < size; i++){ //add squares to column
          const squares = document.createElement('div');
          squares.classList.add('squares');
          column.appendChild(squares);
        }
  
        row.appendChild(column);
        container.appendChild(row);
      }
    }
    else{
      alert('Invalid input');
    }
  }

createGrid();

//Prompt change in grid size on click
const sizeBtn = document.querySelector('.size');
sizeBtn.addEventListener('click', () => createUserGrid());
