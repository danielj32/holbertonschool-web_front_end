function createClassRoom(numbersOfStudents){
    function studentSeat(seat){
        return () => {
            return seat;
        };
    }
    let student = [];
    for (let ct = 0; ct < numbersOfStudents; ct++){
        student.push(studentSeat(ct+1));
    }
    return student;
}
const classRoom = createClassRoom(10);
