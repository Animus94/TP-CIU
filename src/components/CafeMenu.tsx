import  { useState } from 'react';
import "../styles/CafeMenu.css";
import { menuItems } from '../utils/data';

interface SelectedItem {
  id: number;
  quantity: number;
}

const CafeMenu = () => {
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);

  const handleQuantityChange = (id: number, quantity: number) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.id === id);
      if (existingItem) {
        return prevItems.map((item) => (item.id === id ? { ...item, quantity } : item));
      } else {
        return [...prevItems, { id, quantity }];
      }
    });
  };

  const calculateTotalPrice = () => {
    const total = selectedItems.reduce((sum, item) => {
      const menuItem = menuItems.find((menuItem) => menuItem.id === item.id);
      return sum + (menuItem ? menuItem.price * item.quantity : 0);
    }, 0);
    setTotalPrice(total);
  };

  return (
    <div className="container">
      <h2>Menú</h2>
      <div className="grid">
        {menuItems.map((menuItem) => (
          <div className="card" key={menuItem.id}>
            <div className="card-content">
              <h5>{menuItem.name}</h5>
              <p>{menuItem.description}</p>
              <h6>${menuItem.price.toFixed(2)}</h6>
            </div>
            <div className="card-actions">
              <label>
                Cantidad:
                <input
                  type="number"
                  min="0"
                  onChange={(e) => handleQuantityChange(menuItem.id, parseInt(e.target.value, 10) || 0)}
                />
              </label>
            </div>
          </div>
        ))}
      </div>
      <div className="total-price-section">
        <button onClick={calculateTotalPrice}>Calcular Precio Total</button>
        <h4>Precio Total: ${totalPrice.toFixed(2)}</h4>
      </div>
    </div>
  );
};

export default CafeMenu;