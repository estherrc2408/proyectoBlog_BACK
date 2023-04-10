const {Schema,model } = require("mongoose");
const mongoosePaginate = require('mongoose-paginate');

const ArticleSchema=new Schema({
    
    title: {
        type:String,
        required:true
    },
    extract:{
        type:String,
    },
    // image:{
        
    // }
    description: {
        type:String,
        required:true
    },
    author:{
        type:String,
        default:'anonymous'
    },

})

ArticleSchema.plugin(mongoosePaginate)

module.exports=model("article",ArticleSchema)