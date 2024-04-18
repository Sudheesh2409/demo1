const mongoose=require("mongoose")
const mongodb =require("mongodb")

const dotEnv =require("dotenv")

dotEnv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    console.log("mongodb is connected")
})
.catch((e)=>{
    console.log("error",e)
})

const newschema = new mongoose.Schema({
    dat:{
        type:String,
        required:true
    }
})

// data={
//     msg:"hello"
// }


const dataModel =mongoose.model("collection",newschema)
// collection.insertMany([data])
 module.exports=dataModel
