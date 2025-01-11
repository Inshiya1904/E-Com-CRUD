import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'


import cookieParser from 'cookie-parser'
import DbCon from './libs/db.js'
import AuthRoutes from './routes/Auth.js'
import ProductRoutes from './routes/Products.js'
import path from 'path';


dotenv.config()
const PORT=process.env.PORT
const app=express()

DbCon()

const _dirname = path.resolve();
console.log(_dirname)
app.use(cors({
    credentials: true,
    // origin: 'http://localhost:5173'  // Replace with your frontend URL
     origin: 'https://e-commerce-app-vheb.onrender.com'
}));

app.use(cookieParser())
app.use(express.json())
app.use('/auth',AuthRoutes)
app.use('/product',ProductRoutes)

// app.get('/',(req,res)=>{
//     res.send('hello from backend')
// })

app.use(express.static(path.join(_dirname, "/frontend/dist")));
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
});

app.listen(PORT,()=>{
    console.log(`App is ruuning on Port ${PORT}`)
})




