import CalcInput from "./CalcInput";
import CalcOutput from "./CalcOutput";

const Calculator = (props) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between sm:space-x-10 bg-neutral-white w-11/12 rounded-3xl p-5 max-w-4xl shadow-2xl ">
      <CalcInput />
      <CalcOutput />
    </div>
  );
};

export default Calculator;
