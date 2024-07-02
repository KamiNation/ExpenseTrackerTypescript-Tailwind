import {
    useContext, 
    useState, useEffect
} from "react";
import {
    FormInterface,
    expenseContext,
    onCancelFromNewExpense

} from "../ExpenseInterface/expenseInterface";




const ExpenseForm: React.FC<onCancelFromNewExpense> = ({ onCancel }) => {



    const [userDetails, setUserDetails] = useState<FormInterface>({
        title: 'New Book',
        amount: 2000,
        date: ''
    });

    const { title, amount, date } = userDetails
    const { updateSetFormHandler } = useContext(expenseContext)



    const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;

        try {
            setUserDetails((prev) => ({
                ...prev,
                [name]: value
            }))

        } catch (error) {
            console.log(error);
        }
    }


    useEffect(() => {
        console.log('Form userDetails =>:', userDetails);
    }, [userDetails]);




    const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault();

            if (title && amount && date) {

                updateSetFormHandler(userDetails)

                setUserDetails({
                    title: '',
                    amount: 2000,
                    date: ''
                })
            } else {
                console.log("Pls fill all fields");

            }
        } catch (error) {
            console.log("Erro submitting form", error);
        }
    }



    return (

        <>
            <form onSubmit={submitHandler}>
                <div className="flex flex-wrap gap-4 mb-4 text-left ">
                    <div className="sm:w-80 sm:max-w-full">
                        <label htmlFor="title" className="font-bold mb-2 block">Title: </label>
                        <input
                            type="text"
                            className="p-2 rounded-md border border-solid border-customColor w-80 max-w-full "
                            name="title"
                            id="title"
                            value={title}
                            onChange={changeHandler} />
                    </div>

                    <div className="sm:w-80 sm:max-w-full">
                        <label htmlFor="amount" className="font-bold mb-2 block">Amount: </label>
                        <input
                            type="number"
                            className="p-2 rounded-md border border-solid border-customColor w-80 max-w-full"
                            name="amount"
                            id="amount"
                            value={amount}
                            onChange={changeHandler}
                            min="0.01"
                            step="0.01" />
                    </div>

                    <div className="sm:w-80 sm:max-w-full">
                        <label htmlFor="date" className="font-bold mb-2 block">Date: </label>
                        <input
                            type="date"
                            className="p-2 rounded-md border border-solid border-customColor w-80 max-w-full"
                            name="date"
                            id="date"
                            value={date}
                            onChange={changeHandler}
                            min="2021-01-01"
                            max="2024-12-31" />
                    </div>
                </div>

                <div className="p-4 flex items-end justify-end md:justify-center md:items-center">
                    <div>
                        <button type="button" onClick={onCancel} className="text-customPurpleBgColor pr-8">Cancel</button>
                        <button type="submit" onClick={(e) => console.log(e.type)} className="p-4 rounded-xl bg-customPurpleBgColor text-white">Add Expense</button>
                    </div>
                </div>
            </form>



        </>

    )
}

export default ExpenseForm

