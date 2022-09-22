const express = require('express');
const app = express();

app.get("/movies", (req, res)=>{
    res.send([
        {id: 1, title: "Mean Girls"},
        {id: 2, title: "Miss Congeniatlity"},
        {id: 3, title: "Star Wars"},
        {id: 4, title: "Blade Runner 2049"},
        {id: 5, title: "The Fifth Element" },
        {id: 6, title: "Inception" }
    ])
})