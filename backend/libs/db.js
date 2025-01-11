import mongoose from "mongoose";

const DbCon=async()=>{
    try {
        mongoose.connect("mongodb://127.0.0.1:27017/E-Com-Crud")
        console.log('Mongodb is connected')
        
    } catch (error) {
        console.log("Error in mongodb connection",error)
    }
}
export default DbCon