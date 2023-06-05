//  icons
import {
  FiInstagram,
  FiGithub,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
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
import TestiImage1 from "./assets/img/testimonials/ela1.jpeg";
import TestiImage2 from "./assets/img/testimonials/eimi2.jpeg";
import TestiImage3 from "./assets/img/testimonials/eimi3.jpeg";

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
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiSettings />,
    name: "Web Development",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiPenTool />,
    name: "Branding",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
  {
    icon: <FiTag />,
    name: "SEO",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.",
  },
];

// testimonials
export const testimonials = [
  {
    authorImg: TestiImage1,
    authorText: "Ella Freya pernah beli disini dan saya nyicip dikit",
    authorName: "Ella Freya",
    authorPosition: "Istri Saya",
  },
  {
    authorImg: TestiImage2,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
  {
    authorImg: TestiImage3,
    authorText:
      "Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.",
    authorName: "Olivia Doe",
    authorPosition: "Head of Design, Google",
  },
];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: "Have a question?",
    subtitle: "I am here to help you.",
    description: "Email me at hello@youremail.com",
  },
  {
    icon: <FiMapPin />,
    title: "Current Location",
    subtitle: "Bucharest, Romania",
    description: "Serving clients worldwide",
  },
];
