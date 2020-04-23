// Write a function reverseWords() that takes a message as an array of characters and reverses the order of the words

function reverseWords(message) {
  const solvedArray = []
  let tempString = ''

  message.forEach((char, i) => {
    const letters = /^[A-Za-z]/
    if (i === message.length - 1) {
      tempString += char
      solvedArray.unshift(...tempString)
    } else if (char.match(letters)) {
      tempString += char
    } else {
      solvedArray.unshift(...tempString)
      solvedArray.unshift(char)
      tempString = ''
    }
  })
  return solvedArray
}

const message = ['c', 'a', 'k', 'e', ' ',
  'p', 'o', 'u', 'n', 'd', ' ',
  's', 't', 'e', 'a', 'l']

console.log(reverseWords(message).join(''))