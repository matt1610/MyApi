


function DummyData () {
	var randomIndex = RandomTwo(0, People.length);
	return {
		Name : People[randomIndex].Name,
		Surname : People[randomIndex].Surname,
		HeartRate : GetHeartRate(30),
		Temperature : RandomTwo(33,37),
		Acceleration : RandomTwo(0,5),
		Loc : People[randomIndex].Loc,
		Age : People[randomIndex].Age,
		Weight : People[randomIndex].Weight
	}
}

function RandomTwo (one, two) {
	return Math.floor(Math.random() * two) + one;
}

function GetHeartRate (days) {
	var Temp = [];
	for (var i = 0; i < days; i++) {
		Temp.push(RandomTwo(50,170));
	};
	return Temp;
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

module.exports = {
	People : People,
	DummyData : DummyData,
	RandomTwo : RandomTwo
}
