import CostItem from "./CostItem.js";
import "./Costs.css";
import Card from "../UI/Card.js";
import CostsFilter from "../CostsFilter/CostsFilter.js";
import React, { useState } from "react";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        {props.costs.map((cost) => (
          <CostItem
            key={cost.id}
            date={cost.date}
            description={cost.description}
            amount={cost.amount}
          />
        ))}
      </Card>
    </div>
  );
}

export default Costs;
