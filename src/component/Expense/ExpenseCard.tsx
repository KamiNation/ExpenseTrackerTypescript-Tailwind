import { PropsWithChildren } from "react"

const ExpenseCard: React.FC<PropsWithChildren> = (props) => {

  return (
    <div
      className="flex justify-between 
  items-center p-2 my-4 mx-0
   bg-customGray rounded-xl"
    >
      {props.children}
    </div>
  )
}

export default ExpenseCard