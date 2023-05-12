import { Link } from 'react-router-dom';
import './ProductBriefInventory.css';

export default function ProductBriefInventory({ item }) {
  return (
    <Link to={`/product/${item.uid}`} style={{ textDecoration: 'none' }}>
      <div className="product">
        <div className="bold">{item.name}</div>
        <div>
          <img src={item.image} alt="Orbeez" />
        </div>
        <div>{item.description}</div>
        <div className="bold">${item.price.toFixed(2)}</div>
      </div>
    </Link>
  );
}
