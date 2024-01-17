import {request,response} from "express";
import Router from 'express'
import {getTotalRev} from '../controller/select.js'

const router = Router()
router.get("/revenue",getTotalRev);
export{router};
