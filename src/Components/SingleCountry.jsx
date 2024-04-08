import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.error(error);
      }
    };
    getSingleCountry();
  }, [name]);

  // CHANGING THE TITLE OF EACH COUNTRY
  useEffect(() => {
    document.title = `Countries | ${name}`;
  }, [name]);
 
  return (
    <>
      <section className="p-8 md:py-0  container bg-background text-text">
        <div className="w-full flex">
          <Link to={"/"}>
            <button className="py-2 px-4 border border-text rounded flex items-center justify-center gap-1 bg-foreground text-text text-xl mt-10">
              <svg
                height="15"
                width="15"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                viewBox="0 0 476.213 476.213"
                xmlSpace="preserve"
                className="fill-text"
              >
                <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5 57.427,253.107 476.213,253.107 " />
              </svg>
              Back
            </button>
          </Link>
        </div>
        {country.map((item) => {
          return (
            <article
              key={item.population}
              className="grid grid-cols-1 gap-4 md:grid-cols-2 md:place-items-center h-screen"
            >
              <img src={item.flags.svg} alt={item.name.common} />
              <article>
                <h2 className="font-bold  text-3xl lg:text-5xl">
                  {item.name.official}
                </h2>
                <ul
                  className={`my-4 flex flex-col items-start justify-start gap-2  `}
                >
                  <li>Capital: {item.capital}</li>
                  <li>Population: {item.population.toLocaleString()}</li>
                  <li>Region: {item.region} </li>
                  <li>Subregion: {item.subregion} </li>
                </ul>

             
              </article>
            </article>
          );
        })}
      </section>
    </>
  );
};

export default SingleCountry;
