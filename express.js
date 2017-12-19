var express = require('express');
var app = express();

app.get('/api',function(req,res){
   res.send("{'message':'hello World!!'}");
});
app.get('/hii',function(req,res){
   res.send("{'message':'good morning!!!!!!!!'}");
});
app.get('/',function(req,res){
   res.send("{'message':'welcome'}");
});
app.listen(3000,function(){
console.log('express is listening to http://localhost:3000');
});
