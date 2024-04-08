import React from "react";
import { Link } from "react-router-dom";
//props for cards
const Article = ({ flags, name, population, region, subregion, capital }) => {
  return (
    <>
      <Link to={`/${name.common}`}>
        <section className={` rounded-lg shadow overflow-hidden  transition-all duration-200 bg-foreground text-text shadow-foreground`}>
          <img
            src={flags.svg}
            alt={flags.svg}
            className="h-72 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="font-bond text-2xl hover:opacity-55 mb-2">
              {name.common}
            </h2>
            <h3 className="font-bond text-lg mb-2">
             
            </h3>
            <ul className="flex flex-col items-start justify-start gap-2">
              <li>Population: {population.toLocaleString()}</li>
              <li>Region: {region}</li>
              <li>Subregion: {subregion}</li>
            </ul>
          </div>
        </section>
      </Link>
    </>
  );
};
export default Article;
