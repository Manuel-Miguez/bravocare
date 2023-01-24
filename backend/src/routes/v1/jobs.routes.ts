import { Router } from 'express';
import * as controller from '../../controllers/jobs.controller';

const router = Router();

router.get('/remaining', controller.getRemainingJobs);
export default router;
