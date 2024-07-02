import ExpenseHome from "./Expense/ExpenseHome"
import ExpenseContextProvider from './NewExpense/ExpenseContextApi'







const IndexExpense = () => {
  return (
    <ExpenseContextProvider>
      <ExpenseHome  />
    </ExpenseContextProvider>
  )
}

export default IndexExpense