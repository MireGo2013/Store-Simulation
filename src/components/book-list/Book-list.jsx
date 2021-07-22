import React, { Component } from "react";
import BookListItem from "../book-list-item";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withBookStoreService } from "../hoc";
import { fetchBooks, bookAddedToCartAC } from "../../action";
import compose from "../../utils";
import "./book-list.css";
import Spinner from "../spinner/Spinner";
import ErrorIndicator from "../error-indicator/Error-indicator";
class BookListConteiner extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

const mapStateToProps = (state) => {
  return {
    books: state.bookList.books,
    loading: state.bookList.loading,
    error: state.bookList.error,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreServise } = ownProps;
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreServise),
      onAddedToCart: bookAddedToCartAC,
    },
    dispatch
  );
};

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ booksLoadedAC: booksLoadedAC }, dispatch);
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     booksLoaded: (newBooks) => {
//       dispatch(booksLoadedAC(newBooks));
//     },
//   };
// };

// const mapDispatchToProps = {
//   booksLoadedAC,
//   booksRequstedAC,
//   booksErrorAC,
// };

export default compose(
  withBookStoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListConteiner);
