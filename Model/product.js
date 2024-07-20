const mongoose = require("mongoose");
const { Schema } = mongoose;
//Schema
// this is schema + validations. Validtions are like filter methos for schema that are executed before the doc is saved to DB
const productSchema = new Schema({
    title: {type: String, required : true, unique : true}, // String is shorthand for {type: String} can also be written as title: String
    description: String,
    price: {type: Number, min : [0, "wrong min Price"] },
    discountPercentage: {type: Number, min : [0, "wrong min discount"], max : [50,"wrong max discount"] },
    rating:{type: Number, min : [0, "wrong min rating"], max : [5,"wrong max rating"] },
    brand: {type: String, required : true},
    category: {type: String, required : true},
    thumbnail: {type: String, required : true},
    images: [String],
  });
  
exports.Product = mongoose.model('Product', productSchema);