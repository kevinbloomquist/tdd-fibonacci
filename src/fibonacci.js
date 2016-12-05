/* global define */


    /**
     * @description Calculate any number in the Fibonacci sequence.
     * @param {Number} n The index of the sequence to calculate; zero-based.
     * @returns {Number} the nth element of the Fibonacci sequence.
     */
    // TODO: return definition of `fibonacci` function here
var fibArray = [];
var fibonacci = function(index){
console.log("fibonacci!!!");
	if(typeof(index)!= "number"){
		return "words are not math";
	}else if (index == 1){
		return 1;
	} else if (index ==2) {
		return 1;
	} else if (index<1) {
		return 0;
	}else {
		return (fibonacci(index-2) + fibonacci(index-1));
	}
};

module.exports = fibonacci;
