import express from 'express';
const router = express.Router();
import { querySpaceX } from '../controllers/spacex.js';

router.get('/', (req, res) => {
	res.send('hi');
});
router.get('/spacex', querySpaceX);

export default router;
