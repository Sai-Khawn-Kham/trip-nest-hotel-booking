import React from "react";
import Container from "../../../components/Container";

const PublicFooter = () => {
   const date = new Date();
   return (
      <footer className="mt-auto py-3">
         <Container>
            <div className="grid grid-cols-4 grid-rows-1 border-t border-gray-500 py-5">
               <div>
                  <h3 className="text-3xl mb-3 font-semibold">Contact Us</h3>
                  <div className="text-gray-700 text-xl font-light">
                     <p>Customer Support</p>
                     <p>Service Guarantee</p>
                     <p>More Service Info</p>
                  </div>
                  <div className="flex ml-2 gap-3 py-3">
                     <img
                        className="size-7"
                        src="./src/assets/facebook.png"
                        alt="facebook"
                     />
                     <img
                        className="size-7"
                        src="./src/assets/x.png"
                        alt="twitter"
                     />
                     <img
                        className="size-7"
                        src="./src/assets/instagram.png"
                        alt="instagram"
                     />
                  </div>
               </div>
               <div>
                  <h3 className="text-3xl mb-3 font-semibold">About</h3>
                  <div className="text-gray-700 text-xl font-light">
                     <p>About TripNest.com</p>
                     <p>News</p>
                     <p>Terms and Conditions</p>
                     <p>Privacy and Cookies</p>
                  </div>
               </div>
               <div>
                  <h3 className="text-3xl mb-3 font-semibold">Other Services</h3>
                  <div className="text-gray-700 text-xl font-light">
                     <p>Insurance Services</p>
                     <p>Security and Compliance</p>
                     <p>Translation and Languages</p>
                     <p>Childcare and Pet Services</p>
                  </div>
               </div>
               <div className="w-[247px]">
                  <h4 className="text-2xl text-gray-500 font-normal mb-1">Payment Method</h4>
                  <div className="grid grid-cols-3 grid-rows-2 justify-center items-center gap-y-1 mb-2">
                     <div className="border w-[52px] h-8 flex justify-center items-center px-3 py-1">
                        <img src="./src/assets/visa.png" alt="VISA" />
                     </div>
                     <div className="border w-[52px] h-8 flex justify-center items-center px-3 py-1">
                        <img src="./src/assets/fpx.png" alt="FPX" />
                     </div>
                     <div className="border w-[52px] h-8 flex justify-center items-center px-3 py-1">
                        <img
                           src="./src/assets/mastercard.png"
                           alt="Master Card"
                        />
                     </div>
                     <div className="border w-[52px] h-8 flex justify-center items-center px-3 py-1">
                        <img src="./src/assets/apple-pay.png" alt="Apple Pay" />
                     </div>
                     <div className="border w-[52px] h-8 flex justify-center items-center px-3 py-1">
                        <img src="./src/assets/g-pay.png" alt="Google Pay" />
                     </div>
                  </div>
                  <h4 className="text-2xl text-gray-500 font-normal mb-1">Our Partners</h4>
                  <div className="flex items-center gap-x-2">
                     <img
                        className="h-8"
                        src="./src/assets/grab.png"
                        alt="Grab"
                     />
                     <img
                        className="h-8"
                        src="./src/assets/kbz.png"
                        alt="KBZ"
                     />
                  </div>
               </div>
            </div>
            <div className="text-gray-600 text-center border-t border-gray-500 py-3 text-base font-light">
               <p>
                  Copyright © {date.getFullYear()}{" "}
                  <a
                     href="https://mms-it.com"
                     className="underline text-gray-500"
                  >
                     TripNest.com
                  </a>
                  &nbsp;Myanmar Co.Ltd. All rights reserved.
               </p>
               <p>Site Operator: TripNest.com Myanmar Co.Ltd</p>
            </div>
         </Container>
      </footer>
   );
};

export default PublicFooter;
