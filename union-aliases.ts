type Combinable = number | string; //Any name/type we want apart from JS reserved kws, ex- Date;
type ConversionAlias = 'as-number' | 'as-txt';

function combine(
	input1: Combinable,
	input2: Combinable,
	resultType: ConversionAlias, //! literal types combined with Union Types
) {
	let result; //because of scoping
	if (
		(typeof input1 === 'number' && typeof input2 === 'number') ||
		resultType === 'as-number'
	) {
		result = +input1 + +input2;
	} else {
		result = input1.toString() + input2.toString();
	}

	// if(resultType === 'as-number') {
	//     return +result;
	// }else{
	//     return result.toString();
	// }

	return result;
}

const combinedAges = combine(28, 33, 'as-number');
const combinedNames = combine('Skyy', 'Max', 'as-txt');
const combedStringAges = combine('28', '33', 'as-number');
console.log(combinedAges, combinedNames, combedStringAges);

//op- 61 'SkyyMax' 61
