function onLoad () {
  // Older firefox has a ton of bugs that breaks things...
  if (jQuery.browser.mozilla && (parseFloat(jQuery.browser.version) <= 2.0)) {
    oldFirefoxHack();
  }
  
  var linkboxes = $(".link-box");
  linkboxes.mouseenter(onLinkboxMouseEnter);
  linkboxes.mouseleave(onLinkboxMouseLeave);
  
  var videos = $(".link-box video");  
  videos.bind("ended", onLinkboxVideoEnded);
}

function oldFirefoxHack () {
  var videos = $("video");
  videos.remove();
  
  var links = $("a");
}

function onLinkboxVideoEnded (evt) {
  evt.target.play();
}

function onLinkboxMouseEnter (evt) {
  var theVideo = $(this).children("video")[0];
  theVideo.play();
}

function onLinkboxMouseLeave (evt) {
  var theVideo = $(this).children("video")[0];
  theVideo.pause();
}