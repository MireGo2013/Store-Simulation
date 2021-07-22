import "./shop-header.css";
import { Link } from "react-router-dom";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link className="logo text-dark" to="/cart">
        ReStore
      </Link>
      <Link className="shooping-cart" to="/">
        <i className="cart-icon bi bi-cart-fill" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

export default ShopHeader;
