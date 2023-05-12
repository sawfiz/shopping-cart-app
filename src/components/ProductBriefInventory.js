import { Link } from 'react-router-dom';
import './ProductBriefInventory.css';

export default function ProductBriefInventory({ item, index }) {
  return (
    <div className="product">
      <div>{item.name}</div>
      <img src={item.image} alt="Orbeez" />
      <div>{item.description}</div>
      <div>{item.price}</div>
      <Link to={`/product/${index}`}> Link {index}</Link>
    </div>
  );
}
