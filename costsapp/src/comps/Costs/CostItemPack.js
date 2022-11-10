import './CostItemPack.css';
import Card from '../UI/Card';
import CostFilter from './CostFilter';
import CostList from './CostList';
import React, {useState} from 'react';
import CostsDiagram from './CostsDiagram';

const CostItemPack = (props) => {

  const [inputYear, setInputYear] = useState('2021');

  const changeYearHandler = (year) => {
    setInputYear(year);
  };

  const filteredCosts = props.items.filter(elem => elem.date.getFullYear().toString() === inputYear);

  return (
    <div>
      <Card className='costs'>
        <CostFilter onChangeYear = {changeYearHandler} year = {inputYear} />
          {/* {costsContent} */}
        <CostsDiagram costs = {filteredCosts} />
        <CostList costs = {filteredCosts}/>
      </Card>
    </div>
  );
}

export default CostItemPack;
  

      {/* <CostItem
        date={costs[0].date}
        description={costs[0].description}
        amount={costs[0].amount}
      ></CostItem>
      <CostItem></CostItem>
      <CostItem></CostItem>
      <div className="hell">
        <div>123</div>
        <div className="hell2">
          <div>123</div>
          <div>123</div>
        </div>
      </div> */}