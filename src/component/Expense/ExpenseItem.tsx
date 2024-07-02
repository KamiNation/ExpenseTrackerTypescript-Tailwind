import ExpenseCard from "./ExpenseCard"
import ExpenseDate from "./ExpenseDate"
import {  expenseInterface } from '../ExpenseInterface/expenseInterface'



const ExpenseItem: React.FC<expenseInterface> = ({ title, amount, date }) => {



    return (
        <li>
            <ExpenseCard >
                <ExpenseDate date={date} />
                <div className="flex flex-col-reverse gap-4 items-end justify-start flex-1 md:flex-row md:items-center md:justify-start md:flex-1 ">
                    <h2 className="text-base flex-1 my-0 mx-4 text-white md:text-sm">{title}</h2>
                    <div className="text-white text-base font-bold bg-customPurple border border-white p-2 rounded-lg md:text-sm md:py-2 md:px-6">${amount}</div>
                </div>
            </ExpenseCard>
        </li>
    )
}

export default ExpenseItem 