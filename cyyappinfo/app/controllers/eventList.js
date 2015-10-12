var args = arguments[0] || {};
var fid = args.fid || {};
// $.win.title = fid;
Alloy.Collections.events.fetch();

$.win.addEventListener("close", function(){ 
	$.destroy();
});
function filterFunction(collection) { 
	return collection.where({fid:fid});
}