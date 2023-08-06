import satData from "./satData";
import './styling.css';

const satDataList = satData.map((data) => (
  <tr key = {data.id}>
    <td>{data.name}</td>
    <td>{data.type}</td>
    <td>{data.launchDate}</td>
    {/* <td>{String(data.operational)}</td> was for checking data.operational was correct*/}
    <td>{data.operational === true ? "Operational" : "Not Operational"}</td>
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

