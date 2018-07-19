//<reference path="../src/js/Calculator.js" />

function calculateExpression(expression)
{
    return Calculator
                .setExpression(expression)
                .calculate();
}
QUnit.module( "CalculatorQunitTEST.js", function() { 
QUnit.test('Simple addition', function (assert)
{
    var result = calculateExpression('2 2 +');
    assert.equal(result, 4, '2 2 + = 4');
});

QUnit.test('Simple multiplication', function (assert)
{
    var result = calculateExpression('2 2 *');
    assert.equal(result, 4, '2 2 * = 4');
});

QUnit.test('Simple subtraction',  function (assert)
{
    var result = calculateExpression('2 2 -');
    assert.equal(result, 0, '2 2 - = 0');
});

QUnit.test('Advanced subtraction', function (assert)
{
    var result = calculateExpression('2 1 -');
    assert.equal(result, 1, '2 1 - = 1');
});

QUnit.test('Simple division',  function (assert)
{
    var result = calculateExpression('2 2 /');
    assert.equal(result, 1, '2 2 / = 1');
});

QUnit.test('Advanced expression',  function (assert)
{
    var result = calculateExpression('3 6 * 5 + 3 - 2 /');
    assert.equal(result, 10, '3 6 * 5 + 3 - 2 / = 10');
});

QUnit.test('Advanced-Master expression',  function (assert)
{
    var result = calculateExpression('5 6 3 + * 2 /');
    assert.equal(result, 22.5, '5 6 3 + * 2 / = 22.5');
});
});