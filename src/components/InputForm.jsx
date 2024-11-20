import React, { useState } from "react";
import "../styles/InputForm.css";
import calculatorImage from "../assets/calculator.png"; // Add the gradient image to the assets folder

function InputForm({ onCalculate }) {
  const [currentRevenue, setCurrentRevenue] = useState("");
  const [growthRate, setGrowthRate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const growth = parseFloat(growthRate) / 100;
    const data = Array.from({ length: 5 }, (_, i) => ({
      year: i + 1,
      revenue: parseFloat(currentRevenue) * Math.pow(1 + growth, i + 1),
    }));
    onCalculate(data);
  };

  return (
    <div className="container">
      <h1>Revenue Upside Calculator</h1>
      <div className="form-image">
        <img src={calculatorImage} alt="Calculator" />
      </div>
      <form onSubmit={handleSubmit}>
        <label>
          Current Revenue:
          <input
            type="number"
            placeholder="Enter current revenue"
            value={currentRevenue}
            onChange={(e) => setCurrentRevenue(e.target.value)}
          />
        </label>
        <label style={{ color: '#000000' }}>
  Annual Growth Rate (%):
  <input
    type="number"
    placeholder="Enter annual growth rate"
    value={growthRate}
    onChange={(e) => setGrowthRate(e.target.value)}
    style={{ color: '#000000' }} // This makes the input text black
  />
</label>
<button type="submit" style={{ color: '#000000' }}>Calculate</button>
      </form>
    </div>
  );
}

export default InputForm;
