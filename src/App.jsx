import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

// importo componentes

import Login from "./Components/Login";
import Home from "./Components/Home";

function App() {
  return (
    <BrowserRouter>
      <main className="font-plus-jakarta-sans">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
