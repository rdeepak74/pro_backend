// require('dotenv').config({path: './.env'}) this can be also use
import dotenv from "dotenv";  // This is used for maintaining code format (Module format) also make a changes in package.json file for experimental command write.
import connectDB from "./db/index.js";


dotenv.config({
    path: './.env'
})


connectDB()























// import express from "express";
// const app = express()
// ;(async ()=> {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_Name}`)
//         app.on("error", (error)=>{
//             console.log("ERROR: ", error);
//             throw error
//         })

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`);
//         })
//     } catch (error) {
//         console.error("ERROR: ", error)
//         throw error
//     }
// })()