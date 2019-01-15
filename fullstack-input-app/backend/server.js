const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const logger = require("morgan");
const Data = require("./data");

const API_PORT = 3001;
const app = express();
const router = express.Router();

const dbRoute = "mongodb://marcandy:fullstack-test5@ds157574.mlab.com:57574/node-fullstack";

mongoose.connect(
    dbRoute,
    { useNewUrlParser: true }
);

let db = mongoose.connection;

db.once("open", () => console.log("connected to the database"));

db.on("error", console.error.bind(console, "MongoDB connection error"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger("dev"));


// router get method - get all data

router.get("/getData", (req, res) => {
    Data.find((err, data) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: data });
    });
});

// post method -

router.post("/updateData", (req, res) => {
    const { id, update } = req.body;

    Data.findOneUpdate((id, update, err) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

// delete method

router.delete("/deleteData", (req, res) => {
    const { id } = req.body;
    Data.findOneAndDelete(id, err => {
        if (err) return res.send(err);
        return res.json({ success: true });
    });
});


// post method

router.post("/putData", (req, res) => {
    let data = new Data();
    const { id, message } = req.body;

    if((!id && id !== 0) || !message) {
        return res.json({
            success: false,
            error: "INVALID INPUTS"
        });
    }

    data.message = message;
    data.id = id;

    data.save( err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

//api
app.use("/api", router);


//listen
app.listen(API_PORT, () => console.log(`LISTENING ON PORT ${API_PORT}`));
