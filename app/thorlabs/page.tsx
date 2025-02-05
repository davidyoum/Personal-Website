export default function Thorlabs() {
    return (
      <div className="min-h-screen">
        {/* Back button */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-16 mt-8">
          <a href="/" className="text-lg font-medium hover:text-gray-600 transition-colors inline-flex items-center gap-2">
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path 
                d="M19 12H5M5 12L12 19M5 12L12 5" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
            </svg>
            Back
          </a>
        </div>

        {/* Full-width banner at top */}
        <div className="w-full mt-16 px-4 sm:px-16 flex justify-center">
          <div className="w-full sm:w-[1200px]">
            <div className="w-full h-[60vh] relative rounded-lg overflow-hidden">
              <img 
                src="/images/thorlabs-website.png" 
                alt="Thorlabs Banner" 
                className="absolute inset-0 w-full h-full object-cover object-center" 
              />
            </div>
          </div>
        </div>

        {/* Layout container - converted to stack on mobile */}
        <div className="max-w-[1400px] mx-auto px-4 sm:px-16 mt-32 flex flex-col lg:flex-row gap-16">
          {/* Left column - Description and title */}
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="lg:sticky lg:top-0 lg:backdrop-blur-sm py-8 lg:-mx-8 lg:px-8">
              <h1 className="text-4xl sm:text-6xl font-bold mb-4">Thorlabs</h1>
              <h2 className="text-xl sm:text-2xl mb-8">Software Engineer</h2>
              <p className="text-base sm:text-lg text-gray-600">
                Detailed description of the project and role goes here...
              </p>
            </div>
          </div>

          {/* Right column - Cards and content */}
          <div className="w-full lg:w-2/3 space-y-16">
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
              {/* Feature card content */}
            </div>
            {/* Additional content sections */}
          </div>
        </div>
      </div>
    );
}