import {} from "react";

function Resume() {
  return (
    <div className="min-h-screen bg-gray-100 px-6 lg:px-20 py-10 font-sans">
      {/* Main Heading */}
      <h1 className="text-2xl font-semibold text-center text-black mb-2">Resume</h1>

      {/* Subheading */}
      <p className="text-4xl lg:text-4xl font-bold text-black text-center mb-10">
        A summary of My Resume
      </p>

      {/* Horizontal Divider */}
      <div className="flex items-center mb-10">
        <div className="flex-1 h-px bg-gray-300"></div>
        <span className="mx-4 text-xl font-semibold text-gray-700">
          Education & My Experience
        </span>
        <div className="flex-1 h-px bg-gray-300"></div>
      </div>

      {/* Content Sections */}
      <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
        {/* Education Section */}
        <div className="flex-1 ">
          <h2 className="text-3xl font-semibold text-black mb-6">Education</h2>
          <div className="space-y-6">
            {/* Education Item 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">
                Bachelor of Computer Science
              </h3>
              <p className="text-gray-600">XYZ University, 2020</p>
              <p className="text-gray-600">
                Specialized in software engineering, algorithms, and AI.
              </p>
            </div>
            {/* Education Item 2 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">High School Diploma</h3>
              <p className="text-gray-600">ABC High School, 2016</p>
              <p className="text-gray-600">
                Strong focus on computer science, physics, and mathematics.
              </p>
            </div>
            {/* Education Item 3 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Certifications</h3>
              <ul className="list-disc list-inside text-gray-600">
                <li>Certified Frontend Developer - 2021</li>
                <li>Google Data Analytics Certificate - 2022</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Vertical Line Separator */}
        <div className="bg-yellow-500 h-[59vh] w-[2px]"></div>
       

        {/* Experience Section */}
        <div className="flex-1">
          <h2 className="text-3xl font-semibold text-black mb-6 ml-14">My Experience</h2>
          <div className="space-y-6 ml-14">
            {/* Experience Item 1 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Software Engineer</h3>
              <p className="text-gray-600">Tech Solutions Inc., 2021 - Present</p>
              <p className="text-gray-600">
                Building scalable web applications using React, TypeScript, and Node.js.
              </p>
            </div>
            {/* Experience Item 2 */}
            <div className="border-b-2 border-gray-300">
              <h3 className="text-xl font-bold text-gray-800">
                Frontend Developer Intern
              </h3>
              <p className="text-gray-600">Web Studios, 2020 - 2021</p>
              <p className="text-gray-600">
                Contributed to responsive web designs using HTML, CSS, and JavaScript.
              </p>
            </div>
            {/* Experience Item 3 */}
            <div>
              <h3 className="text-xl font-bold text-gray-800">Freelance Developer</h3>
              <p className="text-gray-600">Freelance, 2019 - Present</p>
              <p className="text-gray-600">
                Delivered tailored web solutions for clients in diverse industries.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
