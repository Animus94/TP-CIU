import "../styles/Fila.css";

export const Fila = ({ direction, children, text }) => {
  return (
    <section
      className={`section ${
        direction === "row-reverse" ? "row-reverse" : "row"
      }`}
    >
      <article>{children}</article>
      <article>
        <p>{text}</p>
      </article>
    </section>
  );
};
