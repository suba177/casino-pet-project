import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";
import NavigationIcon from "@mui/icons-material/Navigation";

export default function Wheel() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.casinoReducer.value);
  const betValue = useSelector((state) => state.casinoReducer.betValue);
  const betButton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const getInteger = () => {
    const randomInteger = () => {
      const min = 1;
      const max = 10;
      const rand = min + Math.random() * (max + 1 - min);
      return Math.floor(rand);
    };
    dispatch({ type: "GET_INTEGER", payload: randomInteger() });
  };

  const getBetNum = (item) => {
    dispatch({ type: "GET_BETNUMBER", payload: item });
  };

  return (
    <>
      <Typography sx={{ color: "white", fontSize: "20px" }}>
        Cлучайное число: {value}
      </Typography>
      <Button
        onClick={() => getInteger()}
        color="inherit"
        size="large"
        variant="contained"
      >
        Крутить!
      </Button>
      <Typography sx={{ color: "white", fontSize: "20px" }}>
        Поставить на: {betValue}
      </Typography>
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
      {value === betValue ? (
        <div style={{ color: "white", fontSize: "20px" }}>MATCH!</div>
      ) : null}
      <div className="roulette">
        <NavigationIcon
          sx={{
            position: "absolute",
            left: "50%",
            transform: "translate(-50%, 160px)",
          }}
          color="info"
        />
        <div className="scopeHidden">
          <ul style={{ color: "white", fontSize: "20px" }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </div>
    </>
  );
}
