import studentModel from "../models/Student.js";



class StudentController {
    static createDoc = (req, res)  =>{
        res.send("createDoc")
    }

    static getAllDocs = (req,res) => {
        res.send("getAllDocs")
    }

    static getDocById = (req,res) => {
        res.send("getDocById")
    }
    static updateDocById = (req,res) => {
        res.send("updateDocById")
    }
    static deleteDocById = (req,res) => {
        res.send("deleteDocById")
    }
}

export default  StudentController