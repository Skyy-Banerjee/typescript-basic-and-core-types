
//For ex, an utility function that generates error objects/ throws error
function generateError(message: string, code: number):never {
	throw { message: message, errCode: code };
}
//It never returns a value as intended, it crashes/stops that part of the script.
//If not explicitly defined, TS infers it as 'void'.
//Another use case: fx throwing infinite loops

generateError(`An error occurred!`,500);