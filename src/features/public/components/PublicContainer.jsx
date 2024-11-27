const PublicContainer = ({ children, className }) => {
   return (
      <div
         className={`w-full md:w-[720px] lg:w-[976px] mx-auto ${className}`}
      >
         {children}
      </div>
   );
};

export default PublicContainer;
