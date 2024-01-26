import { useState } from "react";
import "./App.css";

// importo los modulos de firebase

import appFirebase from "../src/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";

// importoo componentes

import Login from "./Components/Login";
import Home from "./Components/Home";

const auth = getAuth(appFirebase);
function App() {
  const [user, setUser] = useState(null);
  onAuthStateChanged(auth, (userFirebase) => {
    if (userFirebase) {
      setUser(userFirebase);
    } else {
      setUser(null);
      console.log("no hay usuario");
    }
  });

  return <div> {user ? <Home correoUsuario={user.email} /> : <Login />} </div>;
}

export default App;
