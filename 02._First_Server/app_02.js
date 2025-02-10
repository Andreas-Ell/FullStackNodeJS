const express = require('express');
const app_02 = express();

app_02.get("/", (req, res) =>  {
    res.send({ data: "This is the root route!"})
});