/** @type {import('tailwindcss').Config} */
export default {
   content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js",
   ],
   theme: {
      fontFamily: {
         sans: ["Open Sans", "Padauk", "sans-serif"],
      },
      extend: {
         fontFamily: {
            heading: ["Poppins", "sans-serif"],
         },
      },
   },
   plugins: [require("flowbite/plugin")],
};
