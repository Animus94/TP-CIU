interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  img?: string;
}

export const menuItems: MenuItem[] = [
  { id: 1, name: 'Café Espresso', description: 'Café fuerte y aromático', price: 2.5, img:"https://www.verdevenus.com/cdn/shop/products/Espresso_1024x1024.jpg?v=1643774208" },
  { id: 2, name: 'Café Latte', description: 'Café con leche y espuma', price: 3.5, img:"https://cdn7.kiwilimon.com/recetaimagen/36986/640x640/46349.jpg.webp" },
  { id: 3, name: 'Capuchino', description: 'Café con leche y espuma de leche', price: 4.0, img:"https://upload.wikimedia.org/wikipedia/commons/0/00/Cappuccino_PeB.jpg" },
  { id: 4, name: 'Té Verde', description: 'Té saludable y refrescante', price: 2.0, img:"https://media.admagazine.com/photos/618a6151be961b98e9f0991c/master/w_1600%2Cc_limit/85139.jpg" },
  { id: 5, name: 'Croissant', description: 'Croissant recién horneado', price: 2.5, img:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/2018_01_Croissant_IMG_0685.JPG/1200px-2018_01_Croissant_IMG_0685.JPG" },
  { id: 6, name: 'Muffin de Arándanos', description: 'Muffin esponjoso con arándanos frescos', price: 3.0, img:"https://todomuffins.com/img/muffins-de-arandanos-186.png" },
  { id: 7, name: 'Bagel con Queso Crema', description: 'Bagel tostado con queso crema', price: 3.0, img:"https://img.freepik.com/fotos-premium/bagel-queso-crema-semillas-sesamo-negro-sobre-fondo-blanco_899449-40152.jpg" },
  { id: 8, name: 'Sandwich de Pavo', description: 'Sandwich de pavo con lechuga y tomate', price: 5.0, img:"https://d36fw6y2wq3bat.cloudfront.net/recipes/sandwich-de-pavo-queso-y-manzana/900/sandwich-de-pavo-queso-y-manzana_version_1653031846.jpg" },
  { id: 9, name: 'Ensalada César', description: 'Ensalada César con pollo y aderezo', price: 6.5, img:"https://www.gourmet.cl/wp-content/uploads/2016/09/Ensalada_C%C3%A9sar-web-553x458.jpg" }
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