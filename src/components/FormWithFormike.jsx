import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const FormWithFormike = () => {
  const getContries = async () => {
    const res = await fetch("https://restcountries.com/v3.1/all")
    const response = await res.json();
    console.log(response.length);
  }

  useEffect(() => {
    getContries();
  },[])
  // fetch("https://restcountries.com/v3.1/all")
  //   .then((result) => console.log(result.json()))
  //   .catch((error) => console.log("error", error));

  
  return (
    <div className="w-screen min-h-screen bg-[#302e2b]">
      <div className="max-w-[768px] m-auto py-5 flex flex-col ">
        <div className="w-full p-8 flex bg-[#262522] rounded-lg">
          <div className="mr-6">
            <img
              className="w-[160px]"
              src="	https://images.chesscomfiles.com/uploads/v1/user/174668851.fd68ffc1.161x161o.5e0dada48cac@2x.jpg"
              alt="pro"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex gap-[0.8rem]">
              <h1 className="text-[2.4rem] font-[800] m-0 truncate text-[#FF8D33]">
                <Link to="https://www.chess.com/member/karanbairwaa">
                  Karanbairwaa
                </Link>
              </h1>
            </div>
            <div className="mt-2 flex flex-col">
              <div className=" text-[#e67f2e]">arjunaa</div>
              <div className="mt-2 text-[#cc7129]">Enter a Status here</div>
            </div>
          </div>
        </div>
        <div className="w-full flex bg-[#262522] mt-6 flex-col">
          <div className="p-[20px] w-full bg-[#FF8D33] rounded-t-lg">
            <span className="text-[#262522] font-[600] text-[1.6rem] truncate">
              BASIC MEMBER
            </span>
          </div>
          <div className="p-[3.2rem] rounded-b-lg">
            <div className="full">
              <form className="">
                <div className="flex mb-[15px] gap-4 items-center">
                  <div className="min-w-[170px] flex">
                    <label className="text-[#e67f2e] text-[1.2rem]">
                      Username
                    </label>
                  </div>
                  <span className="text-[#e67f2e]">Karanbairwaa</span>
                </div>
                <div className="flex mb-[15px] gap-4 items-center">
                  <div className="min-w-[170px] flex">
                    <label className="text-[#e67f2e] text-[1.2rem]">
                      First Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md border-2 border-[#FF8D33] bg-transparent text-[#FF8D33] focus:outline-none focus:border-[#FF8D33]"
                    />
                  </div>
                </div>
                <div className="flex mb-[15px] gap-4 items-center">
                  <div className="min-w-[170px] flex">
                    <label className="text-[#e67f2e] text-[1.2rem]">
                      Last Name
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md border-2 border-[#FF8D33] bg-transparent text-[#FF8D33] focus:outline-none focus:border-[#FF8D33]"
                    />
                  </div>
                </div>
                <div className="flex mb-[15px] gap-4 items-center">
                  <div className="min-w-[170px] flex">
                    <label className="text-[#e67f2e] text-[1.2rem]">
                      Email Address
                    </label>
                  </div>
                  <span className="text-[#e67f2e]">k***8@g***l.com</span>
                </div>
                <div className="flex mb-[15px] gap-4 items-center">
                  <div className="min-w-[170px] flex">
                    <label className="text-[#e67f2e] text-[1.2rem]">
                      Location
                    </label>
                  </div>
                  <div>
                    <input
                      type="text"
                      className="w-full px-3 py-2 rounded-md border-2 border-[#FF8D33] bg-transparent text-[#FF8D33] focus:outline-none focus:border-[#FF8D33]"
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormWithFormike;
