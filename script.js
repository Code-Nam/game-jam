let game_over = false;
let music = document.getElementById('Sally_singing');

// if(music.paused) {
//     music.play();
//     console.log('1');
// }

// while (game_over = false) {

// }

const dialogues = [
    "...",
    "I sense there's something in the wind",
    "That feels like tragedy's at hand",
    "And though I'd like to stand by him",
    "Can't shake this... Oh !",
    "Well, hello you... What are you doing around here ?",
    "A pretty little thing like you shouldn't be lurking around in a graveyard.",
    "I mean...",
    "With such a handsome face",
    "And lovely arms",
    "And pleasing legs",
    "Oh...",
    "They would look so beautiful on me",
    "G I V E  T H E M  T O  M E"
]

const button = document.getElementById('dialogues_bg');
let dialogue = document.getElementById('dialogues_text');
const name = document.getElementById('name');
const picture = document.getElementById('pp_Sally');

console.log(dialogue.length);
button.addEventListener('click', function() {
    dialogue_index++;
    console.log(dialogue_index);

    if (dialogue_index >= dialogues.length) { //not working
        for (let index = 0; index < 5; index++) {
            button.style.transition = 'all 1s';
            picture.style.transition = 'all 1s';
            name.style.transition = 'all 1s';
            button.style.opacity = '0';
            picture.style.opacity = '0';
            name.style.display = 'none';
        }
    }
    else {
        dialogue.innerHTML = repliques[replique_index-1];
    }
});

if (game_over) {
    document.body.style.backgroundImage="url('assets/game_over.gif')";
}