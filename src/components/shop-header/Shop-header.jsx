import "./shop-header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header">
      <Link className="logo text-dark" to="/">
        ReStore
      </Link>
      <Link className="shooping-cart" to="/cart">
        <i className="cart-icon bi bi-cart-fill" />
        {numItems} items (${total})
      </Link>
    </header>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.shoppingCart.orderTotal,
    numItems: state.shoppingCart.orderItemsTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
