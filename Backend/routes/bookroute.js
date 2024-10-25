import express from "express"
import {getBook} from "../controller/bookcontroller.js"
const router = express.Router()

router.get("/",getBook)

export default router;


//localhost:4000/book