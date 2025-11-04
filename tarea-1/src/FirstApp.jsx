export default function FirstApp() {
  const wrap = {
    minHeight: "100vh",
    display: "grid",
    placeItems: "center",
    background: "radial-gradient(600px 300px at 10% -10%, rgba(99,102,241,.18), transparent 60%), linear-gradient(#0a0a0d,#0b0b12)",
    color: "#e9eaf0",
    fontFamily: "system-ui, Segoe UI, Arial"
  };
  const card = { padding: 28, borderRadius: 16, background: "rgba(255,255,255,.04)", border: "1px solid rgba(255,255,255,.12)", boxShadow: "0 10px 30px rgba(0,0,0,.35)", textAlign: "center", maxWidth: 650 };
  const title = { margin: "0 0 8px", fontSize: "clamp(28px,5vw,56px)", lineHeight: 1.05 };
  const sub = { margin: 0, opacity: .9 };

  return (
    <div style={wrap}>
      <div style={card}>
        <h1 style={title}>Bienvenida</h1>
        <p style={sub}>Tarea 1.</p>
      </div>
    </div>
  );
}
