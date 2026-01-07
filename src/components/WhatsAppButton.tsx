import { FaWhatsapp } from "react-icons/fa";

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5595991330935"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300 animate-bounce-slow"
            aria-label="Fale conosco no WhatsApp"
        >
            <FaWhatsapp className="w-8 h-8" />
        </a>
    );
};

export default WhatsAppButton;
