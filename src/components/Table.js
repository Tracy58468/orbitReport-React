import satData from "./satData";
// import sat from "../App";
import './styling.css';
// import id from '../App';

const satDataList = satData.map((data, id) => {
  return (
    <tr key = {id}>
      <td>{data.name}</td>
      <td>{data.type}</td>
      <td>{data.launchDate}</td>
      {/* <td>{String(data.operational)}</td> was for checking data.operational was correct*/}
      <td>{data.operational === true ? "Operational" : "Not Operational"}</td>
    </tr>
  );
}); // Why doesn't this work?

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

      {/* <tbody>
        {sat.map((data, id) => (
          <tr key = {id}>
            <td>{data.name}</td>
            <td>{data.type}</td>
            <td>{data.launchDate}</td>
            {/* <td>{String(data.operational)}</td> was for checking data.operational was correct*/}
            {/* <td>{data.operational === true ? "Operational" : "Not Operational"}</td>
          </tr>))}
      </tbody> */} 

      <tbody>
        {satDataList}
      </tbody> {/*Why doesn't this work?*/}
    </table>
  );
};

export default Table;

