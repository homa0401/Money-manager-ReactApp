import Costs from "./components/Costs";

function App() {

  const costs = [
    {
      date: new Date(2021, 2, 12),
      description: 'Refrigerator',
      amount: 999.99
    },
    {
      date: new Date(2021, 11 , 25),
      description: 'MackBook',
      amount: 1254.75
    },
    {
      date: new Date(2021, 4, 1),
      description: 'Jeans',
      amount: 49.99
    }
  ]

  return (
    <div>
      <h1>Start learning React!</h1>
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
