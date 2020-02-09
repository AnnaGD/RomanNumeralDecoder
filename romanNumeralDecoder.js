function romanNumeralDecoder(romanNumeral) {
	const romanMap = {
		I: 1,
		V: 5,
		X: 10,
		L: 50,
		C: 100,
		D: 500
	};

	let decodedValue = 0;

	for (let i = 0; i < romanNumeral.length; i++) {
		if (romanMap[romanNumeral[i]] < romanMap[romanNumeral[i + 1]]) {
			decodedValue += romanMap[romanNumeral[i + 1]] - romanMap[romanNumeral[i]];
			}   else {
			  decodedValue +=romanMap [romanNumeral[i]]
		}
	}
	return decodedValue;
}

console.log(romanNumeralDecoder("III"));

console.log(romanNumeralDecoder("III") === 3);
