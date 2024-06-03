// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql =require('mysql');
const app = express();
const port = 5000;


app.use(bodyParser.json());
app.use(cors());
app.use(express.json());

const db =mysql.createConnection({

  host:"localhost",
  user:"majesticflame",
  password:"",
  database:"ccio",



})

 


app.post('/login', (req, res) => {

  const sql ="SELECT * FROM Users WHERE mail=? AND pass =? ";
  db.query(sql,[req.body.email, req.body.password],(err,data) => {
    if(err) return res.json("error");
    if(data.length >0){return res.json("login succes")} else {return res.json("no record")}



  })
  


 
  res.status(200).send('User logged in');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
