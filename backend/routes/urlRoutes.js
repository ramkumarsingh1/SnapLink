import express from 'express'
import { redirect, shortenUrl } from '../controllers/urlControllers.js';

const router = express.Router();

router.post("/shorten",shortenUrl);
router.get("/:shortId",redirect);

export default router;