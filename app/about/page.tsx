import NavigationBar from "../components/navigationbar";
import Footer from "../components/footer";
import Image from "next/image";


export default function About() {
    return (
      <div>
        <NavigationBar />
        <div className="flex flex-col w-[80%] mx-auto items-center mt-12">
          <Image 
            className="rounded-md" 
            src="/images/about/me.jpg" 
            alt="About" 
            width={300} 
            height={300} 
            style={{ 
              width: 'auto',
              height: 'auto'
            }}
          />

          <div className="mt-8 text-xl font-instrument text-center">
            How I started.
          </div>

          <div className="mt-3 font-instrument text-center">
            My coding journey started when I was in elementary school working on my first Roblox game. Sadly, at the time I didnt know documentation and other resources were available so stopped afterwards.
            In Sparta High School, I took computer science classes and my intrest grew with the help of a amazing teacher.
          </div>

          <div className="mt-8 font-instrument text-center">
            From there, I went on to learn Python and Java in class while self teaching myself C++. 
            Then, the rest was history with college studying at Penn State University.
          </div>

          <Image 
            className="rounded-md mt-8" 
            src="/images/about/snowboard.gif" 
            alt="About" 
            width={400} 
            height={300} 
            style={{ 
              width: 'auto',
              height: 'auto'
            }}
          />

          <div className="mt-8 text-xl font-instrument text-center">
            My hobbies.
          </div>

          <div className="mt-3 font-instrument text-center">
            Some of my hobbies include snowboarding, playing soccer/basketball, car detailing, and playing video games.
          
            <div className="text-gray-800 font-instrument text-center">(and eating food)</div>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-4 items-center">
            <Image 
              className="rounded-md mt-8" 
              src="/images/thorlabs/thorlabs-dog.png" 
              alt="Thorlabs Dog" 
              width={200} 
              height={300} 
              style={{ 
                width: 'auto',
                height: 'auto'
              }}
            />
            <Image 
              className="rounded-md mt-8" 
              src="/images/acm/acm.png" 
              alt="ACM Logo" 
              width={200} 
              height={100}
              style={{ 
                objectFit: 'contain', 
                maxWidth: '100%',
                width: 'auto',
                height: 'auto'
              }}
            />
          </div>

          <div className="mt-8 text-xl font-instrument text-center">
            My experiences.
          </div>

          <div className="mt-3 font-instrument text-center">
            I have had the opportunity to work at Thorlabs as a Web Development Intern and Penn State ACM as a Web Development Lead.
          </div>

          <div className="mt-8 text-xl font-instrument text-center">
            Thank you for reading!
          </div>
          
          <Image 
            className="rounded-md mt-8" 
            src="/images/about/signiture.png" 
            alt="About" 
            width={300} 
            height={300} 
            style={{ 
              width: 'auto',
              height: 'auto'
            }}
          />
        </div>
        <Footer />

      </div>

    );
  }