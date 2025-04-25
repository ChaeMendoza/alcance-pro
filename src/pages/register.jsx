import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
//import { auth } from "../firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import LogoImagen from "../assets/logo-dpe 2.png";


function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/dashboard");
    } catch (err) {
      setError("Correo o contraseña incorrectos.");
    }
  };

  return (
    <>
          <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md">
        <div className="flex flex-col items-center mb-6">
          <img src={LogoImagen} alt="Logo Defensoría del Pueblo" className="w-32 h-32 object-contain mb-1" />
          <h2 className="text-3xl font-bold text-gray-800">Registrarse</h2>
          <p className="text-gray-500 text-sm">Registrate para gestionar requerimientos</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <div>
            <label className="block text-gray-600 text-sm mb-1">Correo electrónico</label>
            <input
              type="email"
              placeholder="ejemplo@correo.com"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div>
            <label className="block text-gray-600 text-sm mb-1">Confirmar Contraseña</label>
            <input
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>


          <button
            type="submit"
            className="w-full bg-[#016a8f] text-white py-2 rounded-md hover:bg-[#6fa8bc] hover:text-black transition cursor-pointer"
          >
            Registrarse Ahora
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-6">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="text-blue-600 hover:underline font-medium">
            Ingresa a tu cuenta
          </Link>
        </p>
      </div>
    </div>
    </>
  )
}

export default RegisterPage
