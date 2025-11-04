import CharacterInfo from "./components/CharacterInfo.jsx";
import Loading from "./components/Loading.jsx";
import { useCounter } from "./hooks/useCounter.js";
import { useFetch } from "./hooks/useFetch.js";
import "./index.css";

// My Hero Academia characters (Boku no Hero) – Jikan API
const API = "https://api.jikan.moe/v4/anime/31964/characters";

export default function App() {
  const { data, isLoading, error } = useFetch(API);
  const [index, increment, decrement] = useCounter(0);

  const list = Array.isArray(data?.data) ? data.data.map((it) => ({
    image: it?.character?.images?.jpg?.image_url ?? "",
    name: it?.character?.name ?? "Desconocido",
    role: it?.role ?? "",
    favorites: it?.favorites ?? 0
  })) : [];

  const max = Math.max(0, list.length - 1);
  const current = list[index] || null;

  const next = () => increment(max);
  const back = () => decrement();

  const wrap = {
    minHeight: "100vh",
    margin: 0,
    padding: "24px 16px 36px",
    color: "#eef0f5",
    fontFamily: "system-ui, Segoe UI, Arial",
    background:
      "radial-gradient(1000px 600px at -10% 0%, rgba(0,194,255,.18), transparent 60%)," +
      "radial-gradient(900px 500px at 110% 10%, rgba(229,57,53,.18), transparent 55%)," +
      "linear-gradient(#0b0d14,#0b0b10)"
  };
  const title = {
    margin: "0 0 12px",
    fontSize: "clamp(28px,5vw,48px)",
    letterSpacing: .5,
    textShadow: "0 2px 0 #000, 0 0 18px rgba(255,212,0,.25)"
  };
  const subtitle = { margin: "0 0 18px", opacity: .9 };
  const row = { display:"flex", gap:12, justifyContent:"center", marginTop:12 };
  const btn = (bg, fg="#0b0d14") => ({
    border:0, borderRadius:12, padding:"12px 16px", cursor:"pointer",
    background:bg, color:fg, fontWeight:900, letterSpacing:.3,
    boxShadow:"0 6px 16px rgba(0,0,0,.35)"
  });

  return (
    <div style={wrap}>
      <h1 style={title}>Boku no Hero — Personajes</h1>
      <p style={subtitle}>Explorá los héroes y villanos con navegación Anterior/Siguiente.</p>

      {isLoading && <Loading />}
      {error && <p style={{color:"#ff8e6e"}}>Error: {error}</p>}
      {!isLoading && !error && current && <CharacterInfo {...current} />}

      <div style={row}>
        <button style={btn("#00c2ff")} onClick={back} disabled={index<=0}>Anterior</button>
        <button style={btn("#ffd400")} onClick={next} disabled={index>=max}>Siguiente</button>
      </div>

      <p style={{opacity:.8, marginTop:10}}>
        Personaje {list.length ? index + 1 : 0} de {list.length}
      </p>
    </div>
  );
}
