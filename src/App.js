import React, { useState } from "react";
import InputForm from "./components/InputForm";
import RevenueTable from "./components/RevenueTable";
import RevenueSummary from "./components/RevenueSummary";
import "./styles/global.css";

function App() {
  const [revenueData, setRevenueData] = useState(null);

  const handleCalculate = (data) => {
    setRevenueData(data);
  };

  return (
    <div className="container">
      <h1>Revenue Upside Calculator</h1>
      <InputForm onCalculate={handleCalculate} />
      {revenueData && (
        <>
          <RevenueTable data={revenueData} />
          <RevenueSummary data={revenueData} />
        </>
      )}
    </div>
  );
}

export default App;
