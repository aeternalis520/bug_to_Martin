$.index.open();
var args = arguments[0] || {};
var fid = args.fid || {};
// $.win.title = fid;
Alloy.Collections.eventDetail.fetch();
Alloy.Collections.Venue.fetch();

Alloy.Globals.eventTab1 = $.eventTab1;
Alloy.Globals.eventTab2 = $.eventTab2;
Alloy.Globals.eventTab3 = $.eventTab3;
Alloy.Globals.eventTab4 = $.eventTab4;

Alloy.Globals.tabGroup = $.index;

var lastCampus;
// function btClick(e) {
	// $.mapView.region = { 
		// latitude : 22.339468,
		// longitude : 114.181879,
		// latitudeDelta : 0.001, 
		// longitudeDelta : 0.001
	// }; 
// };

// function tableClick(e) {
	// var eventListController = Alloy.createController('eventList', {
		// fid : e.row.fid 
	// });
	// $.eventTab.open(eventListController.getView());
// };

function transformFunction(model) {
	console.log("table clicked");
	var transform = model.toJSON();
	if (transform.image == null)
		transform.image = "";
	return transform;
}

function tableClickjump1(e) {
	var eventListController = Alloy.createController('jump1', {
		fid : e.row.fid 
	});
	console.log(e.row.fid);
	$.eventTab1.open(eventListController.getView());
};

function tableClickdetails(e) {
	var eventListController = Alloy.createController('details', {
		fid : e.row.fid 
	});
	$.index.activeTab.open(eventListController.getView());
};


function group(model) {
	var transform = model.toJSON();

	if (lastCampus == transform.CampusID) {
		transform.SubTitle = "";
	} else {
		transform.SubTitle = transform.CampusID;
		
	}
	
	lastCampus = transform.CampusID;
	
	
	return transform;
};

function tableClick3(e) {
	var eventListController = Alloy.createController('VenueDetails', {
		fid : e.row.fid 
	});
	Alloy.Globals.eventTab3.open(eventListController.getView());
};

function transformMapData(model) {
	var transform = model.toJSON();
	transform.title = transform.VenueID;
	transform.subtitle = transform.VenueName;
	transform.rightButton=Titanium.UI.iPhone.SystemButton.DISCLOSURE; 
    return transform;
}


function mapClicked(e) {
	if (e.clicksource == 'rightButton') {
		var eventListController = Alloy.createController('VenueDetails', {
			fid : e.annotation.title
		});
		Alloy.Globals.eventTab4.open(eventListController.getView());
	};
}

function buttonClick(e){
	if(e.source.title=='Login')
	e.source.title='Logoff';
	else
	e.source.title='Login';
}
