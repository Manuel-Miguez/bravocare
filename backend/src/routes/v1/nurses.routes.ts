import { Router } from 'express';
import * as controller from '../../controllers/nurses.controller';

const router = Router();

router.get('/available-to-hire', controller.getAvailableHireJobs);
router.get('/:nurse/coworkers', controller.getCoworkersByNurse);
export default router;
