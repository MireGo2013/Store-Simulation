import React from "react";
import { BookStoreServiceConsumer } from "../bookstore-service-context";

const withBookStoreService = (fn) => (myComponent) => {
  return (props) => {
    return (
      <BookStoreServiceConsumer>
        {(bookstoreServise) => {
          return <myComponent {...props} bookstoreServise={bookstoreServise} />;
        }}
      </BookStoreServiceConsumer>
    );
  };
};

export default withBookStoreService;
