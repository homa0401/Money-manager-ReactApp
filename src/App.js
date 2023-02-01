import React, { useState } from "react";
import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";

const INITIAL_COSTS = [
    {
      id: "c1",
      date: new Date(2021, 2, 12),
      description: "Refrigerator",
      amount: 999.99,
    },
    {
      id: "c2",
      date: new Date(2021, 11, 25),
      description: "MackBook",
      amount: 1254.75,
    },
    {
      id: "c3",
      date: new Date(2021, 4, 1),
      description: "Jeans",
      amount: 49.99,
    },
  ];

function App() {
  
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts([cost, ...costs]);
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
      {/* <CostItem 
      date={costs[0].date} 
      description={costs[0].description} 
      amount={costs[0].amount}
      />
      <CostItem 
      date={costs[1].date} 
      description={costs[1].description} 
      amount={costs[1].amount}
      />
      <CostItem 
      date={costs[2].date} 
      description={costs[2].description} 
      amount={costs[2].amount}
      /> */}
    </div>
  );
}

export default App;
