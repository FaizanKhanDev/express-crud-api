import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import {
  updateName,
  updateAge,
  updateFees,
  selectStudent,
} from "../store/student/index.js";
import { useCreateStudentMutation } from "../services/index.js";

function StudentForm() {
  const [createStudent] = useCreateStudentMutation();
  const dispatch = useDispatch();
  const student = useSelector((state) => state.students.student);

  const handleAddStudent = async (e) => {
    e.preventDefault();

    try {
        console.log("student", JSON.stringify(student));
      let re = await createStudent(student);
      console.log("re", re);

      // Clear the form after successful mutation
      dispatch(updateName(""));
      dispatch(updateAge(""));
      dispatch(updateFees(""));
    } catch (error) {
      console.error("Error creating student:", error);
    }
  };

  return (
    <div>
      <h1>Student Form</h1>
      <form onSubmit={handleAddStudent}>
        <label htmlFor="name">Name:</label> <br />
        <input
          type="text"
          value={student.name}
          onChange={(e) => dispatch(updateName(e.target.value))}
          name="name"
          id="name"
        />
        <br />
        <label htmlFor="age">Age:</label> <br />
        <input
          type="number"
          value={student.age}
          onChange={(e) => dispatch(updateAge(e.target.value))}
          name="age"
          id="age"
        />
        <br />
        <label htmlFor="fees">Fees:</label>
        <br />
        <input
          type="number"
          value={student.fees}
          onChange={(e) => dispatch(updateFees(e.target.value)) }
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