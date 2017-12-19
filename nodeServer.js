var http = require('http');
var app = http.createServer(function(req,res){
  res.writeHead(200,{'Content-Type':'Text/html'});
  res.end("server created ");
});
app.listen(3000,function(){
  console.log("the server is runnig at port number");
})
/*


*/
