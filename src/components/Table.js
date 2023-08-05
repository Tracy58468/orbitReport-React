import satData from "./satData";

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
        <tr>
          <td>{satData.name}</td>
          <td>{satData.type}</td>
          <td>{satData.launchDate}</td>
          <td><satStatus /></td>
        </tr>
        </tbody>
      </table>
  );
};

export default Table;

// {sat.map((id, data) => {
//   return (
//     <button onClick={() => sat(data)} key={id}>
//       {sat} Orbit
//     </button>
//   );
// })}