function isPalindrome(word) {
  // Write your algorithm here
}

 /* 
  Add your pseudocode here
/* 
  that means if the word is the same as the word in reverse, I should return true.
  
  reverse the input string
  if the input is the same as the reversed input
    return true
  else
    return false
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs

function reverse(word) {
  // Write your algorithm here
  return word.split("").reverse().join("");
}


function isPalindrome(word) {
  const reversedWord = reverse(word);
  return word === reversedWord; 
}

if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  }

  module.exports = isPalindrome;

