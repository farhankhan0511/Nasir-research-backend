import express from "express"
import cors from "cors"

const app=express();
app.use(cors({
    origin:process.env.CORS_ORIGIN,
    credentials:true
}))
app.use(express.json({limit:"16kb"}));
app.use(express.urlencoded({limit:"16kb",extended:true}));


import recrouter from "./router.js"
app.use("/rec",recrouter)

export default app