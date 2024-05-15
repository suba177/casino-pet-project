import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";
import { useRef, useEffect } from "react";

export default function Roulette() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.casinoReducer.value);
  const betValue = useSelector((state) => state.casinoReducer.betValue);
  const betButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const rouletteNumbers = Array.from({ length: 100 }, (_, i) => i + 1);

  const listRef = useRef(null);

  useEffect(() => {
    console.log(listRef.current);
  });

  const getInteger = () => {
    const randomInteger = () => {
      const min = 1;
      const max = 10;
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
    dispatch({ type: "GET_INTEGER", payload: randomInteger() });
    const elem = document.querySelector("ul");
    const move = -1500;
    elem.style.left = move + "px";
  };

  const getBetNum = (item) => {
    dispatch({ type: "GET_BETNUMBER", payload: item });
  };

  return (
    <div className="container">
      <Typography sx={{ color: "white", fontSize: "20px", margin: "0 auto" }}>
        Поставить на: {betValue}
      </Typography>
      <div className="betNumbers">
        {betButton.map((item, index) => (
          <Button
            onClick={() => getBetNum(item)}
            color="inherit"
            size="large"
            variant="contained"
            key={index}
          >
            {item}
          </Button>
        ))}
      </div>
      {value === betValue ? (
        <div style={{ color: "white", fontSize: "20px" }}>MATCH!</div>
      ) : null}
      <div className="roulette">
        <div
          className="numbers"
          style={{ marginTop: "50px", marginBottom: " 50px" }}
        >
          <ul style={{ color: "white", fontSize: "20px" }}>
            {rouletteNumbers.map((item, index) => (
              <li onClick={() => getBetNum(item)} key={index}>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <NavigationIcon
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 200px)",
          }}
          color="info"
        />
      </div>
      <Button
        sx={{ width: "150px", margin: "0 auto" }}
        onClick={() => getInteger()}
        color="inherit"
        size="large"
        variant="contained"
      >
        Крутить!
      </Button>
      <Typography sx={{ color: "white", fontSize: "20px" }}>
        Cлучайное число: {value}
      </Typography>
    </div>
  );
}
