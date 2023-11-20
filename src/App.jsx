import Buttons from "./components/Buttons";
import Table from "./components/Table"; 
import Banner from "./components/Banner"; 
import {useState} from "react";
import satData from "./components/satData"; 

const filterByType = (currentType) => {
  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });
  setSat(displaySats);
};

function App() {
  const [sat, setSat] = useState(satData);
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  return (
    <div>
      <Buttons 
         filterByType={filterByType}
         setSat={setSat}
         displaySats={displaySats}
      />
      <Banner/>
      <Table sat={sat} />
    </div>
  );
}

export default App; 


