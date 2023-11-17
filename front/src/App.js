import React from "react";
import './styles/App.css'
import LeftPanel from "./components/LeftPanel.jsx";
import CenterPanel from "./components/CenterPanel.jsx";
import RightPanel from "./components/RightPanel";

function App() {
  return(
    // можно написать несколько Counter-ов
    <div className="App">

      <LeftPanel/>
      <CenterPanel/>
      <RightPanel/>
    </div>
  );
  
}

export default App;
