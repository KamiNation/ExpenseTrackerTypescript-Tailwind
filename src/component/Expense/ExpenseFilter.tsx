import { propsFromExpenseItem } from '../ExpenseInterface/expenseInterface'




const ExpenseFilter: React.FC<propsFromExpenseItem> = ({ onChangeFilter, selected }) => {


  const dropDownHandler: React.ChangeEventHandler<HTMLSelectElement> = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChangeFilter(event.target.value)
  }


  return (

    <div className='text-white py-0 px-4'>
      
      <div className='flex w-full items-center justify-between my-4 mx-0'>
        <label htmlFor="filter" className='font-bold mb-2'>Filter by year</label>
        <select value={selected} onChange={dropDownHandler} className='py-2 px-12 font-bold rounded-md text-black'>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>

  )
}

export default ExpenseFilter