
var args = arguments[0] || {};
var input = args.fid;



Alloy.Collections.eventDetail.fetch();

function filterOrganizer(collection) {
	console.log("here");
	console.log(collection.toJSON()); 
	
	return collection.where({organizer:input});
	
	
}

function tableClickjump2(e) {
	var eventListController = Alloy.createController('jump1', {
		fid : e.row.fid 
	});
	Alloy.Globals.eventTab2.open(eventListController.getView());
};


function filterVenueID(collection) {
	console.log("tst");
	console.log("locationfunction"); 
	
	return collection.where({venue:input});
	
	
}