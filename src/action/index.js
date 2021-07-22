const booksRequstedAC = () => {
  return {
    type: "FETCH_BOOKS_REQUSTED",
  };
};

const booksLoadedAC = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const booksErrorAC = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const bookAddedToCartAC = (id) => {
  return {
    type: "BOOK_EDDED_TO_CART",
    payload: id,
  };
};

const bookRemovedFromCartAC = (id) => {
  return {
    type: "BOOK_REMOVE_FROM_CART",
    payload: id,
  };
};

const allBooksRemovedFromCartAC = (id) => {
  return {
    type: "ALL_BOOKS_REMOVE_FROM_CART",
    payload: id,
  };
};

// const fetchBooksOld = (bookstoreServise, dispatch) => () => {
//   dispatch(booksRequstedAC());
//   bookstoreServise
//     .getBooks()
//     .then((data) => dispatch(booksLoadedAC(data)))
//     .catch((error) => dispatch(booksErrorAC(error)));
// };

const fetchBooks = (bookstoreServise) => () => (dispatch) => {
  dispatch(booksRequstedAC());
  bookstoreServise
    .getBooks()
    .then((data) => dispatch(booksLoadedAC(data)))
    .catch((error) => dispatch(booksErrorAC(error)));
};

export {
  fetchBooks,
  bookAddedToCartAC,
  bookRemovedFromCartAC,
  allBooksRemovedFromCartAC,
};
