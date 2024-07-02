import { useState } from "react"
import ExpenseForm from "./ExpenseForm"

const NewExpense: React.FC = () => {

  const [isEditing, setIsEditing] = useState(false)


  const startEditingHandler = () => {
    setIsEditing(true);
  };



  const stopEditingHandler = () => {
    setIsEditing(false);
  };


  return (
    <div className="bg-customBgColor p-4 my-8 mx-auto w-custom-50rem max-w-custom-95% rounded-xl text-center shadow-custom ">
      {
        !isEditing && (
          <button
            onClick={startEditingHandler}
          className="bg-customPurpleBgColor p-4 rounded-lg text-white"
          >
            Add New Expense
          </button>)
      }{
        isEditing && (
          <ExpenseForm 
          onCancel={stopEditingHandler}
          />
        )
      }
    </div>
  )
}

export default NewExpense


