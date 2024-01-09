require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const encoreRoutes = require("./routes/encore");

const app = express();

app.use(cors());
app.use("/encore", encoreRoutes);

mongoose.connect(process.env.MONG_URI, { dbName: "portfolioBackend" })
    .then(
        app.listen(process.env.PORT, "0.0.0.0", () => { console.log("Started"); })
    )
    .catch(error => console.log(error));
