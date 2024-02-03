// productdata.js
import img1 from '../../public/images/i-1.png';
import img2 from '../../public/images/i-2.png';
import img3 from '../../public/images/i-3.png';
import img4 from '../../public/images/ring-img.jpg';

import Lithium from '../../public/images/Lithium.jpg';
import chromite from '../../public/images/chromite.jpg';
import quartz from '../../public/images/quartz.jpg';
import copper from '../../public/images/copper.jpg';

const industrialItemsData = [
  { id: 1, name: 'Lithium', image: Lithium, price: '$20.00', description: 'Industrial material for batteries' },
  { id: 2, name: 'Chromite', image: chromite, price: '$25.00', description: 'High-quality chromite for industrial use' },
  { id: 3, name: 'Quartz', image: quartz, price: '$15.00', description: 'Pure quartz crystals for various applications' },
  { id: 4, name: 'Copper', image: copper, price: '$18.00', description: 'Premium-grade copper for electrical conductivity' },
];

const itemsData = [
  { id: 1, name: 'Product 1', image: img1, price: '$30.00', description: 'Beautiful gemstone with unique patterns' },
  { id: 2, name: 'Product 2', image: img2, price: '$22.00', description: 'Exquisite gemstone with vibrant colors' },
  { id: 3, name: 'Product 3', image: img3, price: '$28.00', description: 'Rare gemstone with intricate details' },
  { id: 4, name: 'Product 4', image: img4, price: '$35.00', description: 'Elegant ring with precious stones' },
];

export { industrialItemsData, itemsData };
