import express from 'express'
import { redirect, shortenUrl } from '../controllers/urlControllers';

const router = express.Router();

router.post("/shorten",shortenUrl);
router.get(":/shortID",redirect);

export default router;