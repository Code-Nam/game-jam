const spanWords = document.querySelectorAll(".spanWords");
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
const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ";
let word = null;

//* function to match letter when key pressed
const matchWord = (event) => {
	if (event.key === word.charAt(0)) {
		// Removes the first letter
		word = word.slice(1);
		spanWords.innerHTML = word;
    // When spanWords empty, fetch new word
		if (spanWords.innerHTML === "") {
			randomWord();
		}
	}
};

//* function to choose a random word in array horrorWords
const randomWord = (element) => { 
  let chosenWord = Math.floor(Math.random() * horrorWords.length);
	word = horrorWords[chosenWord];
	element.innerHTML = word;
};

spanWords.forEach(word => randomWord(word));

document.body.onkeydown = matchWord;
