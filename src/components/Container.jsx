const Container = ({ children, className }) => {
   return (
      <div
         className={`w-full md:w-[900px]  lg:w-[1300px] mx-auto ${className}`}
      >
         {children}
      </div>
   );
};

export default Container;
