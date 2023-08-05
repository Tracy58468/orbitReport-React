import satData from "./satData";
// import {useState} from "react";
import Buttons from "./Buttons";

const satDataList = satData.map((data) => (
  <tr key = {data.id}>
    <td>{data.name}</td>
    <td>{data.type}</td>
    <td>{data.launchDate}</td>
    {/* <td>{String(data.operational)}</td> */}
    <SatStatus />
  </tr>
  // console.log(data);
));



// export function SatStatus(satData) {
//   const [operationalStatus, setStatus] = useState(satData);


//   // console.log(status);
//   if (operationalStatus === true) { 
//     return (
//       <td>{setStatus}</td>
//     );
//   } else {
//     return (
//       <td>Not operational</td>
//     );
//   }
// }

// const [operationalStatus, setStatus] = useState(satData);

let operationalStatus = true;

function SatStatus() {
  return(
    <>
      {satData.map((props) => {
        return props.operational === operationalStatus ? (
          <td key = {props.id}>Operational</td>
        ) : (
          <td key = {props.id}>Not Operational</td>
        )
      })}
    </>
  )};

//   if (satData.operational === true) { 
//     console.log(`inside if: ${satData.operational}`);
//     return (
//         <td>Operational</td>
//     );
//   } else {
//     console.log(`inside else: ${satData.operational}`);
//       return (
//         <td>Not operational</td>
//     );
//   }
// }

const Table = ({sat}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>

      <tbody>
        {satDataList}
      </tbody>
    </table>
  );
};

export default Table;

