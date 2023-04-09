const {Schema,model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const ArticleSchema=new Schema({
    title: {
        type:String,
        required:true
    },
    description: {
        type:String,
        required:true
    }
    // genero:{
    //     type:String,
    //     required:true,
    // },
    // fecha:{
    //     type:Date,
    //     default:Date.now
    // }
})

ArticleSchema.plugin(mongoosePaginate)

module.exports=model("article",ArticleSchema)