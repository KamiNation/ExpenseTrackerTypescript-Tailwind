# React TS + Tailwind

 ```const [titles, setTitles] = useState<string>(title)

 const clickHandler = () => {
 setTitles("Update iya yin")

 }


 <button onClick={clickHandler}>Change Title</button>

  const NewExpense: React.FC<propsFromExpenseHome> = ({getExpenseDataFromNewEx}) => {


 const enteredDataHandler = (enteredDataFromForm: expenseInterface) => {
 const expenseData = {
 ...enteredDataFromForm,
 id: Math.random.toString()
 }

 getExpenseDataFromNewEx(expenseData)
 console.log(expenseData);
 } 


 return (
 <div className="bg-gray-400 p-4 mx-auto my-8 w-96 rounded-xl text-center shadow-sm">
 <ExpenseForm getExFormEnteredData={enteredDataHandler} />
 </div>
 )
 }


 const ExpenseForm: React.FC<propsFromNewExpense> = ({ getExFormEnteredData }) => {

 const [userDetails, setUserDetails] = useState<expenseInterface>({
 title: '',
 amount: '',
 date: ''
 });

 const changeHandler: React.ChangeEventHandler<HTMLInputElement> = (e: React.ChangeEvent<HTMLInputElement>) => {
 const value = e.target.value
 const name = e.target.name

 setUserDetails((prev) => ({
 ...prev,
 [name]: value
 }))


 }

 const { updateSetFormHandler } = useContext(expenseContext)

 const submitHandler = (event: React.MouseEvent<HTMLFormElement>) => {

 event.preventDefault();

 const { title, amount, date } = userDetails

 const expenseData = {
 title: title,
 amount: amount,
 date: date
 }

 updateSetFormHandler(expenseData)

 getExFormEnteredData(expenseData);
 setUserDetails({
 title: '',
 amount: '',
 date: ''
 })

 console.log(expenseData);
 }

 const { title, amount, date } = userDetails


 return (

 <>
 <form onSubmit={submitHandler}>
 <div className="flex flex-wrap gap-4 mb-4 text-left">
 <div className="border border-solid border-y-green-500 w-80 p-2 max-w-full">
 <label htmlFor="title" className="font-bold mb-2 block">Title: </label>
 <input type="text" name="title" id="title" value={title} onChange={changeHandler} />
 </div>

 <div className="border border-solid border-y-green-500 w-80 p-2 max-w-full">
 <label htmlFor="amount" className="font-bold mb-2 block">Amount: </label>
 <input type="number" name="amount" min="0.01" step="0.01" id="title" value={amount} onChange={changeHandler} />
 </div>

 <div className="border border-solid border-y-green-500 w-80 p-2 max-w-full">
 <label htmlFor="date" className="font-bold mb-2 block">Date: </label>
 <input name="date" type="date" id="date" min="2021-01-01" max="2024-12-31" value={date} onChange={changeHandler} />
 </div>

 <div className="text-right">
 <button type="submit">Add Expense</button>
 </div>
 </div>
 </form>

 <div>
 <h2>title: {title}</h2>
 <h2> amount: {amount}</h2>
 <h2>  date: {date}</h2>
 </div>
 </>
 )
  }

  const ExpenseHome: React.FC = () => {

  const addExpenseHandler = (expenseDataFromNewExpense:expenseInterface ) => {
    console.log(expenseDataFromNewExpense);
    
  }


  return (
    <div>
        <NewExpense getExpenseDataFromNewEx = {addExpenseHandler}/>
        <ExpenseMap/>
    </div>
  )
}




```


{filteredResult.lenght === 0 && <p>NO expense found</p>}
 Using the && operator will retun the <p> No found </p> as an
 overal check if the first condition is met (filteredResult.lenght === 0 )
{filteredResult.lenght > 0 && filteredResult.map((filter)=>(<ExpenseItem key={filter.id} title={filter.title}>))}

The above is the same as below

let filterContent: JSX.Element[] | JSX.Element = <p>NO Expenses found for chosen year </p>

    if (filteredResult.length > 0) {
        filterContent = filteredResult.map((ex: Expense) =>
            <ExpenseItem
                key={ex.id}

                title={ex.title}

                amount={ex.amount}

                date={ex.date}

            />
        )
    }


   {/* {
                    expenseArrayNew.map((ex: Expense) =>
                        <ExpenseItem
                            key={ex.id}

                            title={ex.title}

                            amount={ex.amount}

                            date={ex.date}

                        />
                    )
                } */}    

## When you come across the below

### Type '{ dataPoints: DataPoint[]; }' is not assignable to type 
### 'IntrinsicAttributes & propsFromExpenseChart'. Property 'dataPoints' 
### does not exist on type 'IntrinsicAttributes & propsFromExpenseChart'. 
### Did you mean 'dataPoint'? as aresult of the below while you are
### trying to pass a property to a component

```
return (
    <Chart dataPoints={chartDataPoint}/>
  )

```

### You have to delcare an interface in the component you are assiging 
### a property to, in this case the Chart component like the below

```
interface propsFromExpenseChart {
    dataPoint: DataPoint[]
}

```
### and use it like the below

```
const Chart: React.FC<propsFromExpenseChart> = ({dataPoints}) => 

```
