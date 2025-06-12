import React from 'react';

const Hero2 = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center px-4 py-12 gap-10">
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img src="images/Illustration 2.png" alt="Person with laptop" className="max-w-full h-auto" />
      </div>

      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="font-rubik font-medium text-[35px] leading-[50px] text-center md:text-left mb-[5px]">
          We Provide Many <br />
          Features You Can Use
        </h2>
        <p className="text-gray-500 mb-6">
          You can explore the features that we provide with fun <br />
          and have their own functions each feature.
        </p>

      
        <ul className="space-y-3 text-left">
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl"></span> Powerfull online protection.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl"></span> Internet without borders.
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl"></span> Supercharged VPN
          </li>
          <li className="flex items-start gap-2">
            <span className="text-green-500 text-xl"></span> No specific time limits.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero2;
