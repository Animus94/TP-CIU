import { useState } from "react";
import { menuItems } from "../utils/data";
import "../styles/Catalogo.css";

function Catalogo() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentItem, setCurrentItem] = useState(menuItems[0]);

  const handleClick = (newIndex) => {
    const index = newIndex % menuItems.length;
    setCurrentIndex(index);
    setCurrentItem(menuItems[index]);
  };

  return (
    <>
      {/*catalogo del menu*/}

      <section className="carousel">
        <button
          className="control-left"
          onClick={() => handleClick(currentIndex - 1)}
        >
          &#8249;
        </button>
        <article>
          <div className="image-container">
            <img src={currentItem.img} alt={currentItem.name} />
          </div>
          <h2>{currentItem.name}</h2>
          <p>{currentItem.description}</p>
          <p>${currentItem.price.toFixed(2)}</p>
          <a href="./menu">Pide el tuyo</a>
        </article>
        <button
          className="control-right"
          onClick={() => handleClick(currentIndex + 1)}
        >
          &#8250;
        </button>
      </section>
    </>
  );
}

export default Catalogo;
