/// <reference path="./Subject.ts" />
/// <reference path="./Teacher.ts" />

namespace Subjects {
	export interface Teacher {
		experienceTeacherReact?: number;
	}

	export class React extends Subject {
		getRequirements(): string {
			return "Here is the list of requirements for React";
		}

		getAvailableTeacher(): string {
			if (this.teacher.experienceTeachingReact > 0) {
				return "Availble Teacher: $(this.teacher.firstName)";
			} else {
				return "No available teacher";
			}
		}
	}
}
