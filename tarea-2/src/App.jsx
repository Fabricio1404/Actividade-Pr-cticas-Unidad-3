import { useState } from "react";
import Login from "./components/Login.jsx";
import Register from "./components/Register.jsx";
export default function App() {
  const [user, setUser] = useState(null);
  const handleLogin = (email) => setUser(email);
  const wrap = { maxWidth:960, margin:"28px auto", padding:"0 16px", color:"#e9eaf0", fontFamily:"system-ui, Segoe UI, Arial" };
return (
    <div style={wrap}>
      <h1>Registro U.A. — Tarea 2</h1>
      {user && <h3>¡Hola de nuevo {user}!</h3>}
      <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:16}}>
        <Login onLogin={handleLogin} />
        <Register />
      </div>
    </div>
  );
}
