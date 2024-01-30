import { useState } from "react";
import { useCreateStudentMutation } from "../services/index.js";
function StudentForm() {
    const [createStudent, res] = useCreateStudentMutation();
    const [student, setStudent] = useState({
        name: 'Khizar',
        age: '25',
        fees: '1251.25'
    });

    const handleAddStudent = async (e) => {
        e.preventDefault();

        try {
            // Call the mutate function to create a new student
            await createStudent(student);
            

            // Clear the form after successful mutation
            setStudent({
                name: '',
                age: '',
                fees: ''
            });
        } catch (error) {
            console.error("Error creating student:", error);
        }
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
