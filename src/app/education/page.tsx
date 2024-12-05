export default function Education() {
  return (
    <div className="bg-gradient-to-r from-gray-950  to-gray-800 min-h-screen flex flex-col items-center pt-4 py-12 px-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl font-bold text-center mt-24 mb-4 underline text-cyan-400  animate-scale-up-down">
          Education
        </h1>
        <div className="container mx-auto p-8 animate-slide-in ">
          <h2 className="text-3xl font-semibold mb-4 text-yellow-400 font-serif ">Matric Education</h2>
          <div className="p-4  rounded shadow-md bg-gray-800 border-l-8 border-cyan-400 pl-4 bg-gradient-to-r from-gray-800  to-cyan-800">
            <h3 className="text-2xl font-bold text-blue-400 underline ">Subject: Science</h3>
            <h4 className="text-xl font-bold mt-2 text-blue-400 underline">School Name:</h4>
            <p className="text-xl mt-2 text-white font-serif">Hazrat Shah Jahnagir Academy. (Year: 2020)</p>
          </div>
          <div className="container mx-auto mt-8">
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400 font-serif">Intermediate Education</h2>
            <div className="p-4  rounded shadow-md bg-gray-800 border-l-8 border-cyan-400 pl-4 bg-gradient-to-r from-gray-800  to-cyan-800">
              <h3 className="text-2xl font-bold text-blue-400 underline">Subject: Pre-Engineering</h3>
              <h3 className="text-xl font-bold mt-2 text-blue-400 underline">College Name:</h3>
              <p className="text-xl text-white mt-2 font-serif">Allama Iqbal Government Science College. (Year: 2022)</p>
            </div>

            {/* Courses */}
            <h1 className="text-4xl font-bold text-center mt-16 pb-8 underline text-cyan-400 animate-scale-up-down">
              Courses
            </h1>
            <div className="container mx-auto mt-8 ">
              <h2 className="text-3xl font-semibold mb-4 text-yellow-400 font-serif">Web Development (In Progress)</h2>
              <div className="p-4  rounded shadow-md bg-gray-800 border-l-8 border-cyan-400 pl-4 bg-gradient-to-r from-gray-800  to-cyan-800">
                <h3 className="text-2xl font-bold  text-blue-400 underline">Course Name:</h3>
                <p className="text-xl text-white mt-2 font-serif">Certified AI, Metaverse, and Web 3.0 Developer & Solopreneur</p>
                <h3 className="text-2xl mt-4 font-bold text-blue-400 underline">Center Name:</h3>
                <p className="text-xl text-white font-serif mt-2">Governor House Karachi</p>
                <h3 className="text-xl font-bold mt-4 text-blue-400 underline">Time Period:</h3>
                <p className="text-lg text-white font-serif mt-2">A one year Web 3.0 and Metaverse Developer program</p>
              </div>
              <div className="container mx-auto mt-8">
                <h2 className="text-3xl font-semibold mb-4 text-yellow-400 font-serif">Computer Information Technology</h2>
                <div className="p-4 rounded shadow-md bg-gray-800 border-l-8 border-cyan-400 pl-4 bg-gradient-to-r from-gray-800  to-cyan-800">
                  <h3 className="text-2xl font-bold text-blue-400 underline">Center Name:</h3>
                  <p className="text-xl mt-2 font-serif text-white">The Professor Academy</p>
                  <h3 className="text-2xl mt-4 font-bold text-blue-400 underline">Course Including:</h3>
                  <p className="text-xl mt-2 font-serif text-white">
                    (1) Ms-Office <br /> (2) Photoshop CS6
                  </p>
                  <h3 className="text-2xl font-bold mt-4 text-blue-400 underline">Course Period:</h3>
                  <p className="text-xl font-serif text-white mt-2">6 Months Course (Year: 2019)</p>
                </div>
                <div className="container mx-auto mt-8">
                  <h2 className="text-3xl  font-semibold mb-4 text-yellow-400 font-serif">Digital Marketing</h2>
                  <div className="p-4 bg-gray-800 rounded shadow-md border-l-8 border-cyan-400 pl-4 bg-gradient-to-r from-gray-800  to-cyan-800">
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 underline">Center Name:</h3>
                    <p className="text-xl font-serif text-white">Aptech Metro</p>
                    <h3 className="text-2xl font-bold text-blue-400 mb-2 mt-4 underline">Course Including:</h3>
                    <p className="text-xl font-serif text-white">
                      (1) SEO <br /> (2) Wordpress <br /> (3) Social Media Marketing <br />
                      (4) Email Marketing
                    </p>
                    <h3 className="text-2xl font-bold text-blue-400 underline mt-4 mb-2 ">Course Period:</h3>
                    <p className="text-xl font-serif text-white">6 Months Course (Year: 2024)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
