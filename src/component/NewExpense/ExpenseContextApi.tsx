import { PropsWithChildren, useState, useEffect } from "react"
import { FormInterface, expenseContext } from "../ExpenseInterface/expenseInterface"

// This type expenseContextObj is for the value in the provider below

const { Provider } = expenseContext

const ExpenseContextProvider: React.FC<PropsWithChildren> = ({ children }) => {


    const [formExpenseData, setFormExpenseData] = useState<FormInterface>({
        title: '',
        amount: 2000,
        date: ''
    });

    useEffect(() => {
        console.log('Updated formExpenseData:', formExpenseData);
    }, [formExpenseData]);




    const updateSetFormHandler = (dataFromExpenseForm: FormInterface) => {
        setFormExpenseData(dataFromExpenseForm)
    }


    return (
        // This value here from type expenseContextObj
        <Provider value={{ formExpenseData, updateSetFormHandler }}>
            {children}
        </Provider>
    )
}

export default ExpenseContextProvider