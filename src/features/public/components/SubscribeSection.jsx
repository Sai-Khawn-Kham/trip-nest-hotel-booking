import React from "react";

const SubscribeSection = () => {
  return (
    <div className="w-full h-[298px] bg-[#CCD8EA] rounded-md">
      <div className="h-full flex flex-col items-center justify-center gap-7">
        <div className="flex flex-col items-center gap-5">
          <p className="text-4xl font-semibold ">Subscribe to updates</p>
          <p className="border-t-2 border-gray-800 w-[420px]"></p>
          <p className="text-[18px] text-slate-600">
            Get email notifications about status page updates.{" "}
          </p>
        </div>
        <div className="items-center mx-auto mb-3 space-y-4 max-w-screen-sm sm:flex sm:space-y-0">
          <div className="relative w-full">
            <label
              htmlFor="email"
              className="hidden mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <svg
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
            </div>
            <input
              className="block p-2 pl-10 pr-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border placeholder:text-gray-300 border-blue-300 sm:rounded-none sm:rounded-l-lg  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder="Email address"
              type="email"
              id="email"
              required
            />
          </div>
          <div>
            <button
              type="submit"
              className="py-2 px-5 w-full text-sm font-medium text-center uppercase text-white rounded-lg border cursor-pointer bg-blue-800 border-blue-600 sm:rounded-none sm:rounded-r-lg hover:bg-blue-800  dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
