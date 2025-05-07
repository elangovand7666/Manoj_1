import {add,view,mailsenter} from "../Controller/LawController.js";
import express from "express";

const router=express.Router();
router.post("/add",add);
router.get("/view",view);
router.post('/sentmail',mailsenter);

export default router;