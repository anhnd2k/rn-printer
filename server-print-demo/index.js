const express = require("express");
const PORT = process.env.PORT || 6969;
const app = express();
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.json("hello server print")
})

app.post('/', (req, res) => {
    console.log(req.body);
    if (req.body != undefined) {
        res.status(200).send("created data post")
    } else {
        res.status(201).send("err post data")
    }
})

app.listen(PORT, '0.0.0.0', function () {
    console.log('Listening to port:  ' + PORT);
});