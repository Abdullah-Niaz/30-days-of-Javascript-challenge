// write a program that uses switch case statements to dertermine grade(A,B,C,D,E,F) based on the score

var score = 90;
var grade;

if (score > 90) {
    grade = 'A';
} else if (score > 80) {
    grade = 'B';
} else if (score > 70) {
    grade = 'C';
} else if (score > 60) {
    grade = 'D';
} else if (score > 50) {
    grade = 'E';
} else {
    grade = 'F';
}

switch (grade) {
    case 'A':
        console.log("A Grade");
        break;
    case 'B':
        console.log("B Grade");
        break;
    case 'C':
        console.log("C Grade");
        break;
    case 'D':
        console.log("D Grade");
        break;
    case 'E':
        console.log("E Grade");
        break;
    case 'F':
        console.log("F Grade");
        break;
    default:
        console.log("Invalid Score");
        break;
}
