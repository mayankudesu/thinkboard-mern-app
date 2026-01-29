import express from 'express'
import notesRoutes from './routes/notesRoutes.js'
import productsRoutes from './routes/productsRoutes.js'
import { connectDB } from './config/db.js';
import dotenv from 'dotenv'
import rateLimiter from './middleware/rateLimiter.js';

dotenv.config()

const app = express();
const PORT = process.env.PORT || 5001

connectDB()

// middleware 
app.use(express.json()) // This middleware is used to parse JSON bodies: req.body
app.use(rateLimiter)

// custom middleware
// app.use((req, res, next) => {
//    console.log(`Req method is ${req.method} and Req URL is ${req.url}`);
//    next()
// })

app.use('/api/notes', notesRoutes)
app.use('/api/products', productsRoutes)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`)
    })
})
