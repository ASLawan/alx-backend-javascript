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

