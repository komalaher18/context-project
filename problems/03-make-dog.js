// Your code here
class Dog{
	constructor(name){
		this.name = name;
	}

	static makeJet(){
		return new Dog("Jet");
	}

	changeName(newName){
		this.name = newName;
	}
	speak(word){
		this.word = word
		return `$(this.name} says $(this.word)`
	}
}


/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

try {
	module.exports = Dog;
} catch {
	module.exports = null;
}
