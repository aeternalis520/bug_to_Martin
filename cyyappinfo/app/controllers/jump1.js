var args = arguments[0] || {};
var fid = args.fid || {};
// $.win.title = fid;
Alloy.Collections.eventDetail.fetch();
$.win.addEventListener("close", function(){ 
	$.destroy();
});
function filterFunction(collection){
	console.log("filterFunction");
	console.log(fid);
return collection.where({id:fid});
}

function btClick(e) {
	var eventListController = Alloy.createController('map', {
		fid : e.source.vid 
	});
	console.log("btClick");
	console.log(e.source.vid);
	// Alloy.Globals.tabGroup.activeTab.open(eventListController.getView());
	Alloy.Globals.tabGroup.getActiveTab().open(eventListController.getView());
	};

// createController {fid:e.source.title}

 // {
	// var eventListController = Alloy.createController('jump1', {
		// fid : e.source.vid 
	// });
	// Alloy.Globals.eventTab3.open(eventListController.getView());
// };