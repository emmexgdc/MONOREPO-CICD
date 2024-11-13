let express = require('express');
let app = express();
//test

app.get('/', function (req, res) {
    res.json({ 
        shoppingCart: [{
            product: "smart earbuds", 
            quantity: 1,
            unit_price: 250
        }, {
            product: "Tablet",
            quantity: 1,
            unit_price: 1500
        }]
    });
    res.end();
});

app.listen(3002, function () {
  console.log("app listening on port 3002!");
});
