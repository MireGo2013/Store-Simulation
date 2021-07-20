import BookList from "../book-list";

const HomePage = () => {
const booksArr = [
	{ id: 1, title: "You Dont Know JS", author: "Kyle Simpson" },
	{ id: 2, title: "Release IT", author: "Michael T.Nygard" }
  ]

  return (
    <BookList
      books={booksArr}
    />
  );
};

export default HomePage;
