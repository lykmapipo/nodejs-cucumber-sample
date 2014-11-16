/**
 * @function
 *
 * simple calculator
 */
var calculator = module.exports = function() {};
/**
 * simple calculate implementation
 * @param  String expression an input expression to evaluate
 * @return String            result of expression evaluation
 */
calculator.prototype.run = function(expression) {
    return eval(expression);
};