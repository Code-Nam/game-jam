const dialogues = [
    'Bon...',
	'Heu.....',
	'On a pas eu le temps..',
	'Donc...'
]

let dialogue_index = 0;

const button = document.querySelector('.dialogues_bg');
let dialogue = document.querySelector('.dialogues_text');
const name = document.querySelector('name');
const picture = document.getElementById('pp_Jack');

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
        }
        else {
            dialogue.innerHTML = dialogues[dialogue_index];
            dialogue_index++;
            clear()
        }
    }

	else {
		button.style.display = "none"
		document.body.style.backgroundColor = "white"
		const img = document.getElementById("pp_Jack")
		img.style.filter = "invert(1)"

		//! Document.getElementByTagName is used to retrieve HTMLcollection
		//! Instead of querySelectorAll which retrieves DOM elements as NodeList which is static
		//! Meaning document.getElementByTagName retrieves DOM elements that are added or removed dynamically
		//! However an HTMLCollection is not an array so it must be converted to use the built-in method forEach
		let sectionHTMLCollection = document.getElementsByTagName("section");
		let sections = Array.from(sectionHTMLCollection);
		const horrorWords = [
			"Terror",
			"Scream",
			"Chainsaw",
			"Darkness",
			"Monster",
			"Demonic",
			"Gore",
			"Cursed",
			"Eerie",
			"Phantom",
		];
		let numberOfSection = 1;

		//* Creates new div with a random word and a pic of bone
		const createNewWord = (section) => {
			section.innerHTML = ""; // Dump empty section
			// Variables for DOM elements
			const containerWord = document.createElement("div");
			const spanWord = document.createElement("span");
			const sprite = document.createElement("img");
			sprite.src = "../img/bone.png";
			sprite.alt = "bone";
			// Class attributed to container + span and bone as children of container and then container in section
			containerWord.classList.add("container-word");
			containerWord.appendChild(spanWord);
			containerWord.appendChild(sprite);
			section.appendChild(containerWord);

			// Choose random word to add in span
			const randomWord = Math.floor(Math.random() * horrorWords.length);
			spanWord.textContent = horrorWords[randomWord];

			// Random position to center of screen
			const sectionWidth = document.body.clientWidth;
			const sectionHeight = document.body.clientHeight;
			const startWidth = Math.round(Math.random() * sectionWidth) + "px";
			const startHeight = Math.round(Math.random() * sectionHeight) + "px";
			document.documentElement.style.setProperty("--start-Width", startWidth);
			document.documentElement.style.setProperty("--start-Height", startHeight);
		};

		//* Creates new section for new words
		const loopNewWord = () => {
			sections = Array.from(sectionHTMLCollection);
			sections.forEach((section) => createNewWord(section));
		};

		// Initiate first word
		loopNewWord();

		//* Listens if a key is pressed and matches the current first letter of each word
		document.body.addEventListener("keydown", (event) => {
			sections = Array.from(sectionHTMLCollection);
			const pressedKey = event.key;

			sections.forEach((section) => {
				const word = section.querySelector("span");
				if (word.textContent.charAt(0) === pressedKey) {
					word.textContent = word.textContent.slice(1);
				}
				// If current word is empty then create new word
				if (word.textContent === "") {
					section.remove();
					// Display new span when a threshold is met
					for (let i = 0; i < numberOfSection; i++) {
						const newSection = document.createElement("section");
						document.body.appendChild(newSection);
					}
					loopNewWord();
				}
			});
		});
	}
})