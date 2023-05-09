import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

import connectDB from './mongo/connect.js';
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));

app.use('/api/users', userRouter);
app.use('/api/properties', propertyRouter);

const startServer = async () => {
    try {
        connectDB(process.env.MONGODB_URL);

        app.listen(8080, () => console.log('server started on 8080'))
    } catch (err) {
        console.log(err);
    }
}

startServer();