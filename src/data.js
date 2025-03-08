//  icons
import {
  FiInstagram,
  FiGithub,
  FiCode,
  FiMail,
  FiMapPin,
  FiSettings,
} from "react-icons/fi";

import {AiFillLinkedin} from "react-icons/ai"

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
import notfound from "./assets/img/testimonials/404.jpg";
import Tixia from "./assets/img/projects/tixia.png";
import Seven from "./assets/img/projects/7seven.png";
import Semina from "./assets/img/projects/semina.png";
import Staycation from "./assets/img/projects/staycation.png";
import Baznas from "./assets/img/projects/baznas.png";
import AdminStaycation from "./assets/img/projects/admin-staycation.png";


// skills images
import SkillImg1 from "./assets/img/skills/html5.png";
import SkillImg2 from "./assets/img/skills/css3.png";
import SkillImg3 from "./assets/img/skills/js.png";
import SkillImg4 from "./assets/img/skills/reactjs.png";
import SkillImg6 from "./assets/img/skills/nodejs.png";
import SkillImg7 from "./assets/img/skills/git.png";
import SkillImg8 from "./assets/img/skills/figma.png";

// testimonial images
import TestiImage1 from "./assets/img/testimonials/404.jpg";

// navigation
export const navigation = [
  {
    name: "home",
    href: "home",
  },
  {
    name: "about",
    href: "about",
  },
  {
    name: "portfolio",
    href: "portfolio",
  },
  {
    name: "services",
    href: "services",
  },
  {
    name: "testimonials",
    href: "testimonials",
  },
  {
    name: "contact",
    href: "contact",
  },
];

// social
export const social = [
  {
    icon: <FiInstagram />,
    href: "https://www.instagram.com/farhan_yp52/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/farhanyp",
  },
  {
    icon: <AiFillLinkedin />,
    href: "https://www.linkedin.com/in/farhan-yudha-pratama-3b095a17a/",
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: "",
  },
  {
    img: UpworkBrandIcon,
    href: "",
  },
  {
    img: FiverBrandIcon,
    href: "",
  },
  {
    img: BehanceBrandIcon,
    href: "",
  },
  {
    img: DribbbleBrandIcon,
    href: "",
  },
];

// projects
export const projectsData = [
  {
    id: "1",
    image: notfound,
    name: "Prestige",
    category: "Web Development",
    href:"",
    desc: "(Still Development). this application is a vehicle rental application such as luxury cars, yachts, helicopters, motorbike planes and even like uber"
  },
  {
    id: "2",
    image: Tixia,
    name: "Tixia",
    category: "Web Development",
    href:"",
    desc: "(Still Development). This app is a hotel booking and airplane ticket purchase service provider."
  },
  {
    id: "3",
    image: notfound,
    name: "Report Pegadaian",
    category: "Web Development",
    href:"",
    desc: "(Still Development). This application is an internal pawnshop application for reporting"
  },
  {
    id: "4",
    image: Seven,
    name: "7Seven",
    category: "Web Development",
    href:"https://7seven.vercel.app",
    desc: "This project serves to do the bending for the billiard table."
  },
  {
    id: "5",
    image: Semina,
    name: "Semina",
    category: "Web Development",
    href:"https://landing-page-semina.vercel.app",
    desc: "I made this web application to practice my skills Mongo DB, Express JS, React JS, Node JS and API"
  },
  {
    id: "6",
    image: Staycation,
    name: "Staycation",
    category: "UI/UX design",
    href:"",
    desc: "Website Staycation merupakan website untuk membantu para travelers dalam mencari tempat penginapan dan tempat liburan"
  },
  {
    id: "7",
    image: Staycation,
    name: "Staycation",
    category: "web development",
    href:"https://mern-staycation.pages.dev",
    desc: "Website Staycation merupakan website untuk membantu para travelers dalam mencari tempat penginapan dan tempat liburan"
  },
  {
    id: "8",
    image: AdminStaycation,
    name: "Admin Staycation",
    category: "web development",
    href:"https://mern-staycation-server.vercel.app/admin/signin",
    desc: "Website Admin Staycation merupakan website untuk membantu para penyedia tempat liburan dan penginapan dalam menjual"
  },
  {
    id: "9",
    image: Baznas,
    name: "Baznas",
    category: "web development",
    href:"https://baznas-pwt.pages.dev",
    desc: "Website Baznas banyumas merupakan website untuk penyedia jasa zakat infaq sadaqah dalam lingkup banyumas"
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "UI/UX Design",
  },
  {
    name: "web development",
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiCode />,
    name: "Backend Development",
    description:
      "I specialize in building robust, scalable, and secure backend systems using technologies like Golang, Node.js, Laravel, and Express.js. From designing efficient APIs to optimizing database performance, I ensure your application's core functionality is reliable and high-performing."
  },
  {
    icon: <FiSettings />,
    name: "API Development & Integration",
    description:
      "I design and integrate RESTful APIs to connect your application with third-party services or internal systems. From payment gateways like Stripe to custom data retrieval APIs, I ensure smooth communication and functionality across your platform."
  }
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText: "404 Not Found",
    authorName: "404 Not Found",
    authorPosition: "404 Not Found",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at farhan.yudha2016we@gmail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Medan, Indonesia",
    description: "Serving clients worldwide",
  },
];
