#!/usr/bin/env node

//Define Director interface
interface DirectorInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workDirectorTasks(): string;
}

//Define Teacher interface
interface TeacherInterface {
	workFromHome(): string;
	getCoffeeBreak(): string;
	workTeacherTasks(): string;
}

//Define Director class that implements DirectorInterface
class Director implements DirectorInterface {
	workFromHome(): string {
		return "Working from Home";
	}

	getCoffeeBreak(): string {
		return "Getting a coffee break";
	}

	workDirectorTasks(): string {
		return "Getting to director tasks";
	}
}

//Define Teacher class that implements TeacherInterface
class Teacher implements TeacherInterface {
	workFromHome(): string {
		return "Cannot work from home";
	}

	getCoffeeBreak(): string {
		return "Cannot have a break";
	}

	workTeacherTasks(): string {
		return "Getting to work";
	}
}


// createEmployee Function
function createEmployee(salary: number | string): Director | Teacher {
	if (typeof salary === 'number' && salary < 500){
		return new Teacher();
	} else {
		return new Director();
	}
}

// Predicate function
function isDirector(employee: Director | Teacher): employee is Director {
	return (employee as Director).workDirectorTasks !== undefined;
}

// Execute Work function
function executeWork(employee: Director | Teacher): void {
	if (isDirector(employee)){
		console.log(employee.workDirectorTasks());
	} else {
		console.log(employee.workTeacherTasks())
	}
}


// Define the string literal type
type Subjects = "Math" | "History";

// Implement the teachClass function
function teachClass(todayClass: Subjects): string {
	if (todayClass === "Math"){
		return "Teaching Math";
	} else if (todayClass === "History"){
		return "Teaching History";
	} else {
		return "Subject can either be Math or History";
	}
}
