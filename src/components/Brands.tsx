import React from 'react';

const Brands: React.FC = () => {
  return (
    <div className="bg-[#EBD96B] py-8 px-12 mx-12 -mt-6 mb-12 relative z-20 flex justify-center items-center gap-12 overflow-hidden rounded-md">
      <img 
        src="./assets/images/brands.png" 
        alt="Brands: H&M, Obey, Shopify, Lacoste, Levi's, Amazon" 
        className="h-8 object-contain w-full max-w-5xl opacity-90 mix-blend-multiply"
      />
    </div>
  );
};

export default Brands;