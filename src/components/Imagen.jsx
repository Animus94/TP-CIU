import "../styles/imagen.css";

export const Imagen = ({ href, path }) => {
  return (
    <section className="imagen">
      <a href={href} target="_blank">
        <img src={path} alt="Cafeteria" />
      </a>
    </section>
  );
};
