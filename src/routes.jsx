import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio/App";
import Lojas from "./pages/Lojas/App";
import Reciclagem from "./pages/Reciclagem/App";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<Inicio />} index />
      <Route path="/lojas" element={<Lojas />} />
      <Route path="/reciclagem" element={<Reciclagem />} />
    </Routes>
  );
}

export default MainRouter;
