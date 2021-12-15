var express = require("express");
var app = express();

info_1 = {
    first_name: "subhan",
    last_name: "de",
    branch: "development"
}

app.get("/api", (req, res, next) => {
    res.json(info_1);
   });



app.listen(3000, () => {
 console.log("Server running on port 3000");
});