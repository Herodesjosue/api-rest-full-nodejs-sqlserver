import app from "./app.js"

app.listen(app.get("port"),()=>{console.log("Server is running on port 3000")})

app.get("/",(req,res)=>{
    res.send("Hello World")
})