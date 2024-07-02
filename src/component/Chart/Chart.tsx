import { propsFromExpenseChart } from "../ExpenseInterface/expenseInterface";

import ChartBar from "./ChartBar";

const Chart: React.FC<propsFromExpenseChart> = ({ dataPoints }) => {


  const dataPointValues = dataPoints.map(datapoint => datapoint.value);

  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="p-4 rounded-xl bg-customLightPurple text-center flex justify-around h-40 border border-solid">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
