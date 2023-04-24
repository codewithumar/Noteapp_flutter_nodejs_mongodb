const app =require('./app');
const db =require('./config/db');

const UserModel=require('./models/user.model');

const port=3001;

app.get('/',(req,res)=>{
    res.send("hello world")
});

app.listen(port,()=>{
    console.log(`Server is running at port ${port}...!`);
});