import React from "react";
import { BookStoreServiceConsumer } from "../bookstore-service-context";

const withBookStoreService = (fn) => (MyComponent) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {(bookstoreServise) => {
          return <MyComponent {...props} bookstoreServise={bookstoreServise} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookStoreService;
