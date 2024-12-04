import { Texture } from "@/assets";
import React from "react";

const Organizer = () => {
  return (
    <div className="relative p-10 bg-white text-gray-800 flex flex-col justify-center items-center">
      <img
        className=" absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px]"
        src={Texture}
        alt="Texture"
      />
      <h1 className="text-center text-green-800 text-4xl font-bold mb-6">
        Conference Organizers
      </h1>

      <table className="w-full max-w-[900px] border-collapse mt-6 shadow-xl animate-fadeInLeft">
        <thead>
          <tr className="bg-white">
            <th className="bg-gradient-to-r from-uni-green2 to-uni-green2 text-white py-3 px-4 text-left text-lg">
              No.
            </th>
            <th className="bg-gradient-to-r from-uni-green2 to-uni-green2-light text-white py-3 px-4 text-left text-lg">
              Organizer Name
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">01</td>
            <td className="py-3 px-4 border border-gray-200">
              Faculty of Economic, Commerce, and Management Sciences "Setif 1
              University_Ferhat Abass"
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">02</td>
            <td className="py-3 px-4 border border-gray-200">
              International Association for Islamic Economics
            </td>
          </tr>
          <tr className="bg-white">
            <td className="py-3 px-4 border border-gray-200">03</td>
            <td className="py-3 px-4 border border-gray-200">
              High Islamic Council
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Organizer;
