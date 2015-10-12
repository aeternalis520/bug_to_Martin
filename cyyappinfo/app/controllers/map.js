var args = arguments[0] || {};
// var input = args.fid||{};
var input = args.fid||{};
Alloy.Collections.Venue.fetch();

$.win.addEventListener("close", function(){ 
	$.destroy();
});
function locationFilter(collection)
{
	console.log("locationFilter");
	console.log(input);
	return collection.where({VenueID:'AC Hall'});
}

function transform(model)
{
	var transform=model.toJSON();
	transform.title=transform.VenueID;
	transform.subtitle=transform.VenueName;
	console.log(transform.Longitude);
	console.log(transform.Latitude);
	console.log(transform.VenueID);
	return transform;
}