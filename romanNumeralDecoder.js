// Convert individual Roman numerals into their corresponding numeric value
// Set rules for when to add and subtract
// Return a total

function romanNumeralDecoder(romanNumeral) {
    // this object is where we define each correlating value of each roman numeral. Each key is a roman numeral and it's value is the integer.
    const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500
	};
    
    // decodedValue is a variable which gets updated after passing through each index inside the for-loop.
	let decodedValue = 0;

    // "i" is set to zero in order to start at the zero index, it's going to increase by 1 so that it evaluates at each index. The for-loop will end when i is less then the length of the romanNUmeral string. The reason for setting i as less than the length of the romanNumeral is because we want the for loop to stop before reaching "undefined". The reason for this is that the index starts at 0 and the length starts 1.
	for (let i = 0; i < romanNumeral.length; i++) {

    //In the the 1st loop the romanNumeral at i = 0, is the value of the 1st index in the string. In this instance we're calling "IV" and the zero index is "I". The for loop will return the value of romanMap['I'] = 1. 
    //In the 2nd loop the romanNumeral at i = 1, is the value of the 2nd index in the string, in this isntance the for-loop returns romanMap['V'] = 5. 
    // In the if statment romanMap['I'] is less then romanMap['V'] then the decodedValue needs to be updated to the greater value minus the smaller value, which in this case romanMap['V'] - romanMap['I'] is 4 and the decodedValue is assigned a new value of 4.
    // The else statment allows the decodedValue to be updated to romanMap[] in the case that the romanMap[romanNumeral[i+1]] being less than the romanMap[romanNumeral[i]]
		if (romanMap[romanNumeral[i]] < romanMap[romanNumeral[i + 1]]) {
            // console.log ('if romanMap : ' + romanMap[romanNumeral[i + 1]])

            decodedValue += romanMap[romanNumeral[i + 1]] - romanMap[romanNumeral[i]];
            // console.log('if decodedValue : ' + decodedValue)
            return decodedValue;
            // break
            }   
            else  if (romanMap[romanNumeral[i]] >= romanMap[romanNumeral[i + 1]]) {
            // console.log('else if romanMap : ' + romanMap[romanNumeral[i + 1]])

			  decodedValue += romanMap[romanNumeral[i]]
            // console.log('elseif decodedValue :' + decodedValue)
            }
            else {
                decodedValue += romanMap[romanNumeral[i]]
            //   console.log('else decodedValue :' + decodedValue)
            }
	}
	return decodedValue;
}

console.log('IXX :' + romanNumeralDecoder("IXX"))

console.log(romanNumeralDecoder("III") === 3);
