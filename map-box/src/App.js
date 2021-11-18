import React, { useState } from "react";
import Table from "./components/Table";
import UnfoldedMapComponent from './components/UnfoldedMapComponent'

function App() {
  const [ setIsMapLoaded] = useState(false);
  const [ setMap] = useState(null);

  return (
    <div className="App">
      <UnfoldedMapComponent setMap={setMap} setIsMapLoaded={setIsMapLoaded} />
      <Table />
    </div>
  );
}

export default App;
