"use client";
import Fuse from "fuse.js";

import { useState } from "react";
import { articlesData, ArticlesDataType } from "../utils/utils";
import Article from "./Article";

const HomePage = () => {
  const options = {
    keys: ["title", "content"],
    distance: 500,
    threshold: 0.4,
  };
  const fuse = new Fuse(articlesData, options);
  const [articles, setArticles] = useState<ArticlesDataType | []>([]);
  const [searchValue, setSearchValue] = useState<string>("");
  return (
    <div className="container">
      <h1 className="text-center my-2 font-bold">Simple Search</h1>
      <div className="flex justify-center ">
        <div className="w-[80%] flex items-center space-x-4 relative">
          <input
            className="w-[100%] px-4 py-2"
            placeholder="Search"
            type="text"
            style={{
              outline: "none",
              border: "1px solid #ccc",
              borderRadius: "4px",
            }}
            value={searchValue}
            onChange={(e) => {
              if (e.target.value.trim() === "") {
                setArticles([]);
              }
              setSearchValue(e.target.value);
              const results = fuse.search(e.target.value);
              setArticles([
                ...results.map((result) => {
                  return result.item;
                }),
              ]);
            }}
          />
          <div
            className="absolute"
            style={{
              right: -25,
              top: "50%",
              transform: "translate(0,-50%)",
            }}
          >
            {searchValue.trim() !== "" && (
              <div
                className="text-[24px] cursor-pointer"
                onClick={() => {
                  setSearchValue("");
                  setArticles([]);
                }}
              >
                x
              </div>
            )}
          </div>
        </div>
      </div>
      {articles.length === 0 && searchValue.trim() !== "" ? (
        <div>No Results found</div>
      ) : articles.length > 0 ? (
        <div>{articles.length} results found</div>
      ) : (
        <div>Please search for article</div>
      )}
      <div className="py-2">
        {articles.map((article) => {
          return (
            <Article
              searchWord={searchValue}
              article={article}
              key={article.id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default HomePage;
