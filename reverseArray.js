// Write a function that takes an array of characters and reverses the letters 

function reverseArray(array) {
  // return array.reverse()
  const swappedArray = []

  array.forEach((char, i) => {
    swappedArray.push(array[array.length - (i + 1)])
  })
  return swappedArray
}

console.log(reverseArray(['a', 'b', 'c', 'd']))