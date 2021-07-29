const videoGrid = document.getElementById('video-grid');

function hasUserMedia() {
  //check if the browser supports the WebRTC
  return !!(
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia
  );
}

if (hasUserMedia()) {
  navigator.getUserMedia =
    navigator.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

  //enabling video and audio channels
  const myVideo = document.createElement("video");
  navigator.getUserMedia(
    { video: true, audio: true },
    function (stream) {
      addVideoStream(myVideo, stream);
    },
    function (err) {}
  );
} else {
  alert("WebRTC is not supported");
}

function addVideoStream(video, stream) {
  video.srcObject = stream;
  video.addEventListener("loadedmetadata", () => {
    video.play();
  });
  videoGrid.append(video);
}