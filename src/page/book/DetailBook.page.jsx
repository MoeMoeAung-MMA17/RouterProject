import React from "react";
import useFetch from "../../hook/useFetch";
import { useNavigate, useParams } from "react-router-dom";
import { GetBookData } from "../../service/book.Service";

const DetailBookPage = () => {
  const { id } = useParams();
  const nav = useNavigate();
  const { data, error, loading } = useFetch(GetBookData, `book/${id}`);

  const handleBack = () => {
    nav(-1);
  };
  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : (
        <>
          {error ? (
            <h1>Error</h1>
          ) : (
            <div className="py-10 flex justify-center items-center flex-col h-screen shadow-lg  p-5">
              <div className="w-[500px]">
                <img className="shadow-md w-[500px] mb-5 rounded-lg" src={data.image} alt={`Cover of ${data.title}`} />
                <h1 className="text-lg font-bold mb-3">{data.book}</h1>
                <h2 className="text-sm text-gray-400 mb-2">{data.author}</h2>
                <p className="text-sm line-clamp-3 mb-5 text-neutral-500">{data.description}</p>
              <button className="px-4 py-1 border bg-slate-400 hover:bg-slate-800 text-white rounded" onClick={handleBack}>Back</button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default DetailBookPage;
