import "./Costs.css";
import Card from "../UI/Card.js";
import CostsFilter from "../CostsFilter/CostsFilter.js";
import React, { useState } from "react";
import CostList from "./CostsList.js";

function Costs(props) {
  const [selectedYear, setSelectedYear] = useState("2021");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.date.getFullYear().toString() === selectedYear;
  });

  return (
    <div>
      <Card className="costs">
        <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
        <CostList costs={filteredCosts} />
      </Card>
    </div>
  );
}

export default Costs;
