const express = require("express");
const cors = require("cors");

const ApiError = require("./app/api-error");

const app = express();

const contactsRouter = require("./app/routes/contact.route");


app.use(cors());
app.use(express.json());

app.get("/",(req,res)=>{
    res.json({message:"Welcome to contact book application."});
});
app.use("/api/contacts", contactsRouter);

// handle 404 response
app.use((req, res, next) => {
   
    return next(new ApiError(404, "Resource not found"));
});
    // define error-handling middleware last, after other app.use() and routes calls
app.use((err, req, res, next) => {

    return res.status(error.statusCode || 500).json({
        message: error.message || "Internal Server Error",
    });
});

module.exports =app;