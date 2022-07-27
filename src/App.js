import { useState } from "react";
import "./App.css";
import Counter from "./Counter";
import RandomCard from "./RandomCard";
import IsOddEven from "./IsOddEven";

function App() {
  let [count, setCount] = useState(0);
  const cardValues = [20, 35, 33, 28];
  const [pickValue, setPickValue] = useState(null);
  //   counter increament
  const increment = () => count >= 0 && setCount((prev) => prev + 1);
  //   counter decrement
  const decrement = () => count > 0 && setCount((prev) => prev - 1);
  //   counter reset
  const reset = () => setCount(0);
  return (
    <div className="App">
      <Counter
        setCount={setCount}
        count={count}
        increment={increment}
        decrement={decrement}
        reset={reset}
      />
      <IsOddEven pickValue={pickValue} />
      <RandomCard cardValues={cardValues} setPickValue={setPickValue} />
    </div>
  );
}

export default App;
