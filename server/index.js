const express=require("express")
const cors=require("cors")
const bodyParser=require("body-parser")
const collection =require("./mongo")

const app=express()
app.use(express.json)
app.use(express.urlencoded({extended:true}))

app.use(cors())
app.use(bodyParser.json())


// app.get("/",cors(),(req,res)=>{
    
// })

app.post("/api/data/",async(req,res)=>{
    // const {msg}=req.body

    

    // await collection.insertMany([data])
    const {info}=req.body
    const data ={
        msg:info
    }
    console.log(info)

     
    // res.json({message:'data received'})
    // res.send(info)
    // res.write(info)
    // req.end()
    await collection.insertMany([data])
    res.status(200)

});
app.listen(4000,()=>{console.log("port is listening in the 3000")})
