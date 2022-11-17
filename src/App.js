import HeaderComponent from "./components/header-component";

import "./App.css";
import KeepTrack from "./components/keep-track-component";

function App() {
  return (
    <div className="App">
      <div className="container">
        <HeaderComponent />
        <KeepTrack />
      </div>
    </div>
  );
}

export default App;
