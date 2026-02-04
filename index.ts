import express,{Request,Response} from "express";
const app=express();
const PORT=3000;
app.get("/hello",(req:Request,res:Response)=>{
    res.json({
        message:"hello world"
    })
})

app.listen(PORT,()=>{
    console.log(`server running on ${PORT}`);
});
