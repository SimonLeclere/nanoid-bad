var en = require('../locale/en');
var nanoidBad = require('../async/').nanoid(en);
var customAlphabet = require('../async/').customAlphabet(en);

it('default doesnt throw', function () {
    return nanoidBad().then(function(id) {
        expect(typeof id).toEqual('string');
    });
});

it('default doesnt throw when length specified', function () {
    return nanoidBad(10).then(function(id) {
        expect(typeof id).toEqual('string');
    });
});

it('customAlphabet doesnt throw', function () {
    return customAlphabet("1234567abcdef", 10)().then(function(id) {
        expect(typeof id).toEqual('string');
    });
});