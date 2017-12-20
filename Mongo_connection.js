var mongo = require('mongodb').MongoClient;
mongo.connect("mongodb://localhost:27017/NewDB",function(req,res){
	if(req)
		throw req;
	else
		console.log("connected to NewDB");
	res.collection('Temp').insert({"_id":9});
	console.log('Inserted')
	
})
