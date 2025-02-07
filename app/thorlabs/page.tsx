import Footer from "../components/footer";
import Image from "next/image";

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
                src="/images/thorlabs/thorlabs-website.png" 
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
              <h2 className="text-xl sm:text-2xl mb-8">Web Developer Intern</h2>
              <div className="text-base font-instrument sm:text-lg text-gray-600">
                <div>
                  <h3 className="text-gray-600">Description</h3>
                  <div className="text-white">
                    Built components for an updated website for the Mobile Lab Team and 
                    created an internal tool to change the website's content.
                  </div>

                  <h3 className="text-gray-600">Client</h3>
                  <div className="text-white">
                    Mobile Lab Team
                  </div>

                  <h3 className="text-gray-600">Time</h3>
                  <div className="text-white">
                    May 2024 - August 2024
                  </div>

                  <h3 className="text-gray-600">Technologies</h3>
                  <div className="text-white">
                    Vue.js, TypeScript, ColdFusion, SQL, JSON
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right column - Cards and content */}
          <div className="w-full lg:w-2/3 space-y-16">
            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/dropdown.png" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Utilizing Bootstrap, created an accordian dropdown for the FAQ sections. Passing data through using JSON.
              </p>
            </div>
            
            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/timeline.png" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Created a dynamic timeline using SVG lines and allowed the user to add events to the timeline adjusting the SVG lines accordingly.              </p>
            </div>

            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/figma.png" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
              Used Figma to start a new design for the internal tool (Dont have the actual picture). 
              Created a sleek design using Vue.js and Tailwind CSS. Allowed non-technical users to update the website.
              Saving the data to a SQL database and pulling it to the website using ColdFusion.
              Also creating documentation for the non-technical users on how to use the tool.
              </p>
            </div>


            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/events.gif" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Created a filter component to filter through the events and images. Came up with the accordion to hide the past events. Used Bootstrap buttons and CSS to style the buttons and other components.
              </p>
            </div>

            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/bubble_text.png" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Created a simple bubble text component to display the key points more engagingly.
              </p>
            </div>

            <div>
              <div className="aspect-video bg-[#2a2a2a] rounded-lg overflow-hidden">
                <Image src="/images/thorlabs/card.png" width={1000} height={1000} alt="Thorlabs Website" />
              </div>
              <p className="mt-4 text-gray-300 text-lg">
                Created a card component to display the information in a more engaging way.
                Following the guidelines of the design communicated by the design team.
              </p>
            </div>
            
          </div>
        </div>
        <Footer />
      </div>
    );
}