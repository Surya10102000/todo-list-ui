import express from "express";
import dotenv from "dotenv"
import connectDB from "./db/db.js";
import userRouter from "./routes/userRoute.js"
import taskRouter from "./routes/taskRoute.js"


// appconfig
dotenv.config()
const app = express();
const port = process.env.PORT || 8001

//middlewares
app.use(express.json())

// connectDb
connectDB()

//api endpoints
app.use('/api/user', userRouter )
app.use('/api/task', taskRouter )

app.get("/", (req, res)=>{
    res.send("homepage")
})
//listen
app.listen(port, () => console.log(`Listening to the port ${port}`))