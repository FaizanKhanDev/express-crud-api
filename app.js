import express from "express";
import connectDB  from "./db/connectiondb.js";
import cors from "cors"; // Import the cors package

const DATABASE_URL = process.env.DATABASE_URL || "mongodb://localhost:27017";
import web from "./routes/web.js";
connectDB(DATABASE_URL);
const app = express();
app.use(express.json());
const port = process.env.PORT || 5000;
// Use cors middleware to enable CORS
app.use(cors());
app.use('/student', web);
app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
})