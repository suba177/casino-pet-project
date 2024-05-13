import { Routes, Route, Navigate } from "react-router-dom";
import "./style/index.css";
import "./style/reset.css";
import Roulette from "./components/Roulette";
import Layout from "./components/Layout";
import About from "./components/About";
import Rules from "./components/Rules";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Roulette />} />
        <Route path="about" element={<About />} />
        <Route path="rules" element={<Rules />} />
      </Route>
    </Routes>
  );
}
