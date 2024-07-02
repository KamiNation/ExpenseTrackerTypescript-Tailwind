import { createContext } from "react"

export type exFilterSelected = string;

export type propsFromExpenseItem = {
    onChangeFilter: (selectedYear: exFilterSelected) => void
    selected: string
}



export interface Expense {
    id?: string
    title: string
    amount: number
    date: Date
}


export interface FormInterface {
    title: string
    amount: number
    date: string
}


export interface DataPoint {
    label: string
    value: number
}

export interface onCancelFromNewExpense {
    onCancel: () => void
}



export interface propsFromExpenseChart {
    dataPoints: DataPoint[]
}


export interface expenseDateprops {
    date: Date
}


export interface expenseInterface {
    title: string
    amount: number
    date: Date
}




type expenseContextObj = {
    formExpenseData: FormInterface;
    updateSetFormHandler: (dataFromExpenseForm: FormInterface) => void
}



export const expenseContext = createContext<expenseContextObj>({
    //   Here, you specify the default values for the createContext
    // and ensure it conforms with the type expenseContextObj  
    formExpenseData: {
        title: '',
        amount: 2000,
        date: ''
    },
    updateSetFormHandler: () => { }
})
// type and interface for context ends here


























































































// export interface expenseProps {
//   title: string
//   amount: number
//   date: Date
// }














// // type for context starts here




// export type propsFromNewExpense = { getExFormEnteredData: (enteredDataFromForm: expenseInterface) => void }

// export type propsFromExpenseHome = { getExpenseDataFromNewEx: (expenseDataFromNewExpense: expenseInterface) => void }


