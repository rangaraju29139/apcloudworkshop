var express = require('express');
var app = express();

app.get('/login',function(req,res){
  res.sendFile('./login.html');
});
app.listen(3000);
