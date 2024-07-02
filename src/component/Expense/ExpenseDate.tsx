import { expenseDateprops } from "../ExpenseInterface/expenseInterface";


const ExpenseDate: React.FC<expenseDateprops> = ({ date }) => {

    const month = date.toLocaleString('en-us', { month: "long" })
    const year = date.getFullYear()
    const day = date.toLocaleString('en-us', { day: "2-digit" })

    return (
        <div className="flex flex-col w-20 h-20 
        border border-solid border-customLightGray 
        bg-customDarkGray text-white rounded-xl 
        items-center justify-center">
            <div className="text-xs font-bold"> {month} </div>
            <div className="text-xs"> {year} </div>
            <div className="font-bold"> {day}</div>
        </div>
    )
}

export default ExpenseDate