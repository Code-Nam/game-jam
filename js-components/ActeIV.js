const body = document.querySelector('body')
const randomWord = document.querySelector('#randomWord')
let word = 'random'

const matchWord = (event) => {
  const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUWXYZ'
  if (event.key === word.charAt(0)) {
    console.log(event.key)
    word = word.slice(1)
    console.log(word)
    randomWord.innerHTML = word
  }
}

randomWord.innerHTML = word
body.addEventListener('keyup', matchWord)