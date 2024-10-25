import  express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
const app = express()
const PORT =process.env.PORT || 4000;
dotenv.config();
import cors from "cors";

app.use(cors());
app.use(express.json());

//database connention
const URI =process.env.MongoDBURI
try{
    mongoose.connect(URI)
    console.log("connected to database");
}catch(error){
    console.log("ERROR:", error); 
}


//book Routes
import bookroute from "./routes/bookroute.js";
app.use("/book",bookroute)


//user routes
import userroute from "./routes/userRoute.js"
app.use("/user",userroute)



app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
})