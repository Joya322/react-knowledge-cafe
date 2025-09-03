const BookMarks = ({ bookMarks, readingTime, handleClearBookMark}) => {
  // console.log(`bookMarks` ,bookMarks);
  return (
    <div className="md:w-1/3 py-8">
      {/* total reading time */}
      <div className="bg-[rgba(96,71,236,0.1)] p-5 text-center rounded-lg">
        <p className="text-2xl text-[rgba(96,71,236,1)] font-bold">
          Spent time on read : {readingTime} min
        </p>
      </div>

      {/* bookmarked blogs */}
      <div className="bg-[rgba(96,71,236,0.1)] mt-6 rounded-lg p-7">
        <h2 className="text-2xl font-bold mb-4">
          Bookmarked Blogs : {bookMarks.length}
        </h2>

        {/* marked titles */}
        <div className="marked-titles flex flex-col gap-4">
          {bookMarks.map((title, idx) => (
            <div className="bg-white p-5 rounded-lg">
              <h3 className="text-lg font-semibold">{title}</h3>
              <button
                onClick={() => {
                  handleClearBookMark(idx);
                }}
                className="text-pink-500 font-medium"
              >
                remove
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
