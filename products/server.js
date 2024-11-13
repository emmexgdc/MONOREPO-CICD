let express = require('express');
let app = express();

app.get('/', function (req, res) {
    res.json({ 
        products: [{
            name: "Tablet", 
            price: 1500
        }, {
            name: "smart earbuds",
            price: 250
        }, {
            name: "Amazon Alexa",
            price: 750
        }]
    });
    res.end();
});

app.listen(3001, function () {
  console.log("app listening on port 3001!");
});

