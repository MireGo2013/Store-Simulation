const upDateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      orderTotal: 0,
      orderItemsTotal: 0,
    };
  }
  switch (action.type) {
    case "BOOK_EDDED_TO_CART":
      return upDateOrder(state, action.payload, 1);
    case "BOOK_REMOVE_FROM_CART":
      return upDateOrder(state, action.payload, -1);
    case "ALL_BOOKS_REMOVE_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return upDateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

const upDateOrder = (state, bookId, quantity) => {
  const {
    bookList: { books },
    shoppingCart: { cartItems },
  } = state;
  const book = books.find(({ id }) => id === bookId);
  const inxBook = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[inxBook];
  const newItem = upDateCartItem(book, item, quantity);
  return {
    cartItems: upDateCartItems(cartItems, newItem, inxBook),
    orderTotal: upDateTotalCart(upDateCartItems(cartItems, newItem, inxBook)),
    orderItemsTotal: upDateItemsTotalCart(
      upDateCartItems(cartItems, newItem, inxBook)
    ),
  };
};

const upDateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)];
  }
  if (idx === -1) {
    return [...cartItems, item];
  }
  return [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const upDateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, price = 0 } = item;
  let curentTotalPrice = price + quantity * book.price;
  return {
    id,
    title,
    count: count + quantity,
    price: curentTotalPrice,
  };
};

const upDateTotalCart = (cartItems) => {
  return cartItems.reduce((ac, item) => item.price + ac, 0);
};

const upDateItemsTotalCart = (cartItems) => {
  return cartItems.reduce((ac, item) => item.count + ac, 0);
};

export default upDateShoppingCart;
