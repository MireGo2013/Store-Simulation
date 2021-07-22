export default class BookStoreService {
  data = [
    {
      id: 1,
      title: "You Dont Know JS",
      author: "Kyle Simpson",
      price: 32,
      coverImage:
        "https://s1.livelib.ru/boocover/1001506917/200x305/4a12/boocover.jpg",
    },
    {
      id: 2,
      title: "Release IT",
      author: "Michael T.Nygard",
      price: 40,
      coverImage:
        "https://img3.labirint.ru/rc/64e84c8388de3963b9c3adf9490c84be/220x340/books50/499059/cover.jpg?1563856058",
    },
  ];

  getBooks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // reject(new Error('Working error'));
        resolve(this.data);
      }, 700);
    });
  }
}
