import './CostFilter.css';


const CostFilter = (props) => {
  const yearChangeHandler = (event) => {
    props.onChangeYear(event.target.value);
  };


  return (
    <div className="costs-filter">
      <div className="costs-filter__control">
        <h3>Выбор По Году</h3>
        <select value={props.year} onChange={yearChangeHandler}>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </div>
  );
}

export default CostFilter;
  