import "./shopping-cart-table.css";
import { connect } from "react-redux";
import {
  bookAddedToCartAC,
  bookRemovedFromCartAC,
  allBooksRemovedFromCartAC,
} from "../../action";

const ShoppingCartTable = ({
  items,
  total,
  onDecrease,
  onIncrease,
  onDelete,
}) => {
    const renderRow = (item, inx) => {
    const { id, title, count, price } = item;
    return (
      <tr key={id}>
        <td>{inx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${price}</td>
        <td>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="bi bi-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="bi bi-dash-circle" />
          </button>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}
          >
            <i className="bi bi-trash" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{items.map(renderRow)}</tbody>
      </table>
      <div className="total">Total: ${total}</div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.shoppingCart.cartItems,
    total: state.shoppingCart.orderTotal,
  };
};

const mapDispatchToProps = {
  onDecrease: bookAddedToCartAC,
  onIncrease: bookRemovedFromCartAC,
  onDelete: allBooksRemovedFromCartAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
