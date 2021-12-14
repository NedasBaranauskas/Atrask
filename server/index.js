const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const cors = require('cors');

const app = express();

app.use(cors());
app.options('*', cors());

app.use(fileUpload());
app.use(bodyParser.urlencoded({extended: false}));


app.listen(5500, ()=>{
    console.log("Listening at port 5500");
});


app.get('/markers', (req, res)=>{
    fs.readFile('./mock_responses/markers.json', 'UTF-8', (err, data)=>{
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });
});


app.get('/markerDetails', (req, res)=>{
    console.log(req.query.id);
    // fs.readFile('./mock_responses/markers.json', 'UTF-8', (err, data)=>{
    //     if(err){
    //         console.log(err);
    //     }
    //     else{
    //         res.send(data);
    //     }
    // });
});

