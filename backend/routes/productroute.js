const express=require('express');
const { getallproduct,createproduct, updateproduct } = require('../controller/productcontroller');
const router=express.Router();
router.route("/products").get(getallproduct);
router.route("/products/new").post(createproduct);
router.route("/products/:id").put(updateproduct);
module.exports=router;