import { useForm } from "../hooks/useForm";
const initialValue = { email: "", password: "" };
export default function Login({ onLogin }) {
  const [form, handleChange, handleReset] = useForm(initialValue);
  const { email, password } = form;
  const submit = (e) => { e.preventDefault(); onLogin(email); handleReset(); };
  const panel = { padding:16, borderRadius:14, background:"rgba(255,255,255,.03)", border:"1px solid rgba(255,255,255,.12)" };
  const input = { width:"100%", padding:"10px 12px", borderRadius:10, border:"1px solid rgba(255,255,255,.15)", background:"#0c0f17", color:"#e9eaf0" };
  const btn = { border:0, padding:"10px 12px", borderRadius:10, background:"#8b5cf6", color:"white", cursor:"pointer", fontWeight:700 };
  return (
    <form onSubmit={submit} style={panel}>
      <h2>Login</h2>
      <input style={input} onChange={handleChange} type="email" name="email" placeholder="email" value={email} required />
      <input style={{...input, marginTop:8}} onChange={handleChange} type="password" name="password" placeholder="password" value={password} required />
      <button style={{...btn, marginTop:10}}>Ingresar</button>
    </form>
  );
}
