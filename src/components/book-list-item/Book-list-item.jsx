import "./book-list-item.css";

const BookListItem = ({ book }) => {
  const { title, author } = book;
  return (
    <li>
      <span>{title}</span> &nbsp;
      <span>{author}</span>
    </li>
  );
};

export default BookListItem;
