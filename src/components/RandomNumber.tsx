import React, { useState } from "react";

export default function RandomNumber() {
  const [numbers, setNumbers] = useState(undefined);
  const [timerId, setTimerId] = useState();

  const add = (min, max) => {
    setNumbers(Math.floor(min + Math.random() * (max + 1 - min)));
  };
  // const start = () => setTimerId(setInterval(add, 500));
  // const stop = () => (clearInterval(timerId), setTimerId(null));
  const clear = () => setNumbers(null);

  console.log(numbers);
  return (
    <div>
      <div>
        {/* <button onClick={start} disabled={timerId}>
          Старт
        </button>
        <button onClick={stop} disabled={!timerId}>
          Стоп
        </button> */}
        <button onClick={clear}>Очистить</button>
      </div>
      <ul>
        <button onClick={() => add(1, 10)} id="spin">
          Spin!
        </button>
        <span className="arrow"></span>
        <>{numbers}</>
      </ul>
    </div>
  );
}
