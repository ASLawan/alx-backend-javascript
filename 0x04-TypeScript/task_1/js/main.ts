#!/usr/bin/env node

//Define a teacher interface

interface Teacher {
	readonly firstName: string;
	readonly lastName: string;
	fullTimeEmployee: boolean;
	yearsOfExperience?: number;
	location: string;
	[key: string]: any;
}


// Define Directors interface that extends Teacher interface
interface Directors extends Teacher {
	numberOfReports: number;
}

// Define printTeacherFunction interface
interface printTeacherFunction {
	(firstName: string, lastName: string): string;
}

// printTeacher function
const printTeacher: printTeacherFunction = (firstName, lastName) => {
	return `${firstName.charAt(0)}. ${lastName}`;
}

// Define interface for the constructor
interface StudentConstructor {
	new (firstName: string, lastNam: string): Student;
}

// Define StudentClass interface
interface Student {
	firstName: string;
	lastName: string;
	workOnHomework(): string;
	displayName(): string;
}

// StudentClass
class StudentClass implements Student {
	firstName: string;
	lastName: string;

	constructor(firstName: string, lastName: string){
		this.firstName = firstName;
		this.lastName = lastName;
	}

	workOnHomework(): string {
		return "Currently working";
	}

	displayName(): string {
		return this.firstName;
	}
}
