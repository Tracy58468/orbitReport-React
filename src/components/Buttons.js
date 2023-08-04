import satData from "./satData";
import displaySats from '../App';
import filterByType from '../App';
import setSat from '../App';
import id from '../App';


const Buttons = () => {
  return (
    <div>
      {displaySats.map((sat, id) => {
        return (
          <button onClick={() => filterByType(sat)} key={id}>
            {sat} Orbit
          </button>
        );
      })}
      <button onClick={() => setSat(satData)} key={id}>All Orbits</button>
      </div>
  );
};

export default Buttons;

// filterByType = {filterByType}
// setSat = {setSat}
// displaySats = {displaySats}  