import './ProductCard.css';
import useState from 'react';

const [count, setCount] = useState(10);



function ProductCard({ product }) {
  const { name, image, price, discountPrice, stock, maxStock, description } = product;

  const hasDiscount = discountPrice && discountPrice < price;
  const discountPercent = hasDiscount
    ? Math.round(((price - discountPrice) / price) * 100)
    : 0;

  const stockPercent = Math.round((stock / maxStock) * 100);

  const handleBuy = () => {
    alert(`Купить: ${name}`);
  };

  const handleInfo = () => {
    alert(`Информация: ${description}`);
  };

  return (
    <div className="product-card">
      <div className="product-image-wrapper">
        <img src={image} alt={name} className="product-image" />
        {hasDiscount && (
          <span className="discount-badge">-{discountPercent}%</span>
        )}
      </div>

      <div className="product-body">
        <h3 className="product-name">{name}</h3>

        <div className="product-prices">
          {hasDiscount && (
            <span className="price-old">{price.toLocaleString()} ₽</span>
          )}
          <span className="price-new">
            {(discountPrice || price).toLocaleString()} ₽
          </span>
        </div>

        <div className="stock-block">
          <div className="stock-progress">
            <div
              className="stock-progress-fill"
              style={{ width: `${stockPercent}%` }}
            />
          </div>
          <p className="stock-text">
            Осталось {stock} из {maxStock} ({stockPercent}%)
          </p>
        </div>

        <div className="product-buttons">
          <button className="btn btn-buy" onClick={handleBuy}>
            Купить
          </button>
          <button className="btn btn-info" onClick={handleInfo}>
            Информация о товаре
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;