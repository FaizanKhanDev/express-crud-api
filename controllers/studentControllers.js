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
            res.send(result);
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
    static updateDocById = (req,res) => {
        res.send("updateDocById")
    }
    static deleteDocById = (req,res) => {
        res.send("deleteDocById")
    }
}

export default  StudentController