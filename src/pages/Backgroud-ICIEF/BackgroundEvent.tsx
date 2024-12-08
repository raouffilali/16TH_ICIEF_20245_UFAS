import { useEffect } from 'react';
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Bodytexture } from '@/assets'; // Adjust the import path as needed

const BackgroundEvent = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative pt-10 p-10 bg-gradient-to-br from-gray-50 via-white to-gray-50 text-gray-800 flex flex-col justify-center items-center">
      {/* Background Effect */}
      <img
        className=" opacity-15 absolute inset-0 w-full h-full object-cover md:opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      {/* Page Content */}
      <div className="flex flex-col items-center relative z-10 w-full max-w-[950px]">
        <h1 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein100">
          Background of ICIEF (International Conference on Islamic Economics and Finance):
        </h1>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein200">
          The International Association for Islamic Economics is committed to organizing the International Conference on Islamic Economics and Finance (ICIEF), a global academic and scientific event aimed at promoting scientific research and development in Islamic economics and finance.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein300">
          This conference is held periodically in collaboration between the International Association for Islamic Economics, academic and research institutions, as well as Islamic financial institutions. Bringing together academic researchers and professionals from around the world. The first conference was held in 1976 in Makkah until the 15th conference was held in Kuala Lumpur, Malaysia.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein400">
          The 16th edition of the conference is scheduled to be held, at the Faculty of Economics, Commerce, and Management Sciences at "Sétif 1 University _Ferhat Abbas," Algeria, Titled: "Islamic Financial Industry After Fifty Years of Practice."
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein500">
          Series of the conference
        </h2>
        <table className="w-full shadow-lg border border-gray-300 text-base md:text-lg mb-6 animate-slidein600">
          <tbody>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">1st</td>
              <td className="p-4">1976</td>
              <td className="p-4">Makkah Al Mukaramah, Kingdom of Saudi Arabia, King Abdulaziz University, Jeddah</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">2nd</td>
              <td className="p-4">1983</td>
              <td className="p-4">Islamabad, International Islamic University Islamabad</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">3rd</td>
              <td className="p-4">1992</td>
              <td className="p-4">Kuala Lumpur, International Islamic University Malaysia (Iium)</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">4th</td>
              <td className="p-4">2000</td>
              <td className="p-4">Leicester, University of Loughborough</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">5th</td>
              <td className="p-4">2003</td>
              <td className="p-4">Manama, Bahrain University</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">6th</td>
              <td className="p-4">2005</td>
              <td className="p-4">Jakarta, Indonesian Ministry of Finance and The Central Bank Of Indonesia</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">7th</td>
              <td className="p-4">2008</td>
              <td className="p-4">Jeddah, King Abdulaziz University</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">8th</td>
              <td className="p-4">2011</td>
              <td className="p-4">Doha, Qatar Faculty of Islamic Studies</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">9th</td>
              <td className="p-4">2013</td>
              <td className="p-4">Istanbul, Turkey and Hosted By Sesric</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">10th</td>
              <td className="p-4">2015</td>
              <td className="p-4">Doha, Qatar Faculty of Islamic Studies</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">11th</td>
              <td className="p-4">2016</td>
              <td className="p-4">Kuala Lumpur, International Islamic University Malaysia (Iium)</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">12th</td>
              <td className="p-4">2020</td>
              <td className="p-4">Istanbul, Istanbul Zaim University</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">13th</td>
              <td className="p-4">2021</td>
              <td className="p-4">Jakarta, Institut Pertanian Bogor</td>
            </tr>
            <tr className="bg-uni-green2-light text-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">14th</td>
              <td className="p-4">2022</td>
              <td className="p-4">Kuala Lumpur, Inceif University</td>
            </tr>
            <tr className="bg-white border-b border-gray-300">
              <td className="p-4 border-r border-gray-300">15th</td>
              <td className="p-4">2024</td>
              <td className="p-4">Kuala Lumpur, International Islamic University Malaysia (Iium)</td>
            </tr>
            <tr className="bg-uni-yellow text-white shadow-xl border-2 border-uni-green2 border-dashed">
              <td className="p-4 border-r border-gray-300">16th</td>
              <td className="p-4">2025</td>
              <td className="p-4">Faculty of Economics, Commerce, and Management Sciences, Setif 1 University _ Ferhat Abbas, Setif, Algeria</td>
            </tr>
          </tbody>
        </table>
        <h2 className="mt-12 text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-uni-green2 to bg-uni-green2-light bg-clip-text text-transparent border-b-2 border-dashed pb-2 animate-slidein700">
          Introduction:
        </h2>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein800">
          The Islamic finance industry emerged in the 1970s with the establishment of pioneering institutions such as: Dubai Islamic Bank and Islamic Development Bank. These institutions distinguished themselves by providing Shariah-compliant banking services, prohibiting interest-based transactions, and emphasizing risk and profit sharing through contracts like musharakah and mudarabah while avoiding usurious transactions.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein900">
          The Islamic financial industry has experienced remarkable growth and development over the past fifty years, representing a fundamental transformation in the provision of financial services in accordance with Islamic Shariah principles. Over time, this industry has become an integral part of the global financial system, expanding significantly to encompass a diverse range of financial products and services that meet the needs of individuals and businesses while maintaining strict adherence to Shariah principles.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein1000">
          The Islamic financial industry has witnessed significant expansion across both Islamic and non-Islamic countries. Islamic financial institutions now offer diverse instruments, including sukuk, takaful, and sharia-compliant investment funds. Furthermore, organizations such as the Accounting and Auditing Organization for Islamic Financial Institutions (AAOIFI) and the Islamic Financial Services Board (IFSB) have been instrumental in developing regulatory frameworks and standardizing industry practices.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein1100">
          The Islamic finance industry has faced several challenges, including integration with global regulatory frameworks, maintaining sharia compliance, and developing innovative products for modern markets. Technological advancement has driven transformation through digital Islamic banking services, sharia-compliant crowdfunding platforms, and fintech solutions to enhance accessibility and efficiency.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein1200">
          The Islamic finance industry has contributed to social and economic development by financing small and medium enterprises (SME), and supporting sustainable and socially responsible investments. It has also played a pivotal role in promoting financial inclusion, providing broad segments of society with access to financial services that align with their values and beliefs.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein1300">
          Looking ahead, the Islamic finance industry shows strong potential for continued growth and further integration into the global economy. Sukuk are increasingly important in financing infrastructure and development projects. Moreover, fintech solutions are anticipated to further enhance operational efficiency and broaden the industry's customer base. The industry's commitment to Sustainable Development Goals through green and socially responsible investments positions it as a model for ethical and sustainable finance.
        </p>
        <p className="text-base md:text-lg md:italic mb-6 text-left w-full animate-slidein1400">
          In conclusion, the Islamic financial industry has established itself as a fundamental component of the global financial system, providing an ethical and sustainable financial model that promotes economic growth and social development in accordance with Islamic Sharia principles.
        </p>

      </div>
    </div>
  );
}

export default BackgroundEvent;