import './style.css'
import UserClass from './classes/User.js'

interface User {
	firstName: string
	lastName: string
}
class UserClass {
	constructor(public user: User) {}
	getFullName() {
		return this.user.firstName + ' ' + this.user.lastName
	}
}
const user = new UserClass({
	firstName: 'John',
	lastName: 'Doe',
})
console.log(user.getFullName())
