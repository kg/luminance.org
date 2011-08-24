function onLoad () {
  var linkboxes = $(".link-box");
  linkboxes.mouseenter(onLinkboxMouseEnter);
  linkboxes.mouseleave(onLinkboxMouseLeave);
  
  var videos = $(".link-box video");  
  videos.bind("ended", onLinkboxVideoEnded);
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