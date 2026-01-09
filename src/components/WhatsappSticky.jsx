import { FaPhone } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const CallSticky = () => {
  const phoneNumber = "+91 8076979141"; // Replace with your phone number
  const whatsappNumber = "+91 9911498262"; // Replace with your WhatsApp number
  const message = "Hello I want your service For my Project can we Talk more about. About it "; // Replace with your pre-written message

  return (
    <div className="fixed z-50 bottom-6 right-6 md:bottom-12 md:right-8 flex flex-col gap-4">
      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${whatsappNumber.replace(/\s+/g, '')}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110 animate-bounce"
        title="Chat on WhatsApp"
      >
        <FaWhatsapp className="text-2xl" />
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg p-4 flex items-center justify-center transition-transform hover:scale-110"
        title="Call us"
      >
        <FaPhone className="text-2xl" />
      </a>
    </div>
  );
};

export default CallSticky;
