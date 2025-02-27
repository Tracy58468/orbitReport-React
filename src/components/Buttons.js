import satData from "./satData";
import id from '../App';
import './styling.css';

const Buttons = ({filterByType, setSat, displaySats}) => {
  return (
    <div className = "flex-container">
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