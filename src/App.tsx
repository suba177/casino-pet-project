import { Routes, Route, Navigate } from "react-router-dom";
import "./reset.css";
import Wheel from "./components/Wheel";
import Layout from "./components/Layout";
import About from "./components/About";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Wheel />} />
        <Route path="about" element={<About />} />
      </Route>
    </Routes>
  );
}
