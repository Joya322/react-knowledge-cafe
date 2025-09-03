import PropTypes from "prop-types";
const Blog = ({ blog, handleReadingTime, handleBookMarks}) => {
  const {
    title,
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="py-8">
      <img className="rounded-lg w-full" src={cover} alt="" />

      {/* author details */}
      <div className="author-and-bookmark flex justify-between items-center py-6">
        <div className="author-info flex justify-center items-center gap-5">
          <img className="w-15 h-15" src={author_img} alt="" />
          <div className="authorName-and-postedDate">
            <h4 className="author-name text-2xl font-bold">{author}</h4>
            <p className="posted-date font-semibold opacity-60">
              {posted_date}
            </p>
          </div>
        </div>
        <div className="bookmark-info flex justify-center items-center gap-2">
          <p className="text-xl font-medium opacity-60">
            {reading_time} min read
          </p>
          <button
            onClick={() => {
              handleBookMarks(title);
            }}
            className="pt-1"
          >
            <i
              className="opacity-60 fa-regular fa-bookmark
          "
            ></i>
          </button>
        </div>
      </div>

      {/* title */}
      <h2 className="text-4xl font-bold mb-4">{title}</h2>

      {/* hashtags */}
      <div className="hastags flex items-center gap-4 text-xl font-medium opacity-60 mb-5">
        {hashtags.map((hastag, idx) => (
          <p key={idx}>#{hastag}</p>
        ))}
      </div>

      {/* mark as read */}
      <a
        onClick={() => {
          handleReadingTime(reading_time);
        }}
        className="text-xl font-semibold underline text-blue-600"
      >
        Mark as read
      </a>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};

export default Blog;
