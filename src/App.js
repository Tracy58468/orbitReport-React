import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import {useState} from "react"; // need curly braces for React imports
import satData from "./components/satData";

function App() {

  const [sat, setSat] = useState(satData);

  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  
  const filterByType = (currentType) => {
    const displaySats = satData.filter((newSatDisplay) => {
      return newSatDisplay.orbitType === currentType;
    });
    setSat(displaySats);
    console.log(displaySats);
  }

  return (
    <div>
      <Banner />
      {/* <Buttons /> */}
      <Buttons
        filterByType = {filterByType}
        setSat = {setSat}
        displaySats = {displaySats}  
      />
      <Table sat = {sat} />
      {/* <Table /> */}
    </div>
  );
}

export default App;
//comment
