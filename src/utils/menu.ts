interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
}

export const menuItems: MenuItem[] = [
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

interface NavbarLinks{
  name: string;
  href: string;
}

export const navbarLinks: NavbarLinks[] = [
  {
    name: "Inicio",
    href: "/"
  },
  {
    name: "Menu",
    href: "/menu"
  },
  {
    name: "Galeria",
    href: "/galeria"
  }
]