const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


const mongoURI = 'mongodb://0.0.0.0:27017/quiz'

const connectToMongo = () => {
    mongoose.connect(mongoURI, ()=>{
        console.log('connected to mongo Successfully')
    })
}

module.exports = connectToMongo;