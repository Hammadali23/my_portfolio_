import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
  subsets: ['latin'], // Optional: Specify subsets
  weight: ['400', '700'], // Optional: Specify font weights
  display: 'swap', // Optional: Font display strategy
});

export default function About() {
  return (
    <div className="bg-gradient-to-r from-gray-950  to-gray-800 min-h-screen flex flex-col items-center pt-4 py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mb-4 mt-24 underline text-blue-300 animate-scale-up-down">
          About Me
        </h1>
        <div className={`${ptSerif.className} bg-gradient-to-r from-gray-800  to-cyan-800 mt-8 shadow-2xl border-l-8 border-cyan-600 px-4 py-8 animate-slide-in rounded-xl`}>
          <h2 className="text-3xl font-semibold  mb-2 text-blue-400">Introduction</h2>
          <p className="text-xl leading-relaxed mb-4 text-white">
            I am a frontend developer passionate about creating beautiful, user-friendly, and responsive websites. My journey in web development started with a curiosity about how websites work, which soon evolved into a full-fledged career.
          </p>
          
          <h2 className="text-3xl font-semibold mb-2 text-blue-400">Skills</h2>
          <p className="text-xl leading-relaxed mb-4 text-white">
            Over the years, I ve honed my skills in HTML, CSS, JavaScript, and modern libraries like React. I love working with tools like Tailwind CSS for efficient styling and creating visually appealing and interactive user interfaces.
          </p>
          
          <h2 className="text-3xl font-semibold  mb-2 text-blue-400">Why Frontend Development?</h2>
          <p className="text-xl leading-relaxed mb-4 text-white">
            Frontend development combines creativity and logic, which makes every project exciting and unique. I enjoy bringing ideas to life on the screen and seeing users interact with my work in real-time.
          </p>
          
          <h2 className="text-3xl font-semibold  mb-2 text-blue-400">Future Goals</h2>
          <p className="text-xl leading-relaxed text-white ">
            I aim to keep improving my skills and stay updated with new trends and technologies. My goal is to continue building impactful, accessible, and engaging user experiences.
          </p>
        </div>
      </div>
    </div>
  );
}
