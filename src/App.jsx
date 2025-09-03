import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import BookMarks from "./components/BookMarks/BookMarks";
import Header from "./components/Header/Header";

function App() {
  return (
    <>
      <Header />
      <main className="w-11/12 mx-auto p-4 md:flex md:gap-6">
        <Blogs />
        <BookMarks/>
      </main>
    </>
  );
}

export default App;
