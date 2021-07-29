const videoGrid = document.getElementById('video-grid');
const io = require("socket.io-client");
const socket = io('localhost://3000/stream')

socket.io.on("error", (error) => {
  console.log(error)
});

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
<<<<<<< HEAD
  console.log(typeof(video))
}
=======
}
>>>>>>> 5ef74f77ea90b7b1e6e0f0fd1d11267f55c1b3ed
