import { Router } from 'express';
import questionShiftsRoutes from './question-shifts.routes';
import jobsRoutes from './jobs.routes';
import nursesRoutes from './nurses.routes';

const router = Router();

router.use('/question-shifts', questionShiftsRoutes);
router.use('/jobs', jobsRoutes);
router.use('/nurses', nursesRoutes);

export default router;
