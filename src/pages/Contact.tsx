import React from 'react'

const Contact = () => {
  return (
    <>
      <>
        <div className="w-full bg-gradient-to-l from-[#093304] via-[#1b7212] to-[#093304] h-[512px] flex items-start justify-center p-12">
          <img src="" alt="" />
        </div>

        <div className="mx-auto w-full felx flex-col p-4  bg-[#EBF4F6] mt-[-20px]">
          <h1 className="text-xl">contact us</h1>
        </div>
      </>
      {/* <div className=' bg-uni-green text-white mt-[50px] w-full h-full'>banner</div> */}
      <div className="flex justify-center items-center bg-white">
        <div className=" flex flex-col  ">
          <div className=" justify-center md:justify-normal ">Contact Us</div>
          <div
            className="flex flex-col justify-center items-center
       m-3 bg-gray-200 text-black w-[150px] h-[500px]  md:w-[900px]  rounded-lg shadow-lg"
          ></div>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Contact