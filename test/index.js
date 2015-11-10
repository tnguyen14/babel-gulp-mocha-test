import {assert} from 'chai';

suite('endsWith', function () {
	test('should end with "world"', function () {
		assert.ok('hello world'.endsWith('world'));
	});
});
