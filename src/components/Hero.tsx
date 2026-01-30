import React from 'react';

const Hero: React.FC = () => {
  return (
    <section className="bg-[#F4F6F5] rounded-3xl mx-12 my-4 px-12 pt-12 pb-0 flex items-center justify-between relative overflow-hidden">
        {/* Left Content */}
        <div className="flex-1 z-10 max-w-lg mb-12">
            <div className="relative">
                <span className="absolute -left-6 -top-2 bg-white px-4 py-1 rotate-[-2deg] font-black text-4xl lg:text-6xl z-0 whitespace-nowrap origin-bottom-left shadow-sm">
                    LET'S
                </span>
                <h1 className="font-black text-4xl lg:text-6xl leading-tight mb-6 mt-8">
                    EXPLORE <br />
                    <span className="bg-[#EBD96B] px-2 skew-x-[-3deg] inline-block">UNIQUE</span> <br />
                    CLOTHES.
                </h1>
            </div>
            
            <p className="text-gray-600 mb-8 text-lg">
                Live for Influential and Innovative fashion!
            </p>

            <div className="flex items-center gap-4">
                <button className="bg-black text-white px-8 py-3 rounded-md font-medium hover:bg-gray-800 transition-colors">
                    Shop Now
                </button>
            </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="flex-1 relative flex justify-end">
            <img 
                src="./assets/images/hero-image.png" 
                alt="Fashion Models" 
                className="max-h-[600px] object-contain relative z-10"
            />
            {/* Decorative background elements if any */}
        </div>
    </section>
  );
};

export default Hero;