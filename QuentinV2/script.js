const labyEl = document.getElementById('labyrinthe');
const gameOver = document.getElementById('game_over');

const height = 28;
const width = 15;

const labyMap = [ //un 1 correspond à une case vide et praticable
                  //un 0 correspond à un mur vertical
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,0,0,0,1,1,1,1,1,1,1,0,0,0],
    [0,1,0,1,0,1,1,1,1,1,1,1,0,1,0],
    [0,0,0,1,0,0,0,1,0,1,0,0,0,1,0],
    [0,1,0,1,1,1,1,1,0,1,1,1,1,1,0],
    [0,1,0,1,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,0,1,1,1,1,1,0,1,0,1,0,1,0], //20
    [0,1,0,1,0,0,0,1,0,1,0,0,0,1,0],
    [0,1,0,1,0,1,1,1,0,1,1,1,1,1,0],
    [0,1,0,0,0,1,0,0,0,0,0,1,0,1,0],
    [0,1,1,1,1,1,1,1,1,1,0,1,0,1,0],
    [0,1,0,0,0,0,0,0,0,0,0,1,0,1,0], //15
    [0,1,1,1,1,1,1,1,0,1,1,1,0,1,0],
    [0,0,0,1,0,0,0,1,0,1,0,0,0,0,0],
    [0,1,0,1,1,1,0,1,0,1,1,1,1,1,0],
    [0,1,0,0,0,0,0,1,0,1,0,0,0,1,0],
    [0,1,0,1,1,1,1,1,0,1,0,1,1,1,0], //10
    [0,1,0,1,0,0,0,0,0,0,0,1,0,1,0],
    [0,1,1,1,1,1,1,1,0,1,1,1,0,1,0],
    [0,1,0,0,0,1,1,1,0,1,0,0,0,1,0],
    [0,1,1,1,0,1,1,1,0,1,0,1,0,1,0],
    [0,1,0,0,0,1,0,0,0,1,0,1,0,1,0], //5
    [0,1,0,1,1,1,1,1,1,1,0,1,0,1,0],
    [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0],
    [0,1,1,1,1,1,1,1,1,1,1,1,1,1,0]
];

// Generate the map
// for (let i = 0; i < height; i++) {
//   labyMap[i] = [];
//   for (let j = 0; j < width; j++) {
//     labyMap[i][j] = 0;
//   }
// }

// Print the map
labyEl.style.setProperty('--width', width);
labyEl.style.setProperty('--height', height);

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const cellEl = document.createElement('div');
    if (labyMap[i][j] === 0) {
        cellEl.classList.add('wall');
    }
    else {
        cellEl.classList.add('cell');
    }
    cellEl.setAttribute('data-x', j);
    cellEl.setAttribute('data-y', i);
    labyEl.appendChild(cellEl);
  }
}

const walls = document.querySelectorAll('.wall');

function game(walls) {
    walls.forEach(wall => {
        wall.addEventListener('mouseover', function() {
            console.log('game over');
            gameOver.style.display = 'block'; 
    });
    
    });
}

game(walls);