import "./App.css";
import VideoGrid from "./containers/videoGrid/VideoGrid";
import Controls from "./containers/controls/Controls";
import { AiOutlinePhone } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="App">
        <div id="loginPage" className="container text-center">
          <div className="row">
            <div className="col-md-4 col-md-offset-4">
              <h2>WebRTC Video Demo. Please sign in</h2>
              <label htmlFor="usernameInput" className="sr-only">
                Login
              </label>
              <input
                type="email"
                id="usernameInput"
                className="form-control formgroup"
                placeholder="Login"
                required=""
                autoFocus=""
              />
              <button id="loginBtn" className="btn btn-lg btn-primary btnblock">
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>

      <div id="callPage" className="call-page">
        <video id="localVideo" autoPlay></video>
        <video id="remoteVideo" autoPlay></video>

        <div className="row text-center">
          <div className="col-md-12">
            <input
              id="callToUsernameInput"
              type="text"
              placeholder="username to call"
            />
            <button id="callBtn" className="btn-success btn">
              Call
            </button>
            <button id="hangUpBtn" className="btn-danger btn">
              Hang Up
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
