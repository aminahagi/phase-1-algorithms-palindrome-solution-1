function isPalindrome(word) {
  // Write your algorithm here
}
 
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
/* 
  Add your pseudocode here
*/
//we need to split the words given
//we need reverse
//we need to join
//return the code and find out whether they are palindrome or not a palindrome 
/*

  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
  }

  module.exports = isPalindrome;

