import { categories } from "@/static-data/Arrays";
import React from "react";
import ArticleCard from "../UI/Cards/ArticleCard";

const Bookmarks = () => {
  return (
    <>
      <section className="h-full p-5 md:pt-24 md:px-8">
        <div className="grid h-full grid-cols-1 xl:grid-cols-3 md:grid-cols-2 md:gap-8 gap-14">
          {categories.map((category) => (
            <ArticleCard key={category.id} article={category} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Bookmarks;
