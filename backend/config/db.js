const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb+srv://testuser:amPU2wDe2w7CvHk@cluster0.ee3deh4.mongodb.net/?retryWrites=true&w=majority').on('open',()=>{
    console.log('Mongo Db connected');
}).on('error',()=>{
    console.log('Mongo Db Error');
});

module.exports= conn;