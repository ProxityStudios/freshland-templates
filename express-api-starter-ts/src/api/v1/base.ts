import express from 'express';
import { MessageResponse } from '../../interfaces/response-interfaces';

const router = express.Router();

router.get<object, MessageResponse>('/', (req, res) => {
	res.status(200);
	res.json({
		message: 'hello human',
		status: 200,
	});
});

export default router;
