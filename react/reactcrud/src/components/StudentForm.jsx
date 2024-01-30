import { useState } from "react";

function StudentForm() {
    const [student, setStudent] = useState({
        name: '',
        age: '',
        fees: ''
    });

    const handleAddStudent = (e) => {
        e.preventDefault();
        console.log(student);
    }

    return (
        <div>
            <h1>Student Form</h1>
            <form onSubmit={handleAddStudent}>
                <label htmlFor="name">Name:</label> <br />
                <input
                    type="text"
                    value={student.name}
                    onChange={(e) => setStudent({ ...student, name: e.target.value })}
                    name="name"
                    id="name"
                />
                <br />
                <label htmlFor="age">Age:</label> <br />
                <input
                    type="number"
                    value={student.age}
                    onChange={(e) => setStudent({ ...student, age: e.target.value })}
                    name="age"
                    id="age"
                />
                <br />
                <label htmlFor="fees">Fees:</label><br />
                <input
                    type="number"
                    value={student.fees}
                    onChange={(e) => setStudent({ ...student, fees: e.target.value })}
                    name="fees"
                    id="fees"
                />
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default StudentForm;
