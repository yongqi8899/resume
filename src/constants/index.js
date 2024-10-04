import {
  backend,
  creator,
  web,
  mobile,
  javascript,
  typescript,
  vue,
  nuxt,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  immobilien,
  good_feeling,
  yz,
  threejs,
  dog_food,
  it,
  music,
  map_3d,
  printmystride,
  portfolio,
} from "../assets";

const navLinks = [
  {
    id: "skills",
    title: "skills",
    path: "/skills",
  },
  {
    id: "projects",
    title: "projects",
    path: "/projects",
  },
  {
    id: "contact",
    title: "contact",
    path: "/contact",
  },
];
const bio = {
  github: "https://github.com/yongqi8899",
  resume:
    "https://drive.google.com/file/d/164t4dXwmEOrEOInZ2UH_yI_gPy7otgui/view",
  linkedin: "https://www.linkedin.com/in/yongqi-zhang/",
};

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Vue JS",
    icon: vue,
  },
  {
    name: "Nuxt JS",
    icon: nuxt,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];
export { navLinks, bio, technologies };
