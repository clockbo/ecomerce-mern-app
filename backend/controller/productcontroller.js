const Product=require("../models/productmodel");


// create  product admin
exports.createproduct = async(req,res,next)=>
{
    const product=await Product.create(req.body);
    res.status(201).json({success:true,product});
}

exports.updateproduct=async(req,res,next)=>
{
    let product=await Product.findById(req.Params.id);
    if(!product)
    {
        return   res.status(500).json({
            success:false,
            message:"product is not abiavle in database"
        })
    }
    product=await Product.findByIdAndUpdate(req,Params.id,req.body,{
        new:true,
        runValidators:true,
        useFindAndModify:false
    });
    res.status(200).json({success:true,product});

}
// get all products
exports.getallproduct = async(req,res)=>
{
    const products= await Product.find();
res.status(200).json({success:true,products});
};