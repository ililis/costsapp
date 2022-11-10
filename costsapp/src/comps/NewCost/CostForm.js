import React, { useState } from 'react';
import './CostForm.css';

const CostForm = (props)  => {

  const [inputName, setInputName] = useState('');
  const [inputAmount, setInputAmount] = useState('');
  const [inputDate, setInputDate] = useState('');

  // const [showNewCost, setShowNewCost] = useState(false);


  // const [userInput, SetUserInput] = useState({
  //   name: '',
  //   amount: '',
  //   date: ''
  // });

  const nameChangeHandler = (event) => {
    setInputName(event.target.value);

    // SetUserInput({
    //   ...userInput,
    //   name: event.target.value
    // });

    // setUserInput((previousState) => {
    //   return {
    //     ...previousState,
    //     name: event.target.value
    //   }
    // })
  };
  const amountChangeHandler = (event) => {
    setInputAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setInputDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      description: inputName,
      amount: inputAmount,
      date: new Date(inputDate)
    };

    // console.log(costData);
    props.onSaveCostData(costData);
    setInputName('');
    setInputAmount('');
    setInputDate('');
    
    // setShowNewCost(false);
  };

  // const cancelHandler = (event) => {
  //   setShowNewCost(false);
  // };

  // const openNewCostHandler = (event) => {
  //   setShowNewCost(true);
  // };


  // if (showNewCost) {
    return (
      <form onSubmit={submitHandler}>
        <div className='new-cost__controls'>
          <div className='new-cost__control'>
              <label>Название</label>
              <input type='text' value={inputName} onChange={nameChangeHandler}/>
          </div>
          <div className='new-cost__control'>
              <label>Сумма</label>
              <input type='number' value={inputAmount} min='0.01' step='0.01' onChange={amountChangeHandler}/>
          </div>
          <div className='new-cost__control'>
              <label>Дата</label>
              <input type='date' value={inputDate} min='2019-01-01' max='2022-12-31' onChange={dateChangeHandler}/>
          </div>
          <div className='new-cost__actions'>
            <button type='submit'>Добавить расход</button>
            <button type='reset' onClick={props.onCancel}>Отмена</button>
          </div>
        </div>
      </form>
    );
  // }

  // return (

  //     <button type='button' onClick={openNewCostHandler}>Добавить расход</button>

  // );
  
};

export default CostForm;