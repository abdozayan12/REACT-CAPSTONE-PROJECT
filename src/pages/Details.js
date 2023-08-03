import { BiChevronLeft, BiMicrophone } from 'react-icons/bi/';
import { AiFillSetting } from 'react-icons/ai/';

import { useNavigate, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import asia from '../assets/images/asia.svg';
import africa from '../assets/images/africa.svg';
import europe from '../assets/images/europe.svg';
import northAmerica from '../assets/images/northAmerica.svg';
import ociania from '../assets/images/ociania.svg';
import southAmerica from '../assets/images/southAmerica.svg';

function CountryDetails() {
  const { loading, countries, error } = useSelector((state) => state.countries);
  const nav = useNavigate();
  const { countryId } = useParams();

  const countryData = countries.filter(
    (country) => country.countryId === countryId,
  );

  if (loading === 'pending') {
    return (
      <div className=" h-screen w-full flex justify-center items-center">
        <div role="status" className=" flex flex-col justify-center">
          <svg aria-hidden="true" className="w-8 h-8 ml-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div data-testid="detailsPage">
      <div className=" bg-main w-full h-16 flex items-center justify-around">
        <button type="button" onClick={() => nav('/')}>
          <BiChevronLeft className=" text-3xl" />
        </button>
        <p className=" font-bold">Information and Stats</p>
        <div className="flex">
          <BiMicrophone className=" text-lg mr-2" />
          <AiFillSetting className=" text-lg" />
        </div>
      </div>
      <div className="contianer">
        <div className="general flex flex-row justify-around items-center h-56 bg-sec">
          {(() => {
            switch (countryData[0].continents[0]) {
              case 'Oceania':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32 h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Oceania
                    </p>
                    <div className=" w-24 ">
                      <img src={ociania} alt="Ociania continent" />
                    </div>
                  </div>
                );

              case 'Africa':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Africa
                    </p>
                    <div className=" w-24 ">
                      <img src={africa} alt="Africa continent" />
                    </div>
                  </div>
                );

              case 'Asia':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">Asia</p>
                    <div className=" w-24 ">
                      <img src={asia} alt="Asia continent" />
                    </div>
                  </div>
                );
              case 'Europe':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Europe
                    </p>
                    <div className=" w-24 ">
                      <img src={europe} alt="Europe continent" />
                    </div>
                  </div>
                );
              case 'North America':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase w-36">
                      North America
                    </p>
                    <div className=" w-24 ">
                      <img src={northAmerica} alt="North America continent" />
                    </div>
                  </div>
                );
              case 'South America':
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase w-36">
                      South America
                    </p>
                    <div className=" w-24 ">
                      <img src={southAmerica} alt="South America continent" />
                    </div>
                  </div>
                );
              default:
                return (
                  <div className="continet flex flex-col-reverse items-center justify-around  w-32   h-40 relative mb-6">
                    <p className=" absolute top-36 font-bold uppercase">
                      Antarctica
                    </p>
                    <div className=" w-24 ">
                      <img src={europe} alt="Antarctica continent" />
                    </div>
                  </div>
                );
            }
          })()}
          <div className="country flex flex-col-reverse items-center justify-around  w-32  h-40 relative mb-6">
            <p className=" absolute top-36 font-bold uppercase">
              {countryData[0].name}
            </p>
            <div className=" w-28">
              <img src={countryData[0].flag} alt={countryData[0].alt} />
            </div>
          </div>
        </div>
        <div className="details  h-auto flex justify-center">
          <ul className=" flex flex-col justify-center overflow-y-auto w-full ">
            <li className=" p-2 ">
              <span className=" text-base font-semibold">
                {`${countryData[0].name}'s details:`}
              </span>
            </li>
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Logo:</span>
              <span className=" w-7">
                <img src={countryData[0].coatOfArms} alt="Coat of arms" />
              </span>
            </li>

            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Offical Name:</span>
              <span className=" font-medium text-base">
                {countryData[0].officialName}
              </span>
            </li>
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Capital:</span>
              <span className=" font-medium text-base">
                {countryData[0].capital}
              </span>
            </li>
            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Area:</span>
              <span className=" font-medium text-base">
                {`${countryData[0].area} sq km`}
              </span>
            </li>

            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Region:</span>
              <span className=" font-medium text-base">
                {countryData[0].region}
              </span>
            </li>

            <li className="flex justify-between px-8 h-16 items-center">
              <span className=" font-semibold text-base">Time Zone:</span>
              <span className=" font-medium text-base">
                {countryData[0].timezones}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
export default CountryDetails;
