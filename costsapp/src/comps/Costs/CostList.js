import './CostList.css';
import CostItem from './CostItem';

const CostList = (props) => {

  if (props.costs.length === 0) {
    return <h2 className='cost-list__fallback'>No one spend in this year</h2>;
  }
  else {
    return (
        <ul className='cost-list'>
          {
            props.costs.map(elem => (
              <CostItem 
                key={elem.id}
                date={elem.date} 
                description={elem.description} 
                amount={elem.amount} 
              />
            ))}
        </ul>
    );
  }
  
  
}

export default CostList;