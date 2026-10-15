import ProductCard from './components/productCard/ProductCard';
import './App.css';

const laptop = {
  id: 1,
  name: 'Lenovo Legion Pro 5',
  image: '/images/lenovo.jpg',
  price: 60000,
  discountPrice: 1,
  stock: 15,
  maxStock: 50,
  description:
    'Игровой ноутбук с мощным процессором и дискретной видеокартой.',
};

function App() {
  return (
    <div className="app">
      <h1 className="app-title">Каталог ноутбуков</h1>
      <div className="products-grid">
        <input type="text" placeholder="Поиск ноутбука..." />
        <ProductCard product={laptop} />
        <ProductCard product={laptop} />
      </div>
    </div>
  );
}

export default App;