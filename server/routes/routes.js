import express from "express";
import { userSingUp ,userLogin} from "../controller/user-controller.js";
import { getProducts ,getProductDetails} from "../controller/product-controller.js";
import { addPaymentGetway } from "../controller/payment-controller.js";

const router=express.Router();

router.post("/singup",userSingUp);
router.post("/login",userLogin);
router.get("/products",getProducts);
router.get("/products/:id",getProductDetails);
router.post("/payment",addPaymentGetway);


export default router;