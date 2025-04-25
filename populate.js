require('dotenv').config()
const connectDB = require('./db/connect')
const Product = require('./models/product')
const jsonProducts = require('./products.json')

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL)
        await Product.deleteMany() // Clear existing products
        await Product.create(jsonProducts) // Populate with new products
        console.log('Success!')
    } catch (error) {
        console.log(error)
    }
}
start()
// This script connects to the MongoDB database, clears any existing products, and populates it with new products from the JSON file.