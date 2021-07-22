import upDateBookList from "./book-list";
import upDateShoppingCart from "./shopping-cart";

const reducer = (state, action) => {
  return {
    bookList: upDateBookList(state, action),
    shoppingCart: upDateShoppingCart(state, action),
  };
};

export default reducer;
