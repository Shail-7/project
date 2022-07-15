const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://shail:root@cluster0.cogws3j.mongodb.net/project?retryWrites=true&w=majority")

mongoose.connection.on("connected", (err, res) => {
    if (!err) {
        console.log("Connected");
    }
})

mongoose.connection.on("error", (err) => {
    console.log(err);
})