import mongoose from "mongoose"

mongoose.set('strictQuery', false);
export const connectDb =async()=>{
        try{
                const conn = await mongoose.connect("mongodb+srv://shivanimern1:shivani@cluster0.ke79w6b.mongodb.net/myfirstmern?retryWrites=true&w=majority",{
                        
                      
                })
               
                console.log(`MongoDB connected : ${conn.connection.host}`)
        }
catch(err){
        console.error(`Error: ${err.message}`)
        process.exit(1)
}
}