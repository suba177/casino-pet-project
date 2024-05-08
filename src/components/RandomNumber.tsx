import React, { useState } from "react";

export default function RandomNumber() {
  const [numbers, setNumbers] = useState(0);
  const [timerId, setTimerId] = useState();

  const add = () => setNumbers(Math.ceil(Math.random() * 10));
  const start = () => setTimerId(setInterval(add, 500));
  const stop = () => (clearInterval(timerId), setTimerId(null));
  const clear = () => setNumbers();

  console.log(numbers);
  return (
    <div>
      <div>
        <button onClick={start} disabled={timerId}>
          Старт
        </button>
        <button onClick={stop} disabled={!timerId}>
          Стоп
        </button>
        <button onClick={clear}>Очистить</button>
      </div>
      <ul>
        <button onClick={add} id="spin">
          Spin!
        </button>
        <span className="arrow"></span>
        <>{numbers}</>
      </ul>
    </div>
  );
}
