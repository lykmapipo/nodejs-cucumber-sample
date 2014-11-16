/**
 * calculate step
 */

module.exports = function() {
    var self = this;

    this.Given(/^the input "([^"]*)"$/, function(input, callback) {
        self.expression = input;
        callback();
    });

    this.When(/^the calculator is run$/, function(callback) {
        self.result = self.calculator.run(self.expression);
        callback();
    });

    this.Then(/^the output should be "([^"]*)"$/, function(output, callback) {
        self.expect(Number(self.result)).to.equal(Number(output));
        callback();
    });
}