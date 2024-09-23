console.log("Video Volume Booster script running..."); // Log when script is injected

// Function to boost the volume
function boostVolume(videoElement) {
  console.log("Boosting volume for video element:", videoElement); // Log when volume is boosted
  var audioCtx = new AudioContext();
  var source = audioCtx.createMediaElementSource(videoElement);
  var gainNode = audioCtx.createGain();
  gainNode.gain.value = 2; // Boost the volume (double)
  source.connect(gainNode);
  gainNode.connect(audioCtx.destination);
}

// Function to find all video elements and apply the volume boost
function checkForVideos() {
  console.log("Checking for videos..."); // Log when the script checks for videos
  var videos = document.querySelectorAll('video');
  videos.forEach(function(video) {
    if (video.readyState >= 3) { // Check if video is ready
      console.log("Video is ready, boosting volume...");
      boostVolume(video);
    } else {
      video.addEventListener('canplay', function() {
        console.log("Video is now ready, boosting volume...");
        boostVolume(video);
      }, { once: true });
    }
  });
}

// Run the checkForVideos function whenever the page content is loaded
document.addEventListener('DOMContentLoaded', function() {
  console.log("DOM content loaded, running checkForVideos...");
  checkForVideos();
});