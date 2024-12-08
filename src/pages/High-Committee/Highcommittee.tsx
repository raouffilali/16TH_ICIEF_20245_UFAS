import { Bodytexture, Conf } from "@/assets";
import { highcommittees } from "../../constants/Highcommittee";

const Hicommittee = () => {
  return (
    <div className="relative pt-10  bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px] ">
        {/* Page Title */}
        <h1
          className="p-1 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text text-4xl font-bold mb-5 animate-slidein100  "
        >
          High Committee
        </h1>

        {/* Group 1: Honorary Chairs */}
        <div className="mb-4">
          <h2 className=" text-center text-2xl font-bold text-gray-800 mb-4 animate-slidein100 ">
            Honorary Chairs
          </h2>
          <div className="relative flex flex-col md:flex-row md:gap-8 animate-slidein100 mx-8  ">
            {highcommittees.slice(0, 2).map((Highcommittee) => (
              <div
                key={Highcommittee.id}
                className="flex flex-col h-full items-center md:flex-row md:items-start bg-gradient-to-br from-uni-green2 via-uni-green2-light to-white
                  p-4 rounded-lg shadow-2xl md:w-[calc(50%-16px)] mb-6 mt-6 md:mb-0 md:mt-0 transition-all ease-in-out duration-300 transform hover:scale-105 "
              >
                {Highcommittee.image && (
                  <img
                    src={Highcommittee.image}
                    alt={Highcommittee.name}
                    className="w-full h-auto max-w-[150px] bg-white shadow-2xl object-cover rounded-lg mb-4 animate-slidleft800"
                  />
                )}
                <div className="w-full h-full flex flex-col items-center md:items-start p-2 animate-slideright800">
                  <h3 className="text-xl font-bold text-white text-center md:text-start">
                    {Highcommittee.name}
                  </h3>
                  {Highcommittee.description && (
                    <div className="mt-2 h-24 overflow-y-auto text-white border-0 text-sm p-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                      {Highcommittee.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Group 2: Conference Chairman */}
        <div>
          <h2 className="text-center text-2xl font-bold text-gray-800 mb-4 animate-slidein100">
            Conference Chairman
          </h2>
          <div className="flex flex-col md:flex-row md:gap-8 animate-slidein100 mx-8 ">
            {highcommittees.slice(2).map((Highcommittee) => (
              <div
                key={Highcommittee.id}
                className="flex flex-col h-full items-center mx md:flex-row md:items-start bg-gradient-to-br from-uni-green2 via-uni-green2-light to-white bg-opacity-60
                  p-4 rounded-lg shadow-2xl mb-6 mt-6 md:mb-0 md:mt-0 transition-all ease-in-out duration-300 transform hover:scale-105"
              >
                {Highcommittee.image && (
                  <img
                    src={Highcommittee.image}
                    alt={Highcommittee.name}
                    className="w-full h-auto max-w-[150px] bg-white shadow-2xl object-cover rounded-lg mb-4 animate-slidleft800"
                  />
                )}
                <div className="w-full h-full flex flex-col items-center md:items-start p-2 animate-slideright800 ">
                  <h3 className="text-xl font-bold text-white text-center md:text-start">
                    {Highcommittee.name}
                  </h3>
                  {Highcommittee.description && (
                    <div className="mt-2 h-24 overflow-y-auto text-white border-0 text-sm p-2  rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                      {Highcommittee.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="w-full relative my-[50px] h-full py-10 overflow-hidden animate-slidein300">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-full bg-cover bg-center bg-fixed"
          style={{ backgroundImage: `url(${Conf})` }}
        ></div>

        {/* Gradient Overlay */}
        <div className="w-full absolute inset-0 bg-gradient-to-r from-uni-green2 to-uni-green2-light opacity-90"></div>

        {/* Content Over Gradient */}

        <div className="relative flex flex-col justify-center items-center w-full h-full text-white px-6 ">
          <h2 className="text-4xl text-center font-bold mb-4 mt-5 animate-slidleft800">
            Steering Committee Of The Conference
          </h2>
          <p className="text-lg text-center max-w-3xl animate-slideright800">
            steering comitte description
          </p>

          {/* Blurred Transparent Card with Steering Committee */}
          <div className="mt-8 max-w-[950px] w-full bg-white bg-opacity-20 hover:bg-opacity-50 backdrop-blur-lg border border-white shadow-xl p-6 rounded-lg animate-slidleft800 transition-all ease-in-out duration-300 transform hover:scale-105">
            <ul className="text-white space-y-3 hover:text-uni-green2  ">
              <li>
                1. Prof Dr. Chaouki Bourakba, Dean of the Faculty of Economics,
                Commerce, and Management Sciences, Setif 1 University _ Ferhat
                Abbas, Algeria.
              </li>
              <li>
                2. Prof Dr. Omar Zuhair Hafiz, President at Hafiz Financial
                Consulting, Saudi Arabia.
              </li>
              <li>
                3. Prof Dr. Abdelkader Chachi, Professor at Istanbul Sabahattin
                Zaim University, Istanbul, Turkey
              </li>
              <li>
                4. Prof Dr. Irfan Syauqi Beik, Dean of the Faculty of Economics
                and Management, IPB University, Indonesia.
              </li>
              <li>
                5. Prof Dr. Mehmet Bulut, President of Istanbul Sabahattin Zaim
                University, Turkey.
              </li>
              <li>
                6. Prof. Dr. Mohamed Boudjellal, High Islamic Council, Algeria.
              </li>
            </ul>
          </div>

          <h2 className="text-center text-4xl font-bold mb-4 mt-5 animate-slideright800">
            Scientific Committee:
          </h2>
          <p className="text-lg text-center max-w-3xl animate-slidleft800">
            Scientific Committee: description
          </p>

          {/* Another Blurred Transparent Card with Steering Committee */}
          <div className="mt-8 max-w-[950px] w-full bg-white bg-opacity-20 backdrop-blur-lg border shadow-xl border-white p-6 rounded-lg animate-slideright800 transition-all ease-in-out duration-300 transform hover:scale-105">
            <ul className="text-white space-y-3 items-center">
              <li>
                1. Prof. Dr. Tariqullah Khan, Istanbul Zaim University, Turkey.
              </li>
              <li>
                2. Prof. Dr. Mohammad Kabir Hassan, University of New Orleans,
                USA.
              </li>
              <li>
                3. Prof. Dr. Sayyid Tahir, International Islamic University
                Islamabad, Pakistan.
              </li>
              <li>4. Prof. Dr. Mansorh Ibrahim, INCEIF University, USA.</li>
              <li>
                5. Prof. Dr. Mustafa Omar, International Islamic University
                Malaysia, Malaysia.
              </li>
              <li>
                6. Prof. Dr. Aslam Haneef, International Islamic university,
                Malaysia.
              </li>
              <li>7. Prof. Dr. Mehmet Asutay, Durham University, England.</li>
              <li>
                8. Prof. Dr. Abderrahmane Senouci, High Islamic Council,
                Algeria.
              </li>
              <li>
                9. Prof. Dr. Ahmed Belouafi, King Abdulaziz University, Saudi
                Arabia.
              </li>
              <li>
                10. Prof. Dr. Fadul Abdulkarim, King Abdulaziz University, Saudi
                Arabia.
              </li>
              <li>
                11. Prof. Dr. Abdelhalim Gharbi, Imam Mohammad Ibn Saud Islamic
                University, Saudi Arabia.
              </li>
            </ul>
          </div>

          <h2 className="text-center text-4xl font-bold mb-4 mt-5 animate-slidleft800">
            Organizing Committee:
          </h2>
          <p className="text-lg text-center max-w-3xl animate-slideright800">
            Organizing Committee: description
          </p>

          {/* Another Blurred Transparent Card with Steering Committee */}
          <div className="mt-8 max-w-[950px] w-full bg-white bg-opacity-20 backdrop-blur-lg border shadow-xl border-white p-6 rounded-lg animate-slidleft800 transition-all ease-in-out duration-300 transform hover:scale-105">
            <ul className="text-white space-y-3">
              <li>
                1. Dr. Bensalem Farouq, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
              <li>
                2. Dr. Bouguaa Zineb, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
              <li>
                3. Dr. Harfouche Anissa, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
              <li>
                4. Dr. Khelfi Rafik, Setif 1 University _ Ferhat Abbas, Algeria.
              </li>
              <li>
                5. Dr. Riadh Ainouss, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
              <li>
                6. Dr. Hamza Ouassaa, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
              <li>
                7. Dr. Noudjoum Guemazi, Setif 1 University _ Ferhat Abbas,
                Algeria.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hicommittee;
