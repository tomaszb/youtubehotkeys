var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
 
var widget = widgets.Widget({
  id: "mozilla-link",
  label: "Mozilla website",
  contentURL: "http://www.youtube.com/yt/brand/media/image/YouTube-icon-full_color.png",
  onClick: function() {
    tabs.open("http://www.mozilla.org/");
  }
});