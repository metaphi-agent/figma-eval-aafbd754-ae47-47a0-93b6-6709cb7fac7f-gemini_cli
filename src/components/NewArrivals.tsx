import React from 'react';

const products = [
  {
    id: 1,
    title: "Hoodies & Sweetshirt",
    image: "./assets/images/product-1.png",
    link: "#"
  },
  {
    id: 2,
    title: "Coats & Parkas",
    image: "./assets/images/product-2.png",
    link: "#"
  },
  {
    id: 3,
    title: "Tees & T-Shirt",
    image: "./assets/images/product-3.png",
    link: "#"
  }
];

const NewArrivals: React.FC = () => {
  return (
    <section className="px-12 py-12 max-w-7xl mx-auto mb-12">
      <div className="relative mb-12">
        <h2 className="font-black text-3xl tracking-wider">NEW ARRIVALS</h2>
        {/* Leaf decoration placeholder - can be an SVG */}
        <div className="absolute -right-6 -bottom-2 w-24 h-4 bg-[url('./assets/leaf.svg')] bg-no-repeat bg-contain"></div> 
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="group cursor-pointer">
            <div className="rounded-2xl overflow-hidden mb-4 bg-gray-100">
              <img 
                src={product.image} 
                alt={product.title} 
                className="w-full h-[400px] object-cover object-top hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-bold text-xl mb-1">{product.title}</h3>
                <span className="text-gray-500 text-sm">Explore Now!</span>
              </div>
              <div className="text-gray-400 group-hover:translate-x-1 transition-transform">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NewArrivals;