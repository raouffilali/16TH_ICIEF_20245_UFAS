import { Bodytexture } from '@/assets'
import { scientificcommittees } from '@/constants/Organizing Committee'

const OrganizingCommitte = () => {
  return (
    <div className="relative flex flex-col justify-center items-center w-full h-ful px-6 py-20 ">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px]  "
        src={Bodytexture}
        alt="Texture"
      />
      <h2
        className="p-1 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text text-4xl font-bold mb-5 animate-slidein100"
      >
        Organizing Committee
      </h2>

      {/* Another Blurred Transparent Card with Organizing Committee */}
      <div className="animate-fadeInLeft">
        <div className="mt-8 w-auto bg-white bg-opacity-80 backdrop-blur-lg border border-gray-500 p-6 rounded-lg transition-all ease-in-out duration-300 transform hover:scale-105 ">
          <ul className="text-uni-green2 text-xl font-semibold space-y-3">
            <li>
              1. Dr. Bensalem Farouq, Setif 1 University _ Ferhat Abbas,
              Algeria.
            </li>
            <li>
              2. Dr. Bouguaa Zineb, Setif 1 University _ Ferhat Abbas, Algeria.
            </li>
            <li>
              3. Dr. Harfouche Anissa, Setif 1 University _ Ferhat Abbas,
              Algeria.
            </li>
            <li>
              4. Dr. Khelfi Rafik, Setif 1 University _ Ferhat Abbas, Algeria.
            </li>
            <li>
              5. Dr. Riadh Ainouss, Setif 1 University _ Ferhat Abbas, Algeria.
            </li>
            <li>
              6. Dr. Hamza Ouassaa, Setif 1 University _ Ferhat Abbas, Algeria.
            </li>
            <li>
              7. Dr. Noudjoum Guemazi, Setif 1 University _ Ferhat Abbas,
              Algeria.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OrganizingCommitte