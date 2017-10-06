const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var productSchema = new Schema({
    name : {type : String,required : true,unique:true},
    money: {type:String},
    id : {type : Number,required : true, unique: true},
    state: {type:String}
})

module.exports = mongoose.model('product', productSchema);