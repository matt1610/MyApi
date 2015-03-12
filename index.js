var express = require('express');
var app = express();
var mongo = require('mongodb');
var cors = require('cors');
var ObjectId = require('mongodb').ObjectID;

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));
app.use(cors());

app.get('/api', function(request, response) {
  	response.send('Working!');
});

app.get('/api/stats', function (request, response) {
	setInterval(function () {
  		response.send(DummyData());
  	}, 5000);
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});




function DummyData () {
	var randomIndex = RandomTwo(0, People.length);
	return {
		Name : People[randomIndex].Name,
		Surname : People[randomIndex].Surname,
		HeartRate : RandomTwo(50,170),
		Temperature : RandomTwo(33,37),
		Acceleration : RandomTwo(0,5),
		Loc : People[randomIndex].Loc
	}
}



function RandomTwo (one, two) {
	return Math.floor(Math.random() * two) + one;
}


var People = [
	{
		Name : 'Matthew',
		Surname : 'Starkey',
		Age : 30,
		Weight : 75,
		Loc : {
			Lat : -29.723173,
			Long : 31.063996
		}
	},
	{
		Name : 'JP',
		Surname : 'Ras',
		Age : 29,
		Weight : 85,
		Loc : {
			Lat : -29.716110,
			Long : 31.066056
		}
	},
	{
		Name : 'Tim',
		Surname : 'Baker',
		Age : 27,
		Weight : 85,
		Loc : {
			Lat : -29.720042,
			Long : 31.079059
		}
	},
	{
		Name : 'Grant',
		Surname : 'Winlow',
		Age : 30,
		Weight : 75,
		Loc : {
			Lat : -29.715253,
			Long : 31.070133
		}
	},
	{
		Name : 'Gary',
		Surname : 'Nixon',
		Age : 28,
		Weight : 83,
		Loc : {
			Lat : -29.715253,
			Long : 31.070133
		}
	}
]