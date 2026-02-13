const classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"];

console.log(classRoster.toString());

console.log(classRoster);

classRoster.push("Fiona");
classRoster.push("Nancy");

console.log(classRoster);

console.log(classRoster.shift());

console.log(classRoster);

console.log(classRoster.length);

const classInfo = {
  className: "ENSF381: Full-Stack Web Development",
  instructor: "Dr. Smith",
  students: classRoster,
  details: {
    semester: "Winter",
    year: 2025,
  },
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];

classInfo.instructor = "Dr. Abdellatif";

console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);

console.log(classInfo.details.semester);

console.log(classInfo);

const className = classInfo.className;
const students = classInfo.students;
console.log(className);
console.log(students);

const semester = classInfo.details.semester;
const year = classInfo.details.year;
console.log(semester);
console.log(year);

const student1 = classRoster[0];
const student2 = classRoster[1];
const remainingStudents = classRoster.slice(2);
console.log(student1);
console.log(student2);
console.log(remainingStudents);