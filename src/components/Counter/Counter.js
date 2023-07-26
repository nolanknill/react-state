import { useState } from "react";
import "./Counter.scss";

function Counter() {
  const [count, setCount] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const handleIncreaseClick = () => {
    setCount(count + 1);
  }

  const handleDecreaseClick = () => {
    setCount(count - 1);
  }

  return (
    <div className={`counter ${darkMode ? "counter--dark-mode" : ""}`}>
      <h1># Clicks: {count}</h1>
      <button onClick={handleIncreaseClick}>
        Click me to increase count
      </button>
      <button onClick={handleDecreaseClick}>
        Click me to decrease count
      </button>
      <button onClick={() => { setDarkMode(!darkMode); }}>
        Toggle Dark Mode
      </button>
    </div>
  )
}

export default Counter;