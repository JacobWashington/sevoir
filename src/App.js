import "./App.css";
import VideoGrid from "./containers/videoGrid/VideoGrid";
import Controls from "./containers/controls/Controls";
import {AiOutlinePhone} from "react-icons/ai";

function App() {
  return (
    <div className="App">
      <VideoGrid feeds={[]} />
      <Controls />
    </div>
  );
}

export default App;