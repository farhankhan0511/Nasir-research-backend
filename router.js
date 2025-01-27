import { Router } from "express";
import { addrec, getrecs } from "./controller.js";

const router=Router()
router.route("/addrec").post(addrec)
router.route("/getrecs").get(getrecs)
export default router