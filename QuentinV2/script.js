let is_game_over = false;

const soundtrack = document.getElementById('soundtrack');
soundtrack.play();
soundtrack.volume = 0.2;

soundtrack.addEventListener('ended', function() {
    soundtrack.currentTime = 0;
    soundtrack.play();
});

const vitre_noise = document.getElementById('vitre');

const window_pic = document.getElementById('window');

const game_over_noise = document.getElementById('death_laugh');


const labyrinthe = document.getElementById('labyrinthe');
const gameOver = document.getElementById('game_over');

const height = 28;
const width = 15;

const labyMap = [ //un 1 correspond à une case vide et praticable
                  //un 0 correspond à un mur vertical
    [0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,1,1,1,1,1,0,1,0,1,1,1,1,1,0],
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
    [0,1,0,0,0,0,0,1,0,1,0,0,0,1,0],
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
labyrinthe.style.setProperty('--width', width);
labyrinthe.style.setProperty('--height', height);

for (let i = 0; i < height; i++) {
  for (let j = 0; j < width; j++) {
    const cellule = document.createElement('div');
    if (labyMap[i][j] === 0) {
        cellule.classList.add('wall');
    }
    else {
        cellule.classList.add('cell');
    }
    cellule.setAttribute('data-x', j);
    cellule.setAttribute('data-y', i);
    labyrinthe.appendChild(cellule);
  }
}

const walls = document.querySelectorAll('.wall');

function game(walls) {
    walls.forEach(wall => {
        wall.addEventListener('mouseenter', function() {
            console.log('game over');
            gameOver.style.display = 'block'; 
            soundtrack.pause();
            game_over_noise.play();
            game_over_noise.volume = 0.2;
            is_game_over = true;
    });
    
    });
}

game(walls);







const repliques = ["Tiens, tiens, tiens ... MAIS QUELLE MERVEILLE !",
                "Le visiteurs !",
                "J'AI PEUR ! ALED !",
                "Alors c'est toi le phénomène dont tout le monde parle AH AH AH !",
                "TU VEUX RIRE ! Tu ne fais pas le poids !",
                "T'es fini !",
                "J'suis monsieur, Oogie Boogie ! Toi parcontre, tu n'est plus rien !",]

let replique_index = 0;

const button = document.getElementById('dialogue');
let dialogue = document.getElementById('dialogue_text');
const name = document.getElementById('name');
const picture = document.getElementById('picture');


console.log(repliques.length);
button.addEventListener('click', function() {
    replique_index++;
    console.log(replique_index);

    if (replique_index >= repliques.length) {
        for (let index = 0; index < 5; index++) {
            button.style.transition = 'all 1s';
            picture.style.transition = 'all 1s';
            name.style.transition = 'all 1s';
            button.style.opacity = '0';
            picture.style.opacity = '0';
            name.style.display = 'none';
            labyrinthe.style.transition = 'all 20s linear';
            labyrinthe.style.top = '100%';
            setTimeout(() => {
                if (!is_game_over) {
                    window_pic.style.display = 'block';
                }
            }, 21000);
        }
    }
    else {
        dialogue.innerHTML = repliques[replique_index-1];
    }
});




window_pic.addEventListener('click', function() {
    soundtrack.pause();
    vitre_noise.play();
    vitre_noise.volume = 0.2;
    window.open(location.href = '/Sally_index.html', '_blank');
    window_pic.style.display = 'none';
});