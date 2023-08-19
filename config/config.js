const dotenv=require('dotenv')
const mongoose=require('mongoose')

dotenv.config();

// add your own uri below
const uri =
    process.env.NODE_ENV === 'production'
        ? process.env.MONGO_PROD_DB
        : process.env.NODE_ENV === 'test'
            ? process.env.MONGO_TEST_DB
            : process.env.MONGO_DEV_DB


const connect = async ()=> {
    try {
        //MONGODB CONNECTION
        await mongoose.connect(uri)
    } catch (error) {
        console.log(`Database connection error: ${error}`)
        process.exit(1)
    }
}

module.exports={connect}
