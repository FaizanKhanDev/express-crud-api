import express from 'express';
const router = express.Router();
import StudentController from '../controllers/studentControllers.js';


router.post('/', StudentController.createDoc);
router.get('/', StudentController.getAllDocs);
router.get('/:id', StudentController.getDocById);
router.put('/:id', StudentController.updateDocById);
router.delete('/:id', StudentController.deleteDocById);



export default router