import { useState } from "react";

export default function Wheel() {
  const [number, setNumber] = useState(null);
  // const [timerId, setTimerId] = useState();

  const spinWheel = () => {
    const min = 1;
    const max = 10;

    const newNumber = min + Math.floor(Math.random() * (max + 1 - min));
    setNumber(newNumber);
  };

  return (
    <div className="wheel">
      <button onClick={spinWheel} id="spin">
        Spin!
      </button>
      <div className="arrow">↓</div>
      <div
        className="wheel__numbers"
        style={{ transform: `rotate(${number * 360}deg)` }}
      >
        <div className="one">1</div>
        <div className="two">2</div>
        <div className="three">3</div>
        <div className="four">4</div>
        <div className="five">5</div>
        <div className="six">6</div>
        <div className="seven">7</div>
        <div className="eight">8</div>
        <div className="nine">9</div>
        <div className="ten">10</div>
      </div>
    </div>
  );
}
