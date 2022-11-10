import React, { useState } from 'react';
import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props)  => {

  const [isFormVisible, setIsFormVisible] = useState(false);

  const saveCostDataHandler = (inputCostData) => {

    const costData = {
      ...inputCostData,
      id: Math.random().toString()
    }
    props.onAddCost(costData);
    setIsFormVisible(false);
  }

  const inputCostDataHandler = (event) => {
    setIsFormVisible(true);
  };

  const cancelCostHandler = (event) => {
    setIsFormVisible(false);
  };

  return (
    <div className='new-cost'>
      {!isFormVisible && <button onClick={inputCostDataHandler} type='button'>Добавить расход</button>}
      {isFormVisible && <CostForm onCancel={cancelCostHandler} onSaveCostData = {saveCostDataHandler} />}
    </div>
    )
}

export default NewCost;