void((function () {
  var d = document;
  d.write('' +
    '<!DOCTYPE html><html><head><meta charset="UTF-8">'+
    '<title>' + d.title + ' - Responsive test</title>' +
    '<link rel="stylesheet" href="http://responsive.victorcoulon.fr/assets/css/app.css">' +
    '<script src="http://responsive.victorcoulon.fr/assets/js/app.min.js"></script></head>' +
    '<body><header>' +
    '<div class="close"><a href="%23">×</a></div>' +
    '<div id="size"></div>' +
    '<div class="keyboard"><a href="%23">I</a></div>' +
    '<div class="cssrefresh"><a href="%23">I</a></div>' +
    '<div id="devices">' +
    '<a href="%23" class="tablet-portrait"><span>Tablet Portrait</span></a>' +
    '<a href="%23" class="tablet-landscape"><span>Tablet Landscape</span></a>' +
    '<a href="%23" class="smartphone-landscape"><span>iPhone Landscape</span></a>' +
    '<a href="%23" class="smartphone-portrait"><span>iPhone Portrait</span></a>' +
    '<a href="%23" class="auto active"><span>Auto</span></a>' +
    '</div>' +
    '</header><section>' +
    '<div id="wrapper">' +
    '<iframe src="' + d.URL + '" onLoad="resbook.changeUrl(this.contentWindow.location,this.contentDocument.title);"></iframe>' +
    '<span class="keyboard-bg"></span>' +
    '</div>' +
    '</section></body></html>'
    );
})());