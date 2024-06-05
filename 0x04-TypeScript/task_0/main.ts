#!/usr/bin/env node

// Define student interface

interface Student {
	firstName: string;
	lastname: string;
	age: number;
	location: string;
}

// student instances

const student1: Student = {
	firstname: "Lawan",
	lastName: "Austin",
	age: 32,
	location: "Limbe"
};

const student2: Student = {
	firstName: "Laiven",
	lastName: "Desmon",
	age: 30,
	location: "Buea"
};

//Array containing the two students

const studentsList: Student[] = [student1, student2];

// function that renders student data in tabular format
function createTable(students: Student[]): void {
	const table: HTMLTableElement = document.createElement("table");
	const tbody: HTMLTableSectionElement = document.createElement("tbody");

	students.forEach((student) => {
		const row: HTMLTableRowElement = document.createElement("tr");
		const firstNameCell: HTMLTableCellElement = document.createElement("td");
		const locationCell: HTMLTableCellElement = document.createElement("td");

		firstNameCell.textContent = student.firstName;
		locationCell.textContent = student.location;

		row.appendChild(firstNameCell);
		row.appendChild(locationCell);
		tbody.appendChild(row);
	});

	table.appendChild(tbody);
	document.body.appendChild(table);
}

//Render the table when window loads

window.onload = () => {
	createTable(studensList);
}

