import images from "./Images";
import {FaFileAlt, FaPhoneAlt, FaEnvelopeOpen, FaMapMarkerAlt} from "react-icons/fa";
import {AiOutlineReload} from "react-icons/ai";

const gradient = "url(#blue-gradient)";

const about = [
    {
        id: 7,
        text: "At XparTech, we specialize in designing and developing websites that are optimized for speed, user engagement, and seamless functionality. Our team is dedicated to providing visually stunning, responsive websites that cater to the needs of both companies and individuals. With a focus on delivering an exceptional user experience, we offer solutions that are not only aesthetically pleasing but also tailored to achieve our clients' business goals."
    }
];

const qualities = [
    {
        id: 8,
        icon: <FaFileAlt style={{ fill: gradient }} />,
        title: "Performance Speed",
        text: "Our websites are built with performance in mind, ensuring fast load times to keep visitors engaged and enhance SEO rankings. Speed is essential in today's digital landscape, and we make sure it’s a priority for every project."
    },
    {
        id: 9,
        icon: <AiOutlineReload style={{ fill: gradient }} />,
        title: "Prompt Strategies",
        text: "At XparTech, we value your time and goals. We deploy prompt and effective strategies that prioritize your needs, ensuring smooth project workflows and timely delivery without compromising on quality."
    }
];

const portfolio = [
    {
        id: 16,
        title: "E-Commerce Platform for Modern Retail",
        text: "A sleek, user-friendly e-commerce platform tailored for a retail business, featuring quick navigation, a dynamic product catalog, and secure payment integration.",
        image: images.portfolio_img_1,
    },
    {
        id: 17,
        title: "Portfolio Showcase for Creative Professionals",
        text: "An elegant, visually appealing portfolio site built to showcase the work of creative professionals, optimized for both desktop and mobile devices.",
        image: images.portfolio_img_2,
    },
    {
        id: 18,
        title: "Corporate Website for Financial Services",
        text: "A professional and reliable corporate website tailored for a financial services company, emphasizing trust, transparency, and secure client interactions.",
        image: images.portfolio_img_3,
    }
];

const contact = [
    {
        id: 25,
        icon: <FaPhoneAlt style={{ fill: gradient }} />,
        info: "+234 425 235 712",
        text: "Get in touch with us to discuss your project needs or ask any questions you may have. Our team is here to help."
    },
    {
        id: 26,
        icon: <FaEnvelopeOpen style={{ fill: gradient }} />,
        info: "xpartech@info.com",
        text: "Feel free to reach out to us via email for project inquiries, support, or general information."
    },
    {
        id: 27,
        icon: <FaMapMarkerAlt style={{ fill: gradient }} />,
        info: "Nigeria, New Street",
        text: "Visit us at our office in New Street, Nigeria. We look forward to welcoming you to discuss your vision in person."
    }
];

const sections = { about, qualities, portfolio, contact };

export default sections;
