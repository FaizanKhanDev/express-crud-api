import studentModel from "../models/Student.js";



class StudentController {
    static createDoc = async (req, res)  =>{
        try {
            const { name, age, fees } = req.body;
            const result = await studentModel({
                name: name,
                age: age,
                fees: fees
            });
            await result.save();
            res.status(201).send(result);
        }catch(err){
            console.log(err);
        }
    }

    static getAllDocs = async (req,res) => {
        try {
            const result =  await studentModel.find();
                res.send(result )
        }catch(err){
            console.log(err);
        }
    }   

    static getDocById = async (req,res) => {
            try {
                const result =  await studentModel.findById(req.params.id);
                    res.send(result)
            } catch(err){
                console.log(err);
            }
    }
    static updateDocById = async (req,res) => {

        try {
            const findStudent = await studentModel.findByIdAndUpdate(req.params.id,  req.body);
            res.send(findStudent)
        } catch (error) {
            console.log(error);
            
        }
    }
    static deleteDocById = async (req,res) => {
        try {
            const deleteStudent = await studentModel.findByIdAndDelete(req.params.id);
            res.send(deleteStudent)
        } catch (error) {
            console.log(error);
            
        }

    }
}

export default  StudentController