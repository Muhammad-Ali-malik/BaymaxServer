require('dotenv').config()

const express = require('express')
const connectDB = require('./config/connect')
const notificationRoutes = require('./routes/notification')


const app = express()
app.use(express.json())

app.use('/notifications' , notificationRoutes)

const start = async()=>{
    try{
        await connectDB(process.env.MONGO_URI)
            app.listen(process.env.PORT || 3000, ()=> console.log('server is running')
            )
    }catch(error){
        console.log('error');
        
    }
}

start()