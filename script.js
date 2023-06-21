  function createGrid(){ //Create default grid 16x16
    const container = document.querySelector('.container');
  
    for(let x = 0; x < 16; x++){ //create rows and columns
      const row = document.createElement('div');
      row.classList.add('row');

      for(let i = 0; i < 16; i++){ //add squares as columns
        const squares = document.createElement('div');
        squares.classList.add('squares');
        row.appendChild(squares);
      }
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
  
    for(let x = 0; x < size; x++){ //create rows and columns
      const row = document.createElement('div');
      row.classList.add('row');

      for(let i = 0; i < size; i++){ //add squares as columns
        const squares = document.createElement('div');
        squares.classList.add('squares');
        row.appendChild(squares);
      }

      container.appendChild(row);
      colorSquare();//Recalls to allow square coloring

    }
    }
    else{
      alert('Invalid input');
    }
  }

  function colorSquare(){ //Square coloring
    let randomHex = (Math.random() * (1000000 - 100000) + 100000);
    console.log(randomHex);

    squares = document.querySelectorAll('.squares');

    for (let i = 0; i < squares.length; i++){
      squares[i].addEventListener('mouseover', () => {
      squares[i].style.backgroundColor = 'black'; //square goes to black

      })  
    }

  }
createGrid();
colorSquare();

//Prompt change in grid size on click
const sizeBtn = document.querySelector('.size');
sizeBtn.addEventListener('click', () => createUserGrid());

