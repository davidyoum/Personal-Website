'use client'

import React from "react";
import NavigationBar from "./components/navigationbar";
import Image from "next/image";
import WorkCard from "./components/work-card";
import Footer from "./components/footer"

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-[#161616]">
      <NavigationBar />

      <div className="h-screen">
        <div className="w-3/4 mx-auto pt-[10vh]">
          <div className="block text-2xl sm:hidden">
            David Youm
          </div>
          <div className="block text-md text-gray-500 sm:hidden">
            Full-stack Developer
          </div>
        </div>

        <div className="w-3/4 font-inter text-2xl sm:text-center mx-auto pt-[11vh]">
          <div className="space-y-4">
            <div>
              A full-stack developer creating the best products for specific or everyday use. 

              I am a avid gamer, car detailer, and snowboarder.
            </div>
            <div>
              Based out of New Jersey, previous intern at 
              <Image 
                src="/images/thorlabs-logo.png" 
                alt="Thorlabs Logo" 
                width={105}
                height={105}
                className="inline-block align-middle mb-1 mx-1"
                style={{ width: 'auto', height: 'auto' }}
              />.
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12 sm:mt-52 md:mt-60">
          <Image 
            src="https://cdn.prod.website-files.com/63dcb6e1a80e9454b630f4c4/63e206eedd964a5c5db19c91_23-icon-arrow-down.svg"
            alt="Scroll down"
            width={50}
            height={50}
            className="bounce-pulse cursor-pointer"
            priority
          />
        </div>

        <div>
          <div className="w-full mx-auto mt-32 items-center">
            <div className="w-5/6 mx-auto text-5xl mb-4">Experience</div>
            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#93d2fe]">
              <a className="flex w-11/12 md:w-5/6 mx-auto mt-10 mb-10 group items-center justify-between">
                <WorkCard 
                  title="Website Overhaul - Coming Soon"
                  subtitle={{
                    company: "Penn State ACM",
                    time: "2025",
                    description: "E"
                  }}
                  image="https://via.placeholder.com/300"
                  link="https://example.com"
                />
                <Image 
                  src="/images/acm/acm-web.png"
                  width={500}
                  height={500}
                  alt="ACM Website Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    lg:w-[450px]
                    xl:w-[500px]
                    sm:hover:scale-95 transition-transform"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </a>
            </div>

            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#E51B24]">
              <a className="flex w-11/12 md:w-5/6 mx-auto mt-10 mb-10 group items-center justify-between"
                href="/thorlabs">
                <WorkCard 
                  title="Mobile Lab Website and Internal Tool"
                  subtitle={{
                    company: "Thorlabs",
                    time: "2024",
                    description: "E"
                  }}
                  image="https://via.placeholder.com/300"
                  link="https://example.com"
                />
                <Image 
                  src="/images/thorlabs-website.png"
                  width={500}
                  height={500}
                  alt="Thorlabs Website Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    lg:w-[450px]
                    xl:w-[500px]
                    sm:hover:scale-95 transition-transform"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </a>
            </div>
          </div>

          <div className="w-full mx-auto mt-32 items-center">
            <div className="w-5/6 mx-auto text-5xl mb-4">Projects</div>
            <div className="flex w-full h-44 border-t-[1px] border-b-[1px] hover:bg-[#57ec31]">
              <a className="flex w-11/12 md:w-5/6 mx-auto mt-10 mb-10 group items-center justify-between">
                <WorkCard 
                  title="The Pickup Sports Finder - Coming Soon"
                  subtitle={{
                    company: "Tally Sports",
                    time: "2024",
                    description: "E"
                  }}
                  image="https://via.placeholder.com/300"
                  link="https://example.com"
                />
                <Image 
                  src="/images/tally.gif"
                  width={500}
                  height={500}
                  alt="Tally Sports Preview"
                  className="rounded-md opacity-0 group-hover:opacity-100 duration-300 hidden 2xl:block
                    lg:w-[450px]
                    xl:w-[500px]
                    sm:hover:scale-95 transition-transform"
                  style={{ width: 'auto', height: 'auto' }}
                />
              </a>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
