import express from "express";
import connectDB  from "./db/connectiondb.js";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";

connectDB(DATABASE_URL);

const app = express();
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})