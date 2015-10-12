var args = arguments[0] || {};
var input = args.fid;

Alloy.Collections.eventDetail.fetch();

function filterVenue(collection) {
	console.log("here");
	console.log(collection.toJSON()); 
	
	return collection.where({venue:input});
	
	
}

function tableClick4(e) {
	var eventListController = Alloy.createController('jump1', {
		fid : e.row.fid 
	});
	Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
};

