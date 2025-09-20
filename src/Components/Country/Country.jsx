import React, { useState } from 'react';

const Country = ({ counrty, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);
  //   console.log(counrty);
  //   console.log(handleVisitedCountry);

  const handleClick = () => {
    // visited ? setVisited(false) : setVisited(true); // Ternary Operator
    const nwVisited = !visited;
    setVisited(nwVisited); // bang / not
    handleVisitedCountry(counrty, nwVisited);
  };
  return (
    <div>
      {
        <div
          className={`border-2 border-gray-700 mb-5 p-5 rounded-2xl items-start space-y-2 ${
            visited && 'bg-gray-900'
          }`}
        >
          <img
            className="h-[100px] w-full"
            src={counrty.flags.flags.png}
            alt={counrty.flags.flags.alt}
          />
          <p className=" text-blue-300 font-bold">{counrty.name.common}</p>
          <p>Population: {counrty.population.population}</p>
          <p>
            Area: {counrty.area.area} <span className="text-pink-600">km2</span>{' '}
            /{counrty.area.area > 30000 ? 'BigCountry' : 'SmallCountrty'}
          </p>
          <button
            onClick={handleClick}
            className={`px-3 py-1.5 rounded font-bold transition-all duration-300 cursor-pointer ${
              visited
                ? 'text-[12px] bg-green-600 text-white'
                : 'text-[12px] bg-orange-500 text-white'
            }`}
          >
            {visited ? 'Visited' : 'Not Visited'}
          </button>
        </div>
      }
    </div>
  );
};

export default Country;
