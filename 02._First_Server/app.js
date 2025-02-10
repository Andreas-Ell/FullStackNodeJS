const express = require('express');
const app = express();



app.get("/", (req, res) => {
    res.send({ data: "This is the root route" });
});

// assignment /blablabla
app.get("/blablabla", (req, res) => {
    res.send({ data: "blablabla"})
});

// asignment implement /yourfarvoritenumber GET


app.get("/yourfarvoritenumber", (req, res) => {
    res.send({ data: "14" })
});

// En anden måde at få number på ved hjælp af pathvariabel


app.get("/yourfarvoritenumberwithpath/:number", (req, res) => {
    res.send({ data: `Your favorite number is: ${req.params.number}` });
});

// en anden model

const functionReference = (req, res) => {
    res.send({ data: `Your favorite number is: ${req.params.favoriteNumber}` });
};

app.get("yourfavoritenumber/:favoriteNumber", functionReference);

// assignment implement /favoritethings that allows the client to define a favorite flower and animal



app.get("/favoritethings/:favoriteflower/:favoriteanimal", (req, res) => {
    res.send({ data: `Your favorite flower is ${req.params.favoriteflower} and your favorite animal is ${req.params.favoriteanimal}` })
});


app.listen(8080);



