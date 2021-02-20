const { describe } = require('mocha')
const { assert } = require('chai')

const numberOperations = {
    powNumber: function (num) {
        return num * num;
    },
    numberChecker: function (input) {
        input = Number(input);

        if (isNaN(input)) {
            throw new Error('The input is not a number!');
        }

        if (input < 100) {
            return 'The number is lower than 100!';
        } else {
            return 'The number is greater or equal to 100!';
        }
    },
    sumArrays: function (array1, array2) {

        const longerArr = array1.length > array2.length ? array1 : array2;
        const rounds = array1.length < array2.length ? array1.length : array2.length;

        const resultArr = [];

        for (let i = 0; i < rounds; i++) {
            resultArr.push(array1[i] + array2[i]);
        }

        resultArr.push(...longerArr.slice(rounds));

        return resultArr
    }
};

describe('Tests', function () {
    it('powNumber', function () {
        assert.equal(numberOperations.powNumber(9), 81)
        assert.equal(numberOperations.powNumber(0), 0)
        assert.equal(numberOperations.powNumber(-5), 25)
    })
    it('numberChecker', function () {
        assert.equal(numberOperations.numberChecker('9'), 'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker('101'), 'The number is greater or equal to 100!')
        assert.equal(numberOperations.numberChecker(9), 'The number is lower than 100!')
        assert.equal(numberOperations.numberChecker(101), 'The number is greater or equal to 100!')
        assert.equal(numberOperations.numberChecker(100), 'The number is greater or equal to 100!')
        assert.throw(() => numberOperations.numberChecker('NotNumber'), 'The input is not a number!')
        assert.throw(() => numberOperations.numberChecker(NaN), 'The input is not a number!')
    })
    it('sumArrays', function () {
        assert.deepEqual(numberOperations.sumArrays([1, 2, 4, 5], [1, 2, 3, 4]), [2, 4, 7, 9])
        assert.deepEqual(numberOperations.sumArrays([1, 2, 4, 5, 6], [1, 2, 3, 4]), [2, 4, 7, 9, 6])
        assert.deepEqual(numberOperations.sumArrays([1, 2, 4, 5, 6], [1, 2, 3, 4, 6, 7]), [2, 4, 7, 9, 12, 7])
        assert.deepEqual(numberOperations.sumArrays([], [1, 2, 3, 4, 6, 7]), [1, 2, 3, 4, 6, 7])
        assert.deepEqual(numberOperations.sumArrays([1, 2, 4, 5, 6], []), [1, 2, 4, 5, 6])
        assert.deepEqual(numberOperations.sumArrays([], []), [])
    })
})