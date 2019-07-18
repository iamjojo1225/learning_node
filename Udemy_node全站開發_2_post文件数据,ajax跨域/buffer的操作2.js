let buffer = new Buffer('abc\r\ndfasdasd\r\nffccadg');

function bufferSlice(buffer, delimiter) {

	let arr = [];
	let n = 0;

	while(buffer.indexOf(delimiter) !== -1){

		let n = buffer.indexOf(delimiter);
		arr.push(buffer.slice(0, n));
		buffer = buffer.slice(n+delimiter.length);

	}

	arr.push(buffer);

	return arr;
}

console.log(bufferSlice(buffer, '\r\n').map(b=>b.toString()));
