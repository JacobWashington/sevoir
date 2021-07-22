import './App.css';
import VideoGrid from "./containers/videoGrid/VideoGrid";
import Controls from "./containers/controls/Controls";

function App() {
  return (
    <div className="App">
      <VideoGrid feeds={[]}/>
      <Controls />
    </div>
  );
}

export default App;
