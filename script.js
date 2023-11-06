let game_over = false;
let music = document.getElementById('Sally_singing');

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

let dialogue_index = 0;

const button = document.getElementById('dialogues_bg');
let dialogue = document.getElementById('dialogues_text');
const name = document.getElementById('name');
const picture = document.getElementById('pp_Sally');

let timeOuts = [];
let skip = false;

function clear(){
    for (let j = 0; j < timeOuts.length; j++){
        clearTimeout(timeOuts[j])
    }
}

button.addEventListener('click', function() {
    dialogue.innerHTML = '';
    skip == true ? skip = false : skip = true
    console.log(skip)
    if (dialogue_index < dialogues.length) {
        if (skip == false){
            for (let i = 0; i < dialogues[dialogue_index].length; i++){
                function timeOut () {dialogue.innerHTML += dialogues[dialogue_index].charAt(i)}
                timeOuts.push(setTimeout(timeOut, 50 * i))
            }
            if(music.paused && dialogue_index == 1) {
                music.play();
            }
        }
        else {
            dialogue.innerHTML = dialogues[dialogue_index];
            dialogue_index++;
            clear()
        }
    } else {
        console.log('2');
    }
});

//     if (dialogue_index >= dialogues.length) {
//         for (let index = 0; index < 5; index++) {
//             button.style.transition = 'all 1s';
//             picture.style.transition = 'all 1s';
//             name.style.transition = 'all 1s';
//             button.style.opacity = '0';
//             picture.style.opacity = '0';
//             name.style.display = 'none';
//         }
//     }
//     else {
//         dialogue.innerHTML = dialogues[dialogue_index-1];
//         if(music.paused && dialogue_index == 1) {
//             music.play();
//         }
//     }
// });

if (game_over) {
    document.body.style.backgroundImage="url('assets/game_over.gif')";
}