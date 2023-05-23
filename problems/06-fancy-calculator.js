// Your code here
const Calculator = require('./02-calculator');

class FancyCalculator extends Calculator{
	constructor(total = 0){
		super(total =0)
	}

	setTotal(newTotal){
		this.total = newTotal;
		return this.total;
	}

	modulo(num){
		this.total %= num;
		return this.total;
	}

	squared(){
		this.total **= 2 ;
		return this.total;
	}
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = FancyCalculator;
} catch {
	module.exports = null;
}
