var data = require("sdk/self").data;
var tabs = require("sdk/tabs");
var self = require("sdk/self");
 
var control_tab = require("sdk/panel").Panel({
  width: 212,
  height: 130,
  contentURL: data.url("control-tab.html"),
  contentScriptFile: data.url("get-buttons.js")
});
 

require("sdk/widget").Widget({
  label: "Control Tab",
  id: "control-tab",
  contentURL: "https://cdn1.iconfinder.com/data/icons/google_jfk_icons_by_carlosjj/512/youtube.png",
  panel: control_tab
});
 
control_tab.port.on("bind_now", function onBind() {
	var bound_Tab = tabs.activeTab;
  worker = bound_Tab.attach({contentScriptFile: self.data.url("youtube-ctrl.js")});
});

control_tab.port.on("next", function onNext() {
  worker.port.emit("next");
});

control_tab.port.on("last", function onLast(){
  worker.port.emit("last");
});


