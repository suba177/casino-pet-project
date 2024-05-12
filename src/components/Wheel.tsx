import { useDispatch, useSelector } from "react-redux";

export default function Wheel() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.casinoReducer.value);

  const getInteger = () => {
    const randomInteger = () => {
      const min = 1;
      const max = 10;
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
    dispatch({ type: "GET_INTEGER", payload: randomInteger() });
  };

  return (
    <div style={{ color: "white", fontSize: "20px" }}>
      <div>Cлучайное число: {value}</div>
      <button onClick={() => getInteger()}>КНОПКА</button>
    </div>
  );
}
