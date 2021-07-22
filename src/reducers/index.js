const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    // { id: 1, title: "Book1", count: 3, price: 150 },
  ],
  orderTotal: 0,
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

// const upDateCartItem = (book, item) => {
//   if (item) {
//     return {
//       id: item.id,
//       title: item.title,
//       count: item.count + 1,
//       price: item.price + book.price,
//     };
//   } else {
//     return {
//       id: book.id,
//       title: book.title,
//       count: 1,
//       price: book.price,
//     };
//   }
// };

const upDateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, price = 0 } = item;
  return {
    id,
    title,
    count: count + quantity,
    price: price + quantity * book.price,
  };
};

const upDateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({ id }) => id === bookId);
  const inxBook = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[inxBook];
  return {
    ...state,
    cartItems: upDateCartItems(
      cartItems,
      upDateCartItem(book, item, quantity),
      inxBook
    ),
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUSTED":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "BOOK_EDDED_TO_CART":
      return upDateOrder(state, action.payload, 1);
    case "BOOK_REMOVE_FROM_CART":
      return upDateOrder(state, action.payload, -1);
    case "ALL_BOOKS_REMOVE_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return upDateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
