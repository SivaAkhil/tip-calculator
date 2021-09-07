import PersonIcon from "../asserts/tip-calculator-app-main/images/icon-person.svg";
import DollarIcon from "../asserts/tip-calculator-app-main/images/icon-dollar.svg";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { calculateTip } from "../store/slices/billSlice";

const CalcInput = (props) => {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(1);
  const [tip, setTip] = useState(5);
  const resetTrigger = useSelector((state) => state.bill.resetTrigger);
  const dispatch = useDispatch();

  const handleBill = (e) => {
    if (e.target.value < 0) return;
    setBill(e.target.value);
  };

  const handlePeople = (e) => {
    if (e.target.value < 1) return;
    setPeople(e.target.value);
  };

  const handleTip = (t) => {
    if (typeof t === "string") return;
    setTip(t);
  };

  useEffect(() => {
    dispatch(calculateTip({ bill, people, tip }));
  }, [bill, people, tip]);

  useEffect(() => {
    setTip(5);
    setBill(0);
    setPeople(1);
  }, [resetTrigger]);

  const tipPercent = [5, 10, 15, 25, 50, "custom"];

  return (
    <div className="flex flex-col justify-between p-4  sm:w-1/2 space-y-8">
      <div>
        <p className="pb-3">Bill</p>
        <div className="flex bg-neutral-lightGrayishCyan2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-veryDarkCyan rounded-md">
          <img src={DollarIcon} alt="" className="m-4" />
          <input
            type="number"
            className="w-full bg-transparent text-2xl text-right font-semibold border-none focus:ring-transparent"
            value={bill}
            onChange={handleBill}
          />
        </div>
      </div>

      <div>
        <p className="pb-3">Select Tip %</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {tipPercent.map((t) => {
            return (
              <button
                key={t}
                className="bg-neutral-veryDarkCyan
                 text-md font-semibold text-neutral-lightGrayishCyan2 py-2 rounded-md
                 hover:bg-primary-strongCyan hover:text-neutral-veryDarkCyan "
                onClick={() => handleTip(t)}
              >
                {t}
                {typeof t === "number" && "%"}
              </button>
            );
          })}
        </div>
      </div>

      <div>
        <p className="pb-3">Number of People</p>
        <div className="flex bg-neutral-lightGrayishCyan2 focus-within:ring-2 focus-within:ring-inset focus-within:ring-neutral-veryDarkCyan rounded-md">
          <img src={PersonIcon} alt="" className="m-4 rounded-md" />
          <input
            type="number"
            className="w-full bg-transparent text-right text-2xl font-semibold text-neutral-veryDarkCyan border-none focus:ring-transparent"
            value={people}
            onChange={handlePeople}
          />
        </div>
      </div>
    </div>
  );
};

export default CalcInput;
