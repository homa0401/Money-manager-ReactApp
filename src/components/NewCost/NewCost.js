import './NewCost.css';
import CostForm from './CostForm';

const NewCost = (props) => {

    const saveCostDataHandler = (inputCostData) => {

        const costData = {
            ...inputCostData,
            id: Math.random().toString() ,
        }

        props.onAddCost(costData);
    }

    return (
        <div className='new-cost'>
            <CostForm onSaveCostData={saveCostDataHandler} />
        </div>
    )
}

export default NewCost;