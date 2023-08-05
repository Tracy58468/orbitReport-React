import satData from "./satData";

const satDataList = satData.map(data =>
  <tr key = {data.id}>
    <td>{satData.name}</td>
    <td>{satData.type}</td>
    <td>{satData.launchDate}</td>
    {/* <td><satStatus /></td> */}
  </tr>
  );

function satStatus(props) {
  const status = props.status;
  if (status) {
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
     <p>I am a paragraph.</p>>
  );
};

export default Table;

