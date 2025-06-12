import React from "react";

const Footer1 = () => {
  return (
    <div className="flex justify-center gap-[350px] py-8">
      <div className="flex flex-col items-center text-center">
        <img src="images/user.png" className="w-[55px] h-[55px] mb-2" />
        <div>
          <h2 className="text-2xl font-bold">90+</h2>
          <a className="text-base text-gray-600">User</a>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="images/location.png" className="w-[55px] h-[55px] mb-2" />
        <div>
          <h2 className="text-2xl font-bold">30+</h2>
          <a className="text-base text-gray-600">Location</a>
        </div>
      </div>

      <div className="flex flex-col items-center text-center">
        <img src="images/Server.png" className="w-[55px] h-[55px] mb-2" />
        <div>
          <h2 className="text-2xl font-bold">50+</h2>
          <a className="text-base text-gray-600">Serves</a>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
