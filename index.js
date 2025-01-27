import 'dotenv/config'
import app from "./app.js";
import { DBConnect } from "./db.js";


DBConnect()
.then(
   ()=>{
    app.listen(process.env.PORT||3000,()=>{
        console.log("running")
    })
   }
)
.catch((err)=>{console.log("Mongodb not connected",err)})