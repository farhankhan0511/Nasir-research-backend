import mongoose from "mongoose"

export const DBConnect=async()=>{
try {
      console.log(`${process.env.MONGODB_URI}/nasir_research`)
        const Connection=await mongoose.connect(`${process.env.MONGODB_URI}/nasir_research`)
        console.log(`${Connection.connection.host}`)
    }
 catch (error) {
   console.error("Error Connecting to the mogodb server",error);
   process.exit(1);
}
}

