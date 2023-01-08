import StudentInterface from '../classes/student.js'
class Student implements StudentInterface {
	constructor(
		private first_name: string,
		private last_name: string,
		private age: number
	) {}
	sayHi(): string {
		return `Hi my name is ${this.first_name} ${this.last_name}. I'm ${this.age} years old`
	}
	setName(newName: string): void {
		this.first_name = newName
	}
}

export default Student