import express from 'express';

// Controllers
import { ElementController } from './controllers/elementController.js';
import { QuestionElementController } from './controllers/questionElementController.js';
import { QuestionController } from './controllers/questionController.js';
import { SystemController } from './controllers/systemController.js';

const router = express.Router();
const elementController = new ElementController();
const questionElementController = new QuestionElementController();
const questionController = new QuestionController();
const systemController = new SystemController();

// systemController
router.get('/', systemController.index);
router.get('/manage/:id?', systemController.manage);
router.post('/system/create', systemController.create);
router.delete('/system/delete/:id', systemController.delete);
router.get('/system/get/:id?', systemController.get);
router.get('/system/:id?', systemController.run);

// elementController
router.get('/element/:id?', elementController.index);

// questionController
router.get('/all', questionController.getAll);
router.post('/set', questionController.set);

export { router };