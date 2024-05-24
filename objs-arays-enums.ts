// const ADMIN = 0;
// const READ_ONLY =1;
// const AUTHOR = 2;

enum Role {
	ADMIN = 5,
	READ_ONLY,
	AUTHOR,
}
//! Behind the scenes/ By default => READ_ONLY = 7, AUTHOR = 7;
//! We can use any data type and even mix em up in Enums!
const person = {
	name: 'Skyy',
	age: 28,
	hobbies: ['music🎸', 'reading📖', 'walking🚶🏻‍♂️'],
	role: Role.ADMIN,
};

let favActivities: string[];
favActivities = ['music'];

if (person.role === Role.ADMIN) {
	console.log('is Admin!');
}
// O/P = is Admin!