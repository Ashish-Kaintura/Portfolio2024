import NavBar from "../components/NavBar";

export default function Resume() {
  return (
    <>
      <NavBar />
      <div className="max-w-4xl mx-auto p-5">
        <h1 className="text-3xl font-bold text-center mb-5">Ashish Kaintura</h1>
        <p className="text-center text-gray-700">
          <a
            href="mailto:Ashishkaintura305@gmail.com"
            className="text-blue-500 hover:underline"
          >
            Ashishkaintura305@gmail.com
          </a>
          | (+91) 8076979141 | Delhi
        </p>
        <div className="flex justify-center space-x-5 mt-3">
          <a
            href="https://www.linkedin.com/in/ashish-kaintura30?"
            className="text-blue-600 font-semibold hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/Ashish-Kaintura  "
            className="text-blue-600 font-semibold hover:underline"
          >
            GitHub
          </a>
        </div>

        {/* Download Button */}
        <div className="flex justify-center my-5">
          <a
            href="/resume/Ashish%20Kaintura%20Resume%202025.docx"
            download
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition"
          >
            Download Resume
          </a>
        </div>

        {/* Skills */}
        <div>
          <h2 className="text-2xl font-semibold border-b pb-2 mb-3">Skills</h2>
          <ul className="list-disc pl-5 text-gray-700">
            <li>HTML, CSS, JavaScript</li>
            <li>ReactJS, NodeJS, ExpressJS, Next.js, Tailwind CSS</li>
            <li>MongoDB, Firebase, MySQL</li>
            <li>GitHub, Figma</li>
          </ul>
        </div>

        {/* Work Experience */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-3">
            Work Experience
          </h2>
          <div>
            <h3 className="text-xl font-semibold">
              Front-end Developer - Risezonic
            </h3>
            <p className="text-gray-600">April 2023 - Present</p>
            <ul className="list-disc pl-5 text-gray-700">
              <li>
                Developed and designed responsive and user-friendly websites.
              </li>
              <li>
                Optimized website performance and conducted quality assurance
                testing.
              </li>
              <li>Ensured smooth deployment of projects.</li>
            </ul>
          </div>
        </div>

        {/* Education */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-3">
            Education
          </h2>
          <div>
            <h3 className="text-xl font-semibold">
              GNIIT in Cloud and Mobile Software Engineering - NIIT
            </h3>
            <p className="text-gray-600">Dec 2019 - 2024</p>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">B.Com - IGNOU</h3>
            <p className="text-gray-600">Dec 2018 - 2021</p>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">12th - CBSE</h3>
            <p className="text-gray-600">2018</p>
          </div>
          <div className="mt-3">
            <h3 className="text-xl font-semibold">10th - CBSE</h3>
            <p className="text-gray-600">2016</p>
          </div>
        </div>

        {/* Awards and Certificates */}
        <div className="mt-6">
          <h2 className="text-2xl font-semibold border-b pb-2 mb-3">
            Awards & Certificates
          </h2>
          <div>
            <h3 className="text-xl font-semibold">
              Google UX/UI Certificate - India, New Delhi
            </h3>
            <a
              href="https://coursera.org/share/a66951367ba6d48d88c57eb91e638413"
              className="text-blue-600 hover:underline"
            >
              View Certificate
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
