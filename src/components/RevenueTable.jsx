// import React from "react";
// import "../styles/RevenueTable.css";

// const RevenueTable = ({ data }) => {
//   // Ensure `data` is not null or undefined before mapping
//   if (!data || !data.projectedRevenue) {
//     return <p>No data available. Please calculate first!</p>;
//   }

//   return (
//     <table className="revenue-table">
//       <thead>
//         <tr>
//           <th>Year</th>
//           <th>Revenue</th>
//         </tr>
//       </thead>
//       <tbody>
//         {data.projectedRevenue.map((entry, index) => (
//           <tr key={index}>
//             <td>{entry.year}</td>
//             <td>${entry.revenue.toFixed(2)}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );
// };

// export default RevenueTable;


import React from "react";
import "../styles/RevenueTable.css"; // Update your CSS file if necessary

function RevenueTable({ data }) {
  return (
    <div className="table-container">
      <h3>Year-wise Revenue</h3>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Projected Revenue</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.year}>
              <td>{item.year}</td>
              <td>${item.revenue.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RevenueTable;
