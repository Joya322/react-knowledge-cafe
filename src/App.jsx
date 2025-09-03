import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  const [readingTime, setReadingTime] = useState(0);

  const [bookMarks, setBookMarks] = useState([]);

  const handleReadingTime = (time) => {
    const totalTime = readingTime + time;
    setReadingTime(totalTime);
    console.log(readingTime);
  };

  const handleBookMarks = (title) => {
    const newTitleList = [...bookMarks, title];
    setBookMarks(newTitleList);
  };

  const handleClearBookMark = (id) => {
    const newBookMarkList = bookMarks.filter((element, idx) => element[idx] !== element[id]);
    
    
    setBookMarks(newBookMarkList);
  };
  // console.log(bookMarks);
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto p-4 md:flex md:gap-6">
        <Blogs
          handleReadingTime={handleReadingTime}
          handleBookMarks={handleBookMarks}
        />
        <BookMarks
          bookMarks={bookMarks}
          readingTime={readingTime}
          handleClearBookMark={handleClearBookMark}
        />
      </main>
    </>
  );
}

export default App;
