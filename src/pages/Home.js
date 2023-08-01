import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { FaSortAmountDownAlt, FaSortAmountDown } from 'react-icons/fa';
import CountryBox from '../components/country';
import Navbar from '../components/Header';
import { fetchCountries } from '../redux/countries/countriesSlice';

function HomePage() {
  const { loading, countries, error } = useSelector((state) => state.countries);
  const [searched, setSearchedCountries] = useState('');
  const [sortOrder, setSortOrder] = useState('desc');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  //  filtering
  const searchedCountries = countries.filter(
    (country) => country.name.toLowerCase().includes(searched.toLowerCase()),
  );
  const handleFiltering = (e) => {
    setSearchedCountries(e.target.value);
  };

  // Sort the searchedCountries array alphabetically by country name
  searchedCountries.sort((a, b) => a.name.localeCompare(b.name));

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedCountries = searchedCountries.slice().sort((a, b) => {
    if (sortOrder === 'asc') {
      return a.population - b.population;
    }
    return b.population - a.population;
  });

  if (loading === 'pending') {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <div role="status" className=" flex flex-col justify-center">
          <svg aria-hidden="true" className="w-8 h-8 ml-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
          </svg>
          <span className="">Loading...</span>
        </div>
      </div>
    );
  }

  if (error) {
    <div className="container">{error}</div>;
  }

  return (
    <>
      <Navbar />
      <div className=" sticky z-10 top-0">
        <div className=" h-10 w-full bg-sec flex items-center justify-between p-6">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-3 h-3 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              onInput={handleFiltering}
              className="p-2 pl-8 rounded text-blue-950 bg-slate-200 placeholder:text-xs text-xs
               focus-visible:outline-0  w-72  focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700
                dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="search by country name"
            />
          </div>
          <div className="flex">
            <button onClick={toggleSortOrder} type="button">
              {sortOrder === 'asc' ? (
                <FaSortAmountDownAlt />
              ) : (
                <FaSortAmountDown />
              )}
            </button>
          </div>
        </div>
      </div>
      <ul className="countries-grid grid grid-cols-2 sm:grid-cols-3  w-full">
        {sortedCountries.map((country) => (
          <CountryBox
            key={country.countryId}
            flag={country.flag}
            name={country.name}
            pop={country.population}
            id={country.countryId}
            alt={country.flagAlt}
          />
        ))}
      </ul>
    </>
  );
}
export default HomePage;
