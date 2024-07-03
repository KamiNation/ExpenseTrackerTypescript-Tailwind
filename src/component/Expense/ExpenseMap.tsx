import ExpenseItem from "./ExpenseItem"
import { expense } from "./ExpenseCollection"
import { Expense, exFilterSelected, expenseContext } from "../ExpenseInterface/expenseInterface"
import { useContext, useEffect, useState } from "react"
import ExpenseFilter from "./ExpenseFilter"
import ExpenseChart from "./ExpenseChart"



const ExpenseMap: React.FC = () => {

    const [filteredYear, setFilteredYear] = useState<string>("2024")

    const filterChangeHandler = (selectedYear: exFilterSelected) => {
        setFilteredYear(selectedYear)
    }

    const [expenseArrayNew, setExpenseArrayNew] = useState<Expense[]>(expense)

    const { formExpenseData } = useContext(expenseContext)
    const { title, amount, date } = formExpenseData


    useEffect(() => {
        if (title && amount && date) {
            setExpenseArrayNew((prevState) => {
                const newExpense: Expense = {
                    id: `e${prevState.length + 1}`,
                    title: title,
                    amount: amount,
                    date: new Date(date)
                };
                // console.log(newExpense);
                return [newExpense, ...prevState]
            });
        }
    }, [title, amount, date]);

    const filteredResult = expenseArrayNew.filter((filter) => {
        return filter.date.getFullYear().toString() === filteredYear
    })





    return (
        // You need to make an edit here 
            <div className="bg-black p-4 rounded-lg shadow mx-auto my-8  w-custom-50rem max-w-custom-95%">
                <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
                <ExpenseChart expenseChartBar = {filteredResult} />
                {

                    filteredResult.length === 0 ? (
                        <h2 className="text-white text-center">No Expenses found for chosen year</h2>

                    ) : <ul className="list-none p-0">
                        {
                        filteredResult.map((ex: Expense) =>
                            <ExpenseItem
                                key={ex.id}

                                title={ex.title}

                                amount={ex.amount}

                                date={ex.date}

                            />
                        )
                    }
                    </ul>
                }
            </div>
        
    )
}

export default ExpenseMap


