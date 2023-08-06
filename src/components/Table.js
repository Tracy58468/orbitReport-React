import satData from "./satData";
// import Buttons from "./Buttons";

const satDataList = satData.map((data, id) => (
  <tr key = {data.id}>
    <td>{data.name}</td>
    <td>{data.type}</td>
    <td>{data.launchDate}</td>
    {/* <td>{String(data.operational)}</td> */}
    <td>{data.operational === true ? "Operational" : "Not"}</td>
  </tr>
));

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

