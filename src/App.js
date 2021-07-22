import "./App.css";
import VideoGrid from "./containers/videoGrid/VideoGrid";
import Controls from "./containers/controls/Controls";

function App() {

  // let peers = [];
  // function hasUserMedia() {
  //   //check if the browser supports the WebRTC
  //   return !!(
  //     navigator.getUserMedia ||
  //     navigator.webkitGetUserMedia ||
  //     navigator.mozGetUserMedia
  //   );
  // }
  // if (hasUserMedia()) {
  //   navigator.getUserMedia =
  //     navigator.getUserMedia ||
  //     navigator.webkitGetUserMedia ||
  //     navigator.mozGetUserMedia;

  //   //enabling video and audio channels
  //   navigator.getUserMedia(
  //     { video: true, audio: true },
  //     function (stream) {
  //       console.log(stream)
  //       peers.append(stream)
  //     },
  //     function (err) {}
  //   );
  // } else {
  //   alert("WebRTC is not supported");
  // }
  return (
    <div className="App">
      <VideoGrid feeds={[]} />
      <Controls />
    </div>
  );
}

export default App;
