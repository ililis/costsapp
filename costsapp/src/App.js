import CostItemPack from "./comps/Costs/CostItemPack";
import NewCost from "./comps/NewCost/NewCost";
// import Diagram from "./comps/Diagram/Diagram";
import React, {useState} from 'react';

const INITIAL_COSTS = [
  {
    id: 'c1',
    date: new Date(2022, 0, 12),
    description: 'Холодильник',
    amount: 9000
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 12),
    description: 'Стол',
    amount: 2400
  },{
    id: 'c3',
    date: new Date(2021, 2, 35),
    description: 'Кеки',
    amount: 900.50
  }
];


const App = () => {

  const [costs, setCosts] =  useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts(prevCosts => {
      return [cost, ...prevCosts]
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler}/>
      <CostItemPack items={costs}/>
    </div>
  );

}

export default App;
