import './CharacterInfo.css';

export default function CharacterInfo({ image, name, role, favorites }) {
  return (
    <article className="bnha-card">
      {image && <img className="bnha-avatar" src={image} alt={name} />}
      <h2 className="bnha-title">{name}</h2>
      {role && (
        <p className="bnha-pill bnha-pill--cyan">
          <b>Rol:</b>&nbsp;{role}
        </p>
      )}
      {typeof favorites === "number" && (
        <p className="bnha-pill bnha-pill--yellow">
          <b>Favoritos:</b>&nbsp;{favorites}
        </p>
      )}
    </article>
  );
}
