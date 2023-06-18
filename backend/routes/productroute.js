const express=require('express');
const { getallproduct } = require('../controller/productcontroller');
const router=express.Router();
router.route("/products").get(getallproduct);
module.exports=router;