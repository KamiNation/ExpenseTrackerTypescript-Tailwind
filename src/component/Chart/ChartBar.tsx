interface propsFromChart {
  value: number;
  maxValue: number;
  label: string;
}

const ChartBar: React.FC<propsFromChart> = ({ value, maxValue, label }) => {
  let barFillHeight: string | number = "0%";

  const percent = "%"

  if (maxValue > 0) {
    barFillHeight = Math.round((value / maxValue) * 100) + percent;
  }

  return (
    <div className="h-full flex flex-col items-center">
      <div
        className="h-full w-full border border-solid 
      border-customDarkgray bg-customLightpurple 
      overflow-hidden flex flex-col justify-end 
      rounded-2xl">

        <div style={{ height: barFillHeight, backgroundColor: "green " }}
          className="bg-customPurpleShade w-full 
        transition-all duration-300 ease-out 
        rounded-lg">

        </div>
      </div>
      <div className="font-bold text-xs text-center">{label}</div>
    </div>
  );
};

export default ChartBar;