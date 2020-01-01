//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const secretHandshake = (number) => {
  if(isNaN(number)) throw new Error('Handshake must be a number');
  
  let result = [];
  let reverse = (number & 16) ;
  if (number & 1) result.push("wink");
  if (number & 2) result.push("double blink");
  if (number & 4) result.push("close your eyes");
  if (number & 8) result.push("jump");
  if(reverse) {
    return result.reverse() 
  } else {
    return result;
  }
};

// 1 = wink
// 10 = double blink
// 100 = close your eyes
// 1000 = jump


// 10000 = Reverse the order of the operations in the secret handshake