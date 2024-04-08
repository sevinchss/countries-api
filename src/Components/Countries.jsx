import { useState, useEffect } from "react";
import Article from "./Article";
import Header from "../Layout/Header/Navbar";
import axios from "axios";

const Countries = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [input, setInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Africa",
    },
    {
      name: "Asia",
    },
    {
      name: "Americas",
    },
    {
      name: "Oceania",
    },
    {
      name: "antarctic",
    },
  ];

  // GETTING ALL THE COUNTRIES AND MAP TO THE DOM
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setData(response.data);
        setFilteredData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  // SEARCH INPUT FOR THE COUNTRIES
  const handleSearch = (e) => {
    const searchInput = e.target.value.toLowerCase();
    setInput(searchInput);
    filterCountries(searchInput, selectedRegion);
  };

  const handleRegionChange = (e) => {
    const region = e.target.value;
    setSelectedRegion(region);
    filterCountries(input, region);
  };

  const filterCountries = (input, region) => {
    const filtered = data.filter((country) => {
      const nameMatch = country.name.common.toLowerCase().includes(input);
      const regionMatch =
        !region || country.region.toLowerCase().includes(region);
      return nameMatch && regionMatch;
    });
    setFilteredData(filtered);
  };
  return (
    <>
        {/* NAVBAR */}
        <Header />
        <section className={`container mx-auto p-8 bg-background`}>
          {/* FORM AT THE TOPNAV*/}

          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8 lg:justify-between">
            <input
              type="text"
              name="search"
              id="search"
              value={input}
              onChange={handleSearch}
              placeholder="Search for a country by its name"
              required
              className={`py-3 px-4  w-full shadow 
                  text-text  rounded outline-none transition-all durstion-200 bg-transparent
                 
                  border-t-text
                  border-text focus:border-text
                  !placeholder:text-text`}
            />
            {/* FILTER SECTION */}
            <select
                        value={selectedRegion}
                        onChange={handleRegionChange}
                        classNam="px-3 py-2.5 rounded-[7px] bg-background border text-text focus:outline-none border-text"
                    >
                        <option value="" className='bg-background'>All Regions</option>
                        <option value="africa" className='bg-background'>Africa</option>
                        <option value="americas" className='bg-background'>Americas</option>
                        <option value="asia" className='bg-background'>Asia</option>
                        <option value="europe" className='bg-background'>Europe</option>
                        <option value="oceania" className='bg-background'>Oceania</option>
                    </select>
          </div>
          {/* COUNTRIES IN DOM */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {filteredData.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      
    </>
  );
};

export default Countries;
