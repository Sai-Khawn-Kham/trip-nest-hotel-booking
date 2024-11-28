import React from 'react'

const HomePageCustomerReviews = () => {
    const customerReviews = 4;
    let length = 5;
    const numbers = Array.from({ length }, (_, i) => i + 1);
    
  return (
    <div className='grid grid-cols-2 gap-4 mb-28'>
        <div className='col-span-1 flex flex-col gap-4 border p-4 border-gray-300 rounded-lg bg-slate-100 hover:shadow-md' >
            <div className='flex gap-8 items-center justify-start'>
                <img src="../../../../src/assets/customerReviews1.png" className='w-[52px] h-[52px]' alt="" />
                <h1 className='text-2xl'>By Nix Maxwell</h1>
            </div>
           <div className='flex gap-1 '>
           {numbers.map((num) => (
                <svg
                key={num}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-7 stroke-yellow-300 ${
                  num <= customerReviews && "fill-yellow-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
           </div>
           <div>
            <p className='text-[16px] text-gray-400'>
            I will definitely use TripNest again for future travels and recommend it to anyone looking for a reliable site with great deals and top-notch customer service!
            </p>
           </div>
        </div>

        <div className='col-span-1 flex flex-col gap-4 border p-4 border-gray-300 rounded-lg bg-slate-100 hover:shadow-md' >
            <div className='flex gap-8 items-center justify-start'>
                <img src="../../../../src/assets/customerReviews2.png" className='w-[52px] h-[52px]' alt="" />
                <h1 className='text-2xl'>By William James</h1>
            </div>
           <div className='flex gap-1 '>
           {numbers.map((num) => (
                <svg
                key={num}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className={`size-7 stroke-yellow-300 ${
                  num <= customerReviews && "fill-yellow-300"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
                />
              </svg>
            ))}
           </div>
           <div>
            <p className='text-[16px] text-gray-400'>
            Overall, TrustNest made planning my trip hassle-free, and I’ll definitely use it again for my next getaway. Highly recommend to anyone who wants great deals and reliable service!
            </p>
           </div>
        </div>
    </div>
  )
}

export default HomePageCustomerReviews