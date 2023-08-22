const express=require("express")
const app=express()
const mongoose = require("mongoose")
const helmet =require("helmet")
const morgon = require("morgan")
const dotenv =require("dotenv")


const userRouter=require("./Routes/authRout")


  const cors = require('cors')
const cookieParser =require("cookie-parser")
mongoose.set('strictQuery', true); 
const bodyParser=require('body-parser')

app.use(bodyParser.urlencoded({ extended: false }))
dotenv.config();
app.use(bodyParser.json())
app.use(cookieParser())
app.use(express.json()) 
app.use(helmet())
app.use(morgon("common"))











app.use(cors( {}));

// app.use(cors(
//     {
//     origin: ['http://localhost:4200'],
//     method: ['GET,PATCH, PUT, POST, DELETE'],
//     credentials: true,
//   }
//   ));


app.use("/api/user",userRouter)

app.get("/api/user/hai",(req,res)=>{
    console.log("hai");
    res.send("hai")
})


mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB!');
});

db.on('disconnected', () => {
  console.log('MongoDB disconnected');
});


app.listen(8000,()=>{
    console.log("backend server is running");
    }) 
    