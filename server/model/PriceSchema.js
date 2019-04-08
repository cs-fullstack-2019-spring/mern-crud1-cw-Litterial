var Zangoose=require('mongoose');
var use_schema=Zangoose.Schema;
var PriceModel=new use_schema(
    {
        productID:Number,
        price:Number,
        quantity:Number,
    }
);

module.exports=Zangoose.model("Price",PriceModel);