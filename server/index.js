const express = require("express");
const router = require("./router/router")
const session = require("express-session");
const cookieParser = require("cookie-parser");
require("./db/connection");

const app = express();

app.use(express.json())

app.use(cookieParser());
app.use(session({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
}));


app.use(router);


app.listen(5000, () => {
    console.log(`Server running at port 5000`);
})