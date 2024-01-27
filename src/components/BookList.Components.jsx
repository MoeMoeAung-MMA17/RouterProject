import React from "react";

const BookListComponents = ({ data }) => {
  return (
    <div className="w-[300px]  shadow-lg my-5 p-5 border-sm">
      <div>
        <img src={data.image} alt={`Cover of ${data.title}`} className="shadow-md rounded-md w-[300px] h-[150px] object-cover mb-5" />
      </div>
      <div>
        <h1 className="text-lg font-bold mb-3">{data.book}</h1>
        <h2 className="text-sm text-gray-400 mb-2">{data.author}</h2>
      </div>
      <div>
        <p className="text-sm line-clamp-3 text-neutral-500">{data.description}</p>
      </div>
    </div>
  );
};

export default BookListComponents;
