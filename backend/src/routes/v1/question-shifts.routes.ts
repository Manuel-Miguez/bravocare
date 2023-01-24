import { Router } from 'express';
import * as controller from '../../controllers/question-shifts.controller';

const router = Router();

router.get('/', controller.getQuestionShifts);
router.get('/compare', controller.compareShifts);
export default router;
