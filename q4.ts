//**************************************Asignment 04*******************************
//                                Student List Organizer

console.log('\n\n\t=================================Student Data===================================');

//   STUDENT DATA
interface Student {
  name: string;
  seniorstudent: boolean;
  completeassignment: boolean;
}
// STUDENT    LIST
let students: Student[] = [
  {
    name: "Saad",
    seniorstudent: false,
    completeassignment: true,
  },
  {
    name: "Bilal",
    seniorstudent: true,
    completeassignment: false,
  },
  { name: "Hadi", seniorstudent: false, completeassignment: false },
];
console.log(students);
