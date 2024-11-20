// import React from "react";
// import "../styles/RevenueSummary.css";

// function RevenueSummary({ data }) {
//   const { totalRevenue, averageGrowth } = data;

//   return (
//     <div className="summary">
//       <h3>Summary</h3>
//       <p>Total Revenue (5 years): ${totalRevenue.toLocaleString()}</p>
//       <p>Average Annual Growth: {averageGrowth.toFixed(2)}%</p>
//     </div>
//   );
// }

// export default RevenueSummary;


import React from "react";
import "../styles/RevenueSummary.css";

function RevenueSummary({ data }) {
  // Destructure data and provide default values if undefined
  const { totalRevenue = 0, averageGrowth = 0 } = data || {};

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p>Total Revenue (5 years): ${totalRevenue.toLocaleString()}</p>
      <p>Average Annual Growth: {averageGrowth.toFixed(2)}%</p>
    </div>
  );
}

export default RevenueSummary;
