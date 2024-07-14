import  { useState } from 'react';
import "./CafeMenu.css";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
}

const menuItems: MenuItem[] = [
  { id: 1, name: 'Café Espresso', description: 'Café fuerte y aromático', price: 2.5 },
  { id: 2, name: 'Café Latte', description: 'Café con leche y espuma', price: 3.5 },
  { id: 3, name: 'Capuchino', description: 'Café con leche y espuma de leche', price: 4.0 },
  { id: 4, name: 'Té Verde', description: 'Té saludable y refrescante', price: 2.0 },
  { id: 5, name: 'Croissant', description: 'Croissant recién horneado', price: 2.5 },
  { id: 6, name: 'Muffin de Arándanos', description: 'Muffin esponjoso con arándanos frescos', price: 3.0 },
  { id: 7, name: 'Bagel con Queso Crema', description: 'Bagel tostado con queso crema', price: 3.0 },
  { id: 8, name: 'Sandwich de Pavo', description: 'Sandwich de pavo con lechuga y tomate', price: 5.0 },
  { id: 9, name: 'Ensalada César', description: 'Ensalada César con pollo y aderezo', price: 6.5 }
];

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