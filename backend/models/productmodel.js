const mongoose=require('mongoose');
const productSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"please enter product name"],
        trim:true
    },
    description:{
        type:String,
        required:[true,"please provide product description"]
    },
    price:{
        type:Number,
        required:[true,"please enter product price"],
        maxLength:[8,"price cannot 8 exceed charater"]
    },
    rating:
    {
        type:Number,
        default:0
    },
    image:
    [
        {
        public_id:
        {
            type:String,
            required:true
        },
        url:
        {
            type:String,
            required:true
        }}
    ],
    categry:
    {
        type:String,
        required:[true,"please enter product categry"]
    },
    stock:
    {
        type:Number,
        required:[true,"please enter product stock"],
        maxLength:[4,"cannot exceed 4 caracter"],
        default:1
    },
    numofreview:{
        type:Number,
        default:0
    },
    review:
    [
        {
            name:{
                type:String,
                required:true
            },
            rating:
            {
                type:Number,
                required:true,
            },
            comment:
            {
                type:String,
                required:true,
            }
            
        }
    ],
    createAt:
    {
        type:Date,
        default:Date.now
    }
})
module.exports=mongoose.model("product",productSchema);