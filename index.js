import express from "express";

const app = express();
const port = 9000;
app.use("/",(req,res) => {
    res.json({message: "hello from the world"});
});

app.listen(9000, () => {
    console.log(`starting server on port ${port}`);
});