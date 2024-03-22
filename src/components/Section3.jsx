import React from 'react';
import img from '/section3.jpeg';

function Section3() {
  return (
    <div className="relative">
      <img
        src={img}
        alt="Background Image"
        className="w-full h-[300px] sm:h-[400px] md:h-[430px] lg:h-[500px] object-cover"
      />
      <div className="absolute inset-0 text-center mx-auto text-white">
        <div className="flex flex-col justify-center mt-10 sm:mt-14 gap-y-3 sm:gap-y-4 md:gap-y-5">
          <h1 className="text-5xl font-bold">Achievements</h1>
          <div className="flex flex-row justify-center items-center gap-x-6 sm:gap-x-8 md:gap-x-14 lg:gap-x-24 mt-8 px-1 font-medium sm:font-semibold ">
            <span className="bg-transparent  border-white rounded-full overflow-hidden border-4 flex flex-col items-center text:md  sm:text-lg md:text-xl lg:text-4xl justify-center  w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72  ">
              <p>180</p>
              <p>Happy Clients</p>
            </span>
            <span className="bg-transparent  border-white rounded-full overflow-hidden border-4 flex flex-col items-center text:md  sm:text-lg md:text-xl lg:text-4xl justify-center  w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64 xl:w-72 xl:h-72  ">
              <p>17</p>
              <p>Awards Won</p>
            </span>  
                <span className="bg-transparent  border-white rounded-full overflow-hidden border-4 flex flex-col items-center text:md  sm:text-lg md:text-xl lg:text-4xl justify-center  w-32 h-32 sm:w-44 sm:h-44 md:w-48 md:h-48 lg:w-64 lg:h-64      xl:w-72 xl:h-72  ">
              <p>98</p>
              <p>Projects</p>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section3;