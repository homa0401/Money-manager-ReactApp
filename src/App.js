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
    setCosts((prevCosts) => {
      return [cost, ...prevCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
}

export default App;
