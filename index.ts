import * as express from 'express';
import * as  bodyParser from 'body-parser';
import mongoose  from 'mongoose';
import userRoutes from './src/routes/userRoutes';

const MONGODB_URI = 'mongodb://localhost:27017/Ts_crud';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

mongoose.connect(MONGODB_URI).then(()=>{
    console.log('connected To Mongodb');
}).catch((err:any)=>{
    console.log(err);
});

app.use('/users',userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});