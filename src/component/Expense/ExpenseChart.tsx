import Chart from "../Chart/Chart";
import { chartDataPoint } from "../Expense/ExpenseCollection";
import { Expense } from "../ExpenseInterface/expenseInterface";

interface propsFromExpenseMap {
  expenseChartBar: Expense[]
}



const ExpenseChart: React.FC<propsFromExpenseMap> = ({ expenseChartBar }) => {

  for (const expenseChartBars of expenseChartBar) {
    const expenseMonth = expenseChartBars.date.getMonth(); // starting at 0 => January => 0
    chartDataPoint[expenseMonth].value += expenseChartBars.amount
  }



  return <Chart dataPoints={chartDataPoint} />;
};

export default ExpenseChart;
