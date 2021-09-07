import { useSelector, useDispatch } from "react-redux";
import { reset } from "../store/slices/billSlice";

const CalcOutput = (props) => {
  const splitTip = useSelector((state) => state.bill.splitTip);
  const splitTotal = useSelector((state) => state.bill.splitTotal);
  const dispatch = useDispatch();

  return (
    <div className="bg-neutral-veryDarkCyan sm:w-1/2 rounded-xl p-7 flex flex-col justify-between text-primary-strongCyan">
      <div>
        <div className="flex justify-between my-5">
          <p className="flex flex-col text-sm text-neutral-lightGrayishCyan2 font-semibold">
            Tip Amount <span className="text-primary-strongCyan">/ person</span>
          </p>
          <h1 className="text-4xl font-bold">${splitTip.toFixed(2)}</h1>
        </div>

        <div className="flex justify-between mt-8">
          <p className="flex flex-col text-sm text-neutral-lightGrayishCyan2 font-semibold">
            Total <span className="text-primary-strongCyan">/ person</span>
          </p>
          <h1 className="text-4xl font-bold">${splitTotal.toFixed(2)}</h1>
        </div>
      </div>
      <button
        onClick={() => dispatch(reset())}
        className="w-full bg-primary-strongCyan mt-6 p-2 rounded-md text-neutral-veryDarkCyan font-bold text-lg uppercase"
      >
        Reset
      </button>
    </div>
  );
};

export default CalcOutput;
