import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleReadingTime, handleBookMarks }) => {
  const [blogs, setBlogs] = useState([]);

  // load data
  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="md:w-2/3">
      {/* <h2>blogs: {blogs.length}</h2> */}
      {blogs.map((blog) => (
        <Blog
          key={blog.id}
          blog={blog}
          handleReadingTime={handleReadingTime}
          handleBookMarks={handleBookMarks}
        ></Blog>
      ))}
    </div>
  );
};

export default Blogs;
