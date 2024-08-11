 // 1. This code loads the IFrame Player API code asynchronously.
 var tag = document.createElement('script');

 tag.src = "https://www.youtube.com/iframe_api";
 var firstScriptTag = document.getElementsByTagName('script')[0];
 firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

 // 2. This function creates an <iframe> (and YouTube player)
 //    after the API code downloads.
 var player;
 function onYouTubeIframeAPIReady() {
     player = new YT.Player('player', {
         videoId: '3ST4fDVyAzA?si=OEMs5hugPF0tD6Dq&amp;start=36',
         autoplay: 1,
         playerVars: {
         'autoplay': 1,
         'playsinline': 1
         },
         events: {
         'onReady': onPlayerReady,
         }
     });
 }

 // 3. The API will call this function when the video player is ready.
 function onPlayerReady(event) {
     event.target.playVideo();
 }

 <iframe width="560" height="315" src="https://www.youtube.com/embed/3ST4fDVyAzA?si=br0-WBYnffrR9fRX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>