require('dotenv').config();
const express = require('express');
const app = express();
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')
const connectDB = require('./db/connect')
const productsRouter = require('./routes/products')
require('express-async-errors')



app.use(express.json())

app.get('/', (req,res)=> {
    res.send('<h1>store API</h1><a href="/api/v1/products">products route</a>')

})

app.use('/api/v1/products',productsRouter)

app.use(notFoundMiddleware)
app.use(errorMiddleware)
const port = process.env.PORT || 3000

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
              console.log('connected to db');
      app.listen(port, () =>
        console.log(`server is listening on port ${port}`)
      );
    } catch (error) {
      console.log(error);
    }
  };
  
start()