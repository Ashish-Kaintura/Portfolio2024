import { FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-5">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Get in Touch
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              rows="4"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>
        <div className="text-center mt-5">
          <p className="text-gray-700">Or reach me on:</p>
          <div className="flex justify-center gap-4 mt-2">
            <a href="#" className="text-gray-700 text-2xl hover:text-gray-900">
              {/* Add your social media icons here */}
              <FaLinkedinIn />
            </a>
            <a href="#" className="text-gray-700 text-2xl hover:text-gray-900">
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
