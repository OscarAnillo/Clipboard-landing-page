import HeaderComponent from "./components/header-component";
import KeepTrack from "./components/keep-track-component";
import AccessClipboard from "./components/access-clipboard-component";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
        <KeepTrack />
        <AccessClipboard />
      </div>
    </div>
  );
}

export default App;
