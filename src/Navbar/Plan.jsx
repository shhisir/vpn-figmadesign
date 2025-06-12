import React from "react";

const Plan = () => {
  return (
    <div className="flex flex-col items-center px-4 py-16 bg-white font-[Rubik]">
      <div className="text-center max-w-[555px] mb-16">
        <h1 className="text-3xl font-medium text-[#0B132A]">
          Choose Your Plan
        </h1>
        <p className="text-[#4F5665] mt-4">
          Let's choose the package that is best for you and explore it happily
          and cheerfully.
        </p>
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        <div className="w-[330px] h-[760px] border rounded-xl shadow-sm flex flex-col items-center p-6">
          <img src="images/Free.png" alt="Free Plan" className="mb-6" />
          <h2 className="text-xl font-bold mb-4">Free Plan</h2>
          <ul className="text-[#4F5665] space-y-2 mb-8">
            <li> Unlimited Bandwidth</li>
            <li> Encrypted Connection</li>
            <li> No Traffic Logs</li>
            <li> Works on All Devices</li>
          </ul>
          <p className="mt-auto text-lg font-semibold text-[#0B132A]">Free</p>
          <button className="mt-4 px-8 py-2 border border-red-500 rounded-full text-red-500 hover:bg-red-100">
            Select
          </button>
        </div>

        <div className="w-[330px] h-[760px] border rounded-xl shadow-sm flex flex-col items-center p-6">
          <img src="images/Standard.png" alt="Standard Plan" className="mb-6" />
          <h2 className="text-xl font-bold mb-4">Standard Plan</h2>
          <ul className="text-[#4F5665] space-y-2 mb-8">
            <li> Unlimited Bandwidth</li>
            <li> Encrypted Connection</li>
            <li> Yes Traffic Logs</li>
            <li> Works on All Devices</li>
            <li> Connect Anywhere</li>
          </ul>
          <p className="mt-auto text-lg font-semibold text-[#0B132A]">
            $9 <span className="text-sm text-[#4F5665]">/ mo</span>
          </p>
          <button className="mt-4 px-8 py-2 border border-red-500 rounded-full text-red-500 hover:bg-red-100">
            Select
          </button>
        </div>

        <div className="w-[330px] h-[760px] border-2 border-red-500 rounded-xl shadow-lg flex flex-col items-center p-6">
          <img src="images/Premium.png" alt="Premium Plan" className="mb-6" />
          <h2 className="text-xl font-bold mb-4">Premium Plan</h2>
          <ul className="text-[#4F5665] space-y-2 mb-8">
            <li>Unlimited Bandwidth</li>
            <li> Encrypted Connection</li>
            <li> Yes Traffic Logs</li>
            <li> Works on All Devices</li>
            <li> Connect Anywhere</li>
            <li> Get New Features</li>
          </ul>
          <p className="mt-auto text-lg font-semibold text-[#0B132A]">
            $12 <span className="text-sm text-[#4F5665]">/ mo</span>
          </p>
          <button className="mt-4 px-8 py-2 rounded-full text-white bg-red-500 hover:bg-red-600 shadow-md">
            Select
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center px-4 py-16 bg-white font-[Rubik]">
        <div className="text-center max-w-[555px] mb-16">
          <h1 className="text-3xl font-medium text-[#0B132A] font-[Rubik] w-[500px]">
            Huge Global Network of Fast VPN
          </h1>
          <p className="text-[#4F5665] mt-4">
            See <span>LaslesVPN </span>everywhere to make it easier for you when
            you move locations.
          </p>
        </div>
      </div>
      <div><img src="images/Huge Global.jpg"></img></div>
    </div>
  );
};

export default Plan;
