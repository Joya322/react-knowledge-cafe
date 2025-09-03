const BookMarks = () => {
  return (
    <div className="md:w-1/3 py-8">
      {/* total reading time */}
      <div className="bg-[rgba(96,71,236,0.1)] py-5 text-center rounded-lg">
        <p className="text-2xl text-[rgba(96,71,236,1)] font-bold">
          Spent time on read : 177 min
        </p>
      </div>

      {/* bookmarked blogs */}
      <div className="bg-[rgba(96,71,236,0.1)] mt-6 rounded-lg p-7">
        <h2 className="text-2xl font-bold mb-4">Bookmarked Blogs : 0</h2>

        {/* marked titles */}
        <div className="marked-titles flex flex-col gap-4">
          <h3 className="text-lg font-semibold bg-white p-5 rounded-lg">
            Master Microsoft Power Platform and Become an In-Demand!
          </h3>
          <h3 className="text-lg font-semibold bg-white p-5 rounded-lg">
            Master Microsoft Power Platform and Become an In-Demand!
          </h3>
        </div>
      </div>
    </div>
  );
};

export default BookMarks;
