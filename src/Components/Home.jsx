import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md mb-8">
        <h1 className="text-3xl font-bold mb-4 text-center">HOME</h1>
        <h2 className="text-lg text-center text-gray-700">
          ¡Felicitaciones! Tu cuenta fue creada con éxito.
        </h2>
      </div>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        <Link to="/">Cerrar Sesión</Link>
      </button>
    </div>
  );
};

export default Home;
