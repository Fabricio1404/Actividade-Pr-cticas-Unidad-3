import { useForm } from "../hooks/useForm";
const initialValue = { username: "", email: "", password: "", firstname: "", lastname: "" };
export default function Register() {
  const [form, handleChange, handleReset] = useForm(initialValue);
  const { username, email, password, firstname, lastname } = form;
  const submit = (e) => { e.preventDefault(); console.log(form); handleReset(); };
  const panel = { padding:16, borderRadius:14, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.12)" };
  const input = { width:"100%", padding:"10px 12px", borderRadius:10, border:"1px solid rgba(255,255,255,.15)", background:"#0c0f17", color:"#e9eaf0" };
  const btn = { border:0, padding:"10px 12px", borderRadius:10, background:"#22c55e", color:"#05180c", cursor:"pointer", fontWeight:700 };
  return (
    <form onSubmit={submit} style={panel}>
      <h2>Registro</h2>
      <input style={input} onChange={handleChange} type="text" name="username" placeholder="usuario" value={username} required />
      <input style={{...input, marginTop:8}} onChange={handleChange} type="email" name="email" placeholder="email" value={email} required />
      <input style={{...input, marginTop:8}} onChange={handleChange} type="password" name="password" placeholder="password" value={password} required />
      <input style={{...input, marginTop:8}} onChange={handleChange} type="text" name="firstname" placeholder="nombre" value={firstname} required />
      <input style={{...input, marginTop:8}} onChange={handleChange} type="text" name="lastname" placeholder="apellido" value={lastname} required />
      <button style={{...btn, marginTop:10}}>Registrar</button>
    </form>
  );
}
