import { useGetAllStudentsListQuery } from "../services";

function StudentList() {
    const { data, error, isLoading } = useGetAllStudentsListQuery();
    const editStudent = (student) => {
        console.log(student);
    }
    return (    
        <div>
            <ul>
                {isLoading && <p>Loading...</p>}
                {error && <p>Error: {error.message}</p>}
                {data &&
                    data.map((student) => (
                        <div key={student._id}>
                            <h2>Name: {student.name}</h2>
                            <li>Age: {student.age}</li>
                            <li>Fees: ${parseFloat(student.fees.$numberDecimal).toFixed(2)}</li>
                            <button onClick={() => { editStudent(student) } }>Edit</button>
                            <button onClick={() => { alert("Are you sure you want to delete?"); }}>Delete</button>
                            <hr />
                            <br />
                        </div>
                    ))}
            </ul>
        </div>
    );
}

export default StudentList;
