import { useState, useEffect, SetStateAction } from 'react';
import { Bodytexture } from '@/assets';
import { scientificcommittees } from '@/constants/Scientific Committee';

export const ScientificCommitte = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [animationClass, setAnimationClass] = useState('');
  const itemsPerPage = 8;

  // Calculate the items to display based on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = scientificcommittees.slice(indexOfFirstItem, indexOfLastItem);

  // Calculate total pages
  const totalPages = Math.ceil(scientificcommittees.length / itemsPerPage);

  useEffect(() => {
    if (animationClass) {
      const timer = setTimeout(() => {
        setAnimationClass('');
      }, 500); // Duration of the animation
      return () => clearTimeout(timer);
    }
  }, [animationClass]);

  const handlePageChange = (newPage: SetStateAction<number>) => {
    setAnimationClass('animate-slideIn');
    setTimeout(() => {
      setCurrentPage(newPage);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 0); // Delay to ensure animation class is applied
  };

  return (
    <div className="relative flex flex-col justify-center items-center w-full h-full px-6 py-20 ">
      <img
        className="absolute inset-0 w-full h-full object-cover opacity-25 blur-[0.5px] z-0"
        src={Bodytexture}
        alt="Texture"
      />

      <h2
        className="relative p-1 text-center items-center bg-gradient-to-r from-uni-green2 via-uni-green2-light to-uni-green2 text-transparent 
          bg-clip-text text-4xl font-bold mb-5 animate-slidein100 z-10"
      >
        Scientific Committee
      </h2>

      <div className={`relative flex flex-row items-center mt-8 p-6 bg-transparent rounded-lg z-10 ${animationClass}`}>
        <div className="grid grid-col md:grid-cols-2 lg:grid-cols-4 gap-4 justify-center items-center md:gap-8 ">
          {currentItems.map((scientificcommittee) => (
            <div
              key={scientificcommittee.id}
              className="flex flex-col w-full h-full max-w-[300px] items-center bg-white drop-blur-lg border border-gray-600 bg-opacity-60
                      p-4 rounded-lg shadow-2xl my-6 md:my-0 transition-all ease-in-out duration-300 transform hover:scale-105"
            >
              {scientificcommittee.image && (
                <img
                  src={scientificcommittee.image}
                  alt={scientificcommittee.name}
                  className="w-full h-full max-w-[190px] max-h-[200px] object-cover border-2 border-uni-green bg-white shadow-2xl rounded-full "
                />
              )}
              <div className="w-full h-full flex flex-col items-center md:items-center p-2  ">
                <h3 className=" px-2 text-xl font-bold text-gray-800 text-center md:text-center">
                  {scientificcommittee.name}
                </h3>
                {scientificcommittee.description && (
                  <div className="text-center md:text-center mt-2 h-20 overflow-y-auto text-uni-green border-0 text-sm px-2 rounded-md scrollbar-thin scrollbar-thumb-uni-green2 scrollbar-track-gray-100 bg-transparent">
                    {scientificcommittee.description}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="relative flex justify-center mt-4 z-10">
        <button
          onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-uni-green2 text-white rounded disabled:opacity-50"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-uni-green2 text-white rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </div>
  );
};