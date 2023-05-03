import express from 'express';
import {verifyPromoHandler} from '../controllers/promo.controller';
import {verifyPromoSchema} from '../schemas/promo.schema';
import {checkError} from '../middleware/check.errors';
import {AuthMiddleware} from '../middleware/auth.middleware';
import { validate } from '../middlewares/validate.middleware';

const router = express.Router();

router.post('/verify', validate(verifyPromoSchema), AuthMiddleware, checkError(verifyPromoHandler));

export default router;
