import React from "react";
import useFetch from "../hook/useFetch";
import { GetBookData } from "../service/book.Service";
import { BookListComponents } from "../components";
import { Link } from "react-router-dom";



const HomePage = () => {
  const { loading, error, data } = useFetch(GetBookData, "book");
  return (
        <div className="">
          {loading ? (
            <h1>Loading....</h1>
          ) : (
            <div className="flex flex-wrap justify-between">
              {data.map((i) => (
                <Link key={i.id} to={`/detail/${i.id}`}>
                  <BookListComponents data={i} />
                </Link>
              ))}
            </div>
          )}
        </div>
      );
};

export default HomePage;
