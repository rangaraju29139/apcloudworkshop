var express = require('express');
var mongo =reui
var app = express();
/*
      app.use(express.static(__dirname+'/',{login:'/login.html'}));
*/
app.get('/',function(req,res){
res.sendFile(__dirname +'/login.html');
});
app.get('/insert',function(req,res){
var username = req.query.username;
var password = req.query.password;

console.log('the username of the user is : '+username);
console.log('the password of the user is:'+password);
});
app.listen(3000);
console.log('the server is running at port :3000');
