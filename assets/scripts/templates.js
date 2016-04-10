this["JST"] = this["JST"] || {};

this["JST"]["about-modal.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<section class="modal">\n  <div class="modal-inner">\n    <a href="#" title="Close" class="close" data-hook="close-modal"><span>x</span></a>\n    <header class="modal-header">\n      <h1 class="modal-title">Notes on the Data</h1>\n    </header>\n    <div class="modal-body">\n      <p>The Surat Story of Resilience visualizes elements of climate change resilience through an interactive flood map. Surat has experience over twenty major floods in the past century, including one in 2006 that flooded more than 75% of the city.</p>\n      <p>Flood data from the site comes from the <a href="http://www.suratmunicipal.gov.in/">Surat Municipal Corporation\'s</a> <a href="http://www.suratmunicipal.gov.in/Downloads/dmp_Eng.zip?SrNo=805005305406505405005404">Disaster Management Plan (pg 16)</a>. Data shows approximate average water levels received from reports during the flooding in August 2006.</p>\n      <p>More information about Surat can be found on the <a href="http://acccrn.net/">Asian Cities Climate Change Resilience Network</a> and the <a href="http://www.indiaurbanportal.in/Publications/Publications181/Publications181755.PDF">Surat City Resilience Strategy.</a></p>\n    </div>\n    <footer class="modal-footer">\n       <p>Made with love by <a href="https://developmentseed.org" title="Visit Development Seed website">Development Seed</a> and the <a href="http://www.globalresiliencepartnership.org">Global Resilience Partnership</a>.</p>\n    </footer>\n  </div>\n</section>';

}
return __p
};

this["JST"]["map-tooltip.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<article>\n  <header>\n    <h1 class="prime-title">' +
__e( project ) +
'</h1>\n  </header>\n  <div class="content">\n    <a href="#" class="view-more" data-pid="' +
__e( pid ) +
'">View project</a>\n  </div>\n</article>';

}
return __p
};

this["JST"]["map.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<div id="header">\n  <a id="logo" href="http://www.globalresiliencepartnership.org/"><h1>Global Resilience Partnership</h1></a>\n  <nav class="main-nav">\n    <a href="#about" title="See notes about the data" data-hook="open-about">Data</a>\n  </nav>\n</div>\n<div id="map"><!-- Map here --></div>\n<div id="grad"></div>\n<div id="sidebar">\n\n  <div class="flood-guage">\n    <ul>\n      <li><a data-layer="floodLayer4" href="#"><span class="flood-ind">+10 ft</span></a></li>\n      <li><a data-layer="floodLayer3" href="#"><span class="flood-ind">5-10 ft</span></a></li>\n      <li><a data-layer="floodLayer2" href="#"><span class="flood-ind">3-5 ft</span></a></li>\n      <li><a data-layer="floodLayer1" href="#"><span class="flood-ind">< 3 ft</span></a></li>\n\n      <li class="drop dropup more-info right">\n        <a href="#" class="trigger" data-toggle="drop">?</a>\n        <div class="drop-content">\n          <h3>2006 Flood Levels</h3>\n          <p>Approximate average water levels reported during August 2006 flooding.</p>\n        </div>\n      </li>\n\n    </ul>\n  </div>\n\n  <div class="context-layers">\n    <ul>\n      <li><a data-layer="satellite" href="#"><span class="context-ind">Satellite</span></a></li>\n      <li><a data-layer="zones" href="#"><span class="context-ind">Zones</a></span></li>\n    </ul>\n  </div>\n  \n  <nav>\n    <ul>\n      <li><a href="#" id="tour-prev" title="Previous" class="tour-cntrl"><span>Previous</span></a></li>\n\t    <li><a href="#" id="tour-next" title="Next" class="tour-cntrl"><span>Next</span></a><li>\n    </ul>\n  </nav>\n  <div class="project"><!-- sidebar.ejs --></div>\n  <div class="tour"><!-- tour.ejs --></div>\n</div>\n\n<div id="about"><!-- About modal --></div>';

}
return __p
};

this["JST"]["sidebar.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
with (obj) {
__p += '<small class="subtitle">Project</small>\n<h1 class="title">' +
__e( project ) +
'</h1>\n\n<dl class="metadata">\n  <dt class="budget">Budget</dt>\n  <dd>$125,000,000 USD</dd>\n\n  <dt>Focus</dt>\n  <dd>' +
__e( focus ) +
'</dd>\n\n<!--\n  <dt>Partners</dt>\n  <dd>\n    <ul>\n    ';
 _.each(partners, function(part) { ;
__p += '\n      <li>' +
__e( part ) +
'</li>\n    ';
 }); ;
__p += '\n    </ul>\n  </dd>\n-->';

}
return __p
};

this["JST"]["tour.ejs"] = function(obj) {
obj || (obj = {});
var __t, __p = '', __e = _.escape;
with (obj) {
__p += '<h2>' +
__e( title ) +
'</h2>\n<p>' +
((__t = ( text )) == null ? '' : __t) +
'</p>';

}
return __p
};