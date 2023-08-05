import satData from "./satData";

const satDataList = satData.map(data =>
  <tr key = {data.id}>
    <td>{data.name}</td>
    <td>{data.type}</td>
    <td>{data.launchDate}</td>
    {/* <td>{String(data.operational)}</td> */}
    {/* <td>{
      if (data.operational === true) {
        return (
          Operational
        );
      } else {
        return (
          Not operational
        );
      };
      }
    </td> */}
    {/* <SatStatus /> */}
    <td>I'm R{data.id}C5</td>
  </tr>
);

export function SatStatus(props) {
  const status = props.operational;
  console.log(status);
  if (status === true) {
    return (
      <td>Operational</td>
    );
  } else {
    return (
      <td>Not operational</td>
    );
  }
}

// const Table = ({sat}) => {
//   return (
//       <table>
//        <thead>
//         <tr>
//           <th>Name</th>
//           <th>Type of Satellite</th>
//           <th>Launch Date</th>
//           <th>Status</th>
//         </tr>
//         </thead>
//         <tbody>
//           {satDataList}
//           {/* {sat.map((id, data) => {
//             return (
//               <tr key = {id}>
//                 <td>{satData.name}</td>
//                 <td>{satData.type}</td>
//                 <td>{satData.launchDate}</td>
//                 <td>{satStatus}</td>
//               </tr>
//             );
//           })} */}
//         {/* <tr key = "id">
//           <td>{satData.name}</td>
//           <td>{satData.type}</td>
//           <td>{satData.launchDate}</td>
//           <td><satStatus /></td>
//         </tr> */}
//         <tr>
//           <td>name</td>
//           <td>type</td>
//           <td>launchDate</td>
//           <td>satStatus</td>
//         </tr>
//         </tbody>
//       </table>
//   );
// };

const Table = ({sat}) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
          <th>Sample data</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>I'm R0C1</td>
          <td>I'm R0C2</td>
          <td>I'm R0C3</td>
          <td>I'm R0C4</td>
          <td>I'm R0C5</td>
        </tr>
        {satDataList}
      </tbody>
    </table>
  );
};

export default Table;

