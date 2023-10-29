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

	// Class attributed to container + span and bone as children of container and then container in section
	containerWord.classList.add("container-word");
	containerWord.appendChild(spanWord);
	containerWord.appendChild(sprite);
	section.appendChild(containerWord);

	// Choose random word to add in span
	const randomWord = Math.floor(Math.random() * horrorWords.length);
	spanWord.textContent = horrorWords[randomWord];
};

//* Creates new section for new words
const loopNewWord = () => {
	sections = Array.from(sectionHTMLCollection);
	sections.forEach((section) => createNewWord(section));
};

// Initiate first word
loopNewWord();

//* Listens if a key is pressed and matches the current first letter of newly created word
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
