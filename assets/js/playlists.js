(function($){
  var doc = Window.document;

  var waitFor = function(selector, cb) {
    if ($(selector, doc).get(0)) return cb();
    else setTimeout(function(){ waitFor(selector, cb); }, 200);
  };

  // wait for the video tabs to be created by DM's JavaScript
  waitFor('.pl_video_tabs ul.mo_tabs', function(){

    // find video tabs
    var tabs = $('.pl_video_tabs ul.mo_tabs', doc);

    // add markup for new tab called 'Playlists'
    tabs.append('<li><a id="tab_playlists" href="">Playlists</a></li>'); 

    // WTF? The DM javascript still has the old implementation, and clicking on the tab causes the old implementation to be demand-loaded :-)
  });


})(jQuery);