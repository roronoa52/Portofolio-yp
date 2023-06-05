//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

import {AiFillLinkedin} from "react-icons/ai"

// companies icons
import FreelancerBrandIcon from "./assets/img/brands/freelancer.png";
import UpworkBrandIcon from "./assets/img/brands/upwork.png";
import FiverBrandIcon from "./assets/img/brands/fiverr.png";
import BehanceBrandIcon from "./assets/img/brands/behance.png";
import DribbbleBrandIcon from "./assets/img/brands/dribbble.png";

// projects images
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
    image: Staycation,
    name: "Staycation",
    category: "UI/UX design",
    href:"",
    desc: "Website Staycation merupakan website untuk membantu para travelers dalam mencari tempat penginapan dan tempat liburan"
  },
  {
    id: "2",
    image: Staycation,
    name: "Staycation",
    category: "web development",
    href:"https://mern-staycation.pages.dev",
    desc: "Website Staycation merupakan website untuk membantu para travelers dalam mencari tempat penginapan dan tempat liburan"
  },
  {
    id: "5",
    image: AdminStaycation,
    name: "Admin Staycation",
    category: "web development",
    href:"https://mern-staycation-server.vercel.app/admin/signin",
    desc: "Website Admin Staycation merupakan website untuk membantu para penyedia tempat liburan dan penginapan dalam menjual"
  },
  {
    id: "6",
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
    icon: <FiLayout />,
    name: "Web Design",
    description:
      "Web design is the process of designing and creating the visual appearance and structure of a web page. It involves using design elements such as layout, color, graphics, and text to create an attractive and functional user interface. ",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Web development is the process of creating and maintaining websites using various technologies and programming languages. It involves the design, development, implementation, and management of all aspects related to the website. Web development includes both frontend (display and user interaction) and backend (business logic and data management) coding.",
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
