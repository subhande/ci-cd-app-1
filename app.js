var express = require("express");
var app = express();
const axios = require('axios');

info_1 = {
    first_name: "subhan",
    last_name: "de",
    branch: "master",
    app: "app-1"
}

app.get("/api", (req, res, next) => {
    let messages = [];

      axios.get("http://0.0.0.0:6000/api")
        .then(response => {
            // console.log()
            messages.push(info_1);
            messages.push(response.data);
            res.json({messages});
        })
        .catch(error => {
            console.log('error', error);
            res.json({messages});
        });
    
        
   });



app.listen(3000, '0.0.0.0', () => {
 console.log("Server running on port 3000");
});