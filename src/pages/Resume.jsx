import React from "react";
import ProfileImage from "../assets/images/karthi.png";
import ResumeFile from "../assets/images/karthikeyan experience.pdf"; // Import the resume file

const Resume = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20">
      <div className="container mx-auto px-4 sm:px-8 py-10 max-w-4xl">
        {/* Header Section */}
        <header className="flex flex-col items-center sm:flex-row sm:items-start sm:justify-between border-b border-gray-600 pb-6 mb-6">
          {/* Profile Picture */}
          <div className="w-32 h-32 sm:w-64 sm:h-64 md:w-64 md:h-64 rounded-full overflow-hidden shadow-lg">
            <img
              src={ProfileImage}
              alt="Karthikeyan S"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Personal Info */}
          <div className="mt-4 sm:mt-0 sm:ml-8 text-center sm:text-left flex-1">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text">
              Karthikeyan S
            </h1>
            <p className="mt-2 text-gray-400">
              I consider myself a sincere and orderly person, trained in Full
              Stack and Data Science. I am seeking work experience to enhance my
              skills and communication.
            </p>
            <div className="mt-4 space-y-1 text-sm text-gray-400">
              <p>
                Email:{" "}
                <a
                  href="mailto:karthikeyansivanesan23@gmail.com"
                  className="text-blue-400 hover:underline"
                >
                  karthikeyansivanesan23@gmail.com
                </a>
              </p>
              <p>
                Phone:{" "}
                <a
                  href="tel:9600455344"
                  className="text-blue-400 hover:underline"
                >
                  +91 9600455344
                </a>
              </p>
              <p>
                LinkedIn:{" "}
                <a
                  href="https://www.linkedin.com/in/karthikeyan-s-b15786290/"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn Profile
                </a>
              </p>
              <p>
                GitHub:{" "}
                <a
                  href="https://github.com/KarthikeyanSivanesan23"
                  className="text-blue-400 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                   Github Profile
                </a>
              </p>
            </div>
          </div>
        </header>

        {/* Work Experience Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text border-b border-gray-600 pb-2 mb-4">
            Work Experience
          </h2>
          <div>
            <h3 className="font-semibold">Junior Software Developer</h3>
            <p>BMindz Private Limited</p>
            <p className="text-sm text-gray-400">07/2023 - 10/2024</p>
          </div>
        </section>

        {/* Education Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text border-b border-gray-600 pb-2 mb-4">
            Education
          </h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold">Bachelor of Computer Science</h3>
              <p>National College Trichy, Tamil Nadu</p>
              <p className="text-sm text-gray-400">2020 - 2023, CGPA: 7.80</p>
            </div>
            <div>
              <h3 className="font-semibold">Diploma in Robotics</h3>
              <p>
                Valivalam Desikar Polytechnic College, Nagapattinam, Tamil Nadu
              </p>
              <p className="text-sm text-gray-400">2017 - 2019, CGPA: 7.00</p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text border-b border-gray-600 pb-2 mb-4">
            Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-gray-400">
            <span>HTML & CSS</span>
            <span>JavaScript</span>
            <span>React.js</span>
            <span>Python</span>
            <span>Java</span>
            <span>Angular</span>
            <span>Machine Learning</span>
          </div>
        </section>

        {/* Personal Projects Section */}
        <section className="mb-8">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text border-b border-gray-600 pb-2 mb-4">
            Personal Projects
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-400">
            <li>Live News Update - React.js using News API</li>
            <li>Bank Management System for Loans in Java</li>
            <li>Standalone Application - Tally Clone using Python</li>
          </ul>
        </section>

        {/* Languages Section */}
        <section>
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-500 to-blue-300 text-transparent bg-clip-text border-b border-gray-600 pb-2 mb-4">
            Languages
          </h2>
          <ul className="space-y-2 text-gray-400">
            <li>Tamil - Native or Bilingual Proficiency</li>
            <li>English - Full Professional Proficiency</li>
          </ul>
        </section>

        {/* Download CV Button */}
        <div className="mt-8 text-center">
          <a
            href={ResumeFile} // Link to the resume PDF
            download="Karthikeyan_S_Resume.pdf" // This will trigger the download with the specified name
            className="inline-block px-6 py-3 bg-blue-500 text-white rounded-lg text-lg hover:bg-blue-400"
          >
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
