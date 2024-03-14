import express from "express";
import "dotenv/config"
import connectDB from "./config/DBConnect";
import AuthRoutes from "./routes/AuthRoutes";
import cors from "cors";
const app = express();

const PORT = process.env.PORT || 4000; 

app.set('port',PORT);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cors());
connectDB();


app.use("/api/auth",AuthRoutes);

app.listen(app.get('port'),()=>{
      console.log('server in port ' + app.get('port'));
})
    