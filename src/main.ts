import "./style.css"
import Student from "./classes/student.js"

const martin = new Student("Martin", "Pedraza", 43)
const fefo = new Student("Fefo", "Lundock", 31)

console.log(martin.sayHi())
console.log(fefo.sayHi())

martin.anotherName = "gaucho"

martin.newAge = 12

console.log(martin.sayHi())
