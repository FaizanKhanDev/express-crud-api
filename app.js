import express from "express";
import connectDB  from "./db/connectiondb.js";
const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import web from "./routes/web.js";
connectDB(DATABASE_URL);

const app = express();
const port = process.env.PORT || 3000;

app.use('/student', web);
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})