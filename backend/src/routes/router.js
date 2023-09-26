import { Router } from "express";
import { getMessages,postMessage } from "../controllers/messages.js";


const router = Router();

router.get('/messages', getMessages);
router.post('/messages', postMessage);

export default router;