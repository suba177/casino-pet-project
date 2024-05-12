import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

export default function Wheel() {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.casinoReducer.value);
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
        Поставить на:
      </Typography>
      {betButton.map((item, index) => (
        <Button color="inherit" size="large" variant="contained" key={index}>
          {item}
        </Button>
      ))}
    </>
  );
}
