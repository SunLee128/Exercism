/* eslint-disable no-unused-vars */
//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let trimed = message.trim()
  let sayingOnlyNumbers = (/[a-z]/i.exec(message) === null)
  let shouting = (message === message.toUpperCase() && !sayingOnlyNumbers)
  let asking = (trimed[trimed.length-1] === "?")
  let isSilent = (trimed === '')

  if (shouting && asking){
    return 'Calm down, I know what I\'m doing!'
  }
  if (shouting && !sayingOnlyNumbers){
    return 'Whoa, chill out!'
  }
  if (asking){
    return 'Sure.'
  }
  if (isSilent) {
    return 'Fine. Be that way!'
  }
  else {
    return 'Whatever.' 
  }
};



