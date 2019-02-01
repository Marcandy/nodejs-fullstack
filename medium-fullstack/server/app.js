const express = require("express")
const routes = require('./routes/')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cloudinary = require('cloudinary')


const app = express();
const router = express.Router();
const url = process.env.MONGODB_URI || "mongodb://localhost:27017/medium";


cloudinary.config({
    cloud_name: 'TEST1',
    api_key: 'TEST2',
    api_secret: 'TEST3'
});

try {
    mongoose.connect(url, {
        // useMon
    })
} catch (error) {
    //
}

let port = 5000 || process.env.port;

routes(router);

app.use(cors());
app.use(bodyParser.json());
app.use(helmet());

app.use('/api', router);

app.listen(port, ()=> {
    console.log(`Server start at ${port}`)
})