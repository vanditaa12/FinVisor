const useRevenueCalculator = () => {
    return (currentRevenue, growthRate) => {
      const projections = [];
      let totalRevenue = 0;
      let highestGrowth = 0;
      let highestGrowthYear = 0;
  
      for (let i = 1; i <= 5; i++) {
        const revenue = currentRevenue * Math.pow(1 + growthRate / 100, i);
        projections.push(revenue);
        totalRevenue += revenue;
  
        if (i > 1) {
          const growth = revenue - projections[i - 2];
          if (growth > highestGrowth) {
            highestGrowth = growth;
            highestGrowthYear = i - 1;
          }
        }
      }
  
      const averageGrowth = (growthRate * 5) / 5;
  
      return { projections, totalRevenue, averageGrowth, highestGrowthYear };
    };
  };
  
  export default useRevenueCalculator;
  