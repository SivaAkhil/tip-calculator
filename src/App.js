import Calculator from "./Components/Calculator";
import LogoImage from "./asserts/tip-calculator-app-main/images/logo.svg";
import { Provider } from "react-redux";
import store from "./store/store";

function App() {
  return (
    <Provider store={store}>
      <div className="bg-neutral-lightGrayishCyan min-h-screen  font-spaceMono flex flex-col items-center justify-evenly sm:space-x-2 ">
        <img src={LogoImage} alt="" className="w-20 my-5" />
        <Calculator />
      </div>
    </Provider>
  );
}

export default App;
