import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { FiArrowRightCircle } from 'react-icons/fi';

function CountryBox({
  flag, name, pop, id, alt,
}) {
  const navigate = useNavigate();
  const formatNumber = (number) => {
    if (number >= 1e9) {
      // Display numbers greater than or equal to 1 billion as 'X.XXB'
      return `${(number / 1e9).toFixed(2)}B`;
    } if (number >= 1e6) {
      // Display numbers greater than or equal to 1 million as 'X.XXM'
      return `${(number / 1e6).toFixed(2)}M`;
    } if (number >= 1000) {
      // Display numbers greater than or equal to 1000 as 'X.Xk'
      return `${(number / 1000).toFixed(1)}k`;
    }
    // Display other numbers as they are
    return number;
  };

  return (
    <>
      <li
        data-testid="box"
        className="country-box col-span-1 text-white p-4 relative flex flex-col"
        id={id}
      >
        <button type="button" onClick={() => navigate(`/conutrydata/${id}`)}>
          <FiArrowRightCircle className=" absolute right-2 top-1 text-xl" />
        </button>
        <div className=" h-20 w-28 self-center">
          <img src={flag} alt={alt} />
        </div>
        <div className="smallDetails self-end">
          <p className="countryName font-bold uppercase text-right text-lg sm:text-xl">
            {name}
          </p>
          <p className="population  text-sm">
            population:
            {' '}
            <span className=" font-bold text-base">{formatNumber(pop)}</span>
          </p>
        </div>
      </li>
    </>
  );
}

CountryBox.propTypes = {
  flag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  pop: PropTypes.number.isRequired,
  id: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CountryBox;
