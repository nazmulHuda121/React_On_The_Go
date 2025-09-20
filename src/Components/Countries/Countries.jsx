import React, { use, useState } from 'react';
import Country from '../Country/Country';

const Countries = ({ countriesPromise }) => {
  //   console.log(countriesPromise);

  // Third step Dclear a State Hook.......... get some data into an array
  const [visitedCountry, setVisitedCountry] = useState([]);

  const handleVisitedCountry = (country, isVisited) => {
    // console.log(
    //   'handle visited country is clicked...',
    //   country.name.common,
    //   isVisited
    // );
    if (isVisited) {
      if (
        !visitedCountry.some((coun) => coun.cca3.cca3 === country.cca3.cca3)
      ) {
        setVisitedCountry([...visitedCountry, country]);
      }
    } else {
      const newVisited = visitedCountry.filter(
        (con) => con.cca3.cca3 !== country.cca3.cca3
      );
      setVisitedCountry(newVisited);
    }
  };

  //   First Step findout country..............
  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;
  //   console.log(country);
  return (
    <div>
      <h2 className="text-pink-300 text-3xl font-bold">
        Countries List: {countries.length}
      </h2>
      <h2 className="text-yellow-500 text-2xl font-bold border-b-4 border-red-500 my-4 w-[40%]">
        Visited Country: {visitedCountry.length}
      </h2>

      <ol className="list-decimal pl-8">
        {visitedCountry.map((country) => (
          <li>{country.name.common}</li>
        ))}
      </ol>

      {/* Second step findoutlooping single country.... */}
      <div className="grid grid-cols-5 gap-5 items-center mt-4">
        {countries.map((counrty) => (
          <Country
            key={counrty.cca3.cca3}
            counrty={counrty}
            handleVisitedCountry={handleVisitedCountry}
          />
        ))}
      </div>
    </div>
  );
};

export default Countries;
