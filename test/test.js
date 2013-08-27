var parse = require('../');

testData1 = 'col1, col2, col3\n1234, 1234, 1234\n1235, asdf, fds23';
testData2 = 'col1	col2	col3\n1234	1234	1234\n1235	asdf	fds23';
testData3 = 'col1, col2, col3\n"something, something, dark side", 1234, 1234\n"hello,world", 1345, 245e';

exports['test comma separated'] = function (test) {
	a = parse(testData1);
	
	test.deepEqual(a, 
		[ 
			{ col1: '1234', col2: '1234', col3: '1234' },
			{ col1: '1235', col2: 'asdf', col3: 'fds23' } 
		]
	)
	
	test.done();
}

exports['test tab separated'] = function (test) {
	a = parse(testData2, /\t/gi);
	
	test.deepEqual(a, 
		[ 
			{ col1: '1234', col2: '1234', col3: '1234' },
			{ col1: '1235', col2: 'asdf', col3: 'fds23' } 
		]
	)
	
	test.done();
}

exports['test with text string containing double quotes'] = function (test) {
	a = parse(testData3);

	test.deepEqual(a,
		[
			{ col1 : 'something, something, dark side', col2 : '1234', col3 : '1234' },
			{ col1 : 'hello,world', col2 : '1345', col3 : '245e' }
		]
	);

	test.done();
}
