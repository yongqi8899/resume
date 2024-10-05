import {
  backend,
  creator,
  web,
  mobile,
  immobilien,
  good_feeling,
  yz,
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

// const technologies = [
//   {
//     name: "HTML 5",
//     icon: html,
//   },
//   {
//     name: "CSS 3",
//     icon: css,
//   },
//   {
//     name: "JavaScript",
//     icon: javascript,
//   },
//   {
//     name: "TypeScript",
//     icon: typescript,
//   },
//   {
//     name: "React JS",
//     icon: reactjs,
//   },
//   {
//     name: "Vue JS",
//     icon: vue,
//   },
//   {
//     name: "Nuxt JS",
//     icon: nuxt,
//   },
//   {
//     name: "Tailwind CSS",
//     icon: tailwind,
//   },

//   {
//     name: "Node JS",
//     icon: nodejs,
//   },
//   {
//     name: "MongoDB",
//     icon: mongodb,
//   },
//   {
//     name: "Three JS",
//     icon: threejs,
//   },
//   {
//     name: "git",
//     icon: git,
//   },
//   {
//     name: "figma",
//     icon: figma,
//   },
// ];

const technologies = {
  frontendTech: [
    {
      href: "https://www.javascript.com/",
      icon: "https://profilinator.rishav.dev/skills-assets/javascript-original.svg",
      name: "JavaScript",
    },
    {
      href: "https://www.typescriptlang.org/",
      icon: "https://profilinator.rishav.dev/skills-assets/typescript-original.svg",
      name: "TypeScript",
    },
    {
      href: "https://threejs.org/",
      icon: "https://upload.vectorlogo.zone/logos/threejs/images/83129207-9005-4463-8181-65a3cc3bf8fd.svg",
      name: "threejs",
    },
    {
      href: "https://reactjs.org/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg",
      name: "react",
    },
    {
      href: "https://nextjs.org/",
      icon: "https://profilinator.rishav.dev/skills-assets/nextjs.png",
      name: "NextJS",
    },
    {
      href: "https://nuxt.com/",
      icon: "https://www.vectorlogo.zone/logos/nuxtjs/nuxtjs-icon.svg",
      name: "Nuxt",
    },
    {
      href: "https://vuejs.org/",
      icon: "https://www.vectorlogo.zone/logos/vuejs/vuejs-icon.svg",
      name: "vue",
    },
    {
      href: "https://www.w3.org/html/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg",
      name: "html5",
    },
    {
      href: "https://www.w3schools.com/css/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg",
      name: "css3",
    },
    {
      href: "https://tailwindcss.com/",
      icon: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg",
      name: "tailwind",
    },
  ],
  backendTech: [
    {
      href: "https://nodejs.org/",
      icon: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
      name: "Node.js",
    },
    {
      href: "https://expressjs.com/",
      icon: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
      name: "Express.js",
    },
    {
      href: "https://www.postgresql.org",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
      name: "postgresql",
    },
    {
      href: "https://www.sqlite.org/",
      icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
      name: "sqlite",
    },
    {
      href: "https://www.mongodb.com/",
      icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
      name: "mongodb",
    },
  ],
  otherTech: [
    {
      href: "https://postman.com",
      icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      name: "postman",
    },
    {
      href: "https://git-scm.com/",
      icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
      name: "git",
    },
    {
      href: "https://www.adobe.com/in/products/illustrator.html",
      icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/illustrator.svg",
      name: "illustrator",
    },
    {
      href: "https://www.photoshop.com/en",
      icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/photoshop/photoshop-original.svg",
      name: "photoshop",
    },
    {
      href: "https://www.adobe.com/products/aftereffects.html",
      icon: "https://raw.githubusercontent.com/detain/svg-logos/07e36b4aa0691f3015886624395e083395e528c5/svg/a/after-effects-1.svg",
      name: "after effect",
    },
    {
      href: "https://www.adobe.com/products/premiere.html",
      icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/premiere.svg",
      name: "premiere",
    },
    {
      href: "https://www.adobe.com/products/indesign.html",
      icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/indesign.svg",
      name: "indesign",
    },
    {
      href: "https://lightroom.adobe.com/",
      icon: "https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/adobe-lightroom.svg",
      name: "lightroom",
    },
    {
      href: "https://www.blender.org",
      icon: "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/blender.svg",
      name: "blender",
    },
    {
      href: "https://www.solidworks.com/",
      icon: "https://iconape.com/wp-content/png_logo_vector/solidworks-logo.png",
      name: "solidworks",
    },
    {
      href: "https://web.autocad.com/",
      icon: "https://upload.wikimedia.org/wikipedia/commons/6/6e/AutoCad_new_logo.svg",
      name: "AutoCad",
    },
  ]
};
// const backendTech = [
//   {
//     href: "https://nodejs.org/",
//     icon: "https://profilinator.rishav.dev/skills-assets/nodejs-original-wordmark.svg",
//     name: "Node.js",
//   },
//   {
//     href: "https://expressjs.com/",
//     icon: "https://profilinator.rishav.dev/skills-assets/express-original-wordmark.svg",
//     name: "Express.js",
//   },
//   {
//     href: "https://www.postgresql.org",
//     icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg",
//     name: "postgresql",
//   },
//   {
//     href: "https://www.sqlite.org/",
//     icon: "https://www.vectorlogo.zone/logos/sqlite/sqlite-icon.svg",
//     name: "sqlite",
//   },
//   {
//     href: "https://www.mongodb.com/",
//     icon: "https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg",
//     name: "mongodb",
//   },
// ];
// const otherTech = [
//   {
//     href: "https://postman.com",
//     icon: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
//     name: "postman",
//   },
//   {
//     href: "https://git-scm.com/",
//     icon: "https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg",
//     name: "git",
//   },
//   {
//     href: "https://www.adobe.com/in/products/illustrator.html",
//     icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/illustrator.svg",
//     name: "illustrator",
//   },
//   {
//     href: "https://www.photoshop.com/en",
//     icon: "https://raw.githubusercontent.com/devicons/devicon/6910f0503efdd315c8f9b858234310c06e04d9c0/icons/photoshop/photoshop-original.svg",
//     name: "photoshop",
//   },
//   {
//     href: "https://www.adobe.com/products/aftereffects.html",
//     icon: "https://raw.githubusercontent.com/detain/svg-logos/07e36b4aa0691f3015886624395e083395e528c5/svg/a/after-effects-1.svg",
//     name: "after effect",
//   },
//   {
//     href: "https://www.adobe.com/products/premiere.html",
//     icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/premiere.svg",
//     name: "premiere",
//   },
//   {
//     href: "https://www.adobe.com/products/indesign.html",
//     icon: "https://raw.githubusercontent.com/pheralb/svgl/5c82f5c8ee850fe1ae505978ae50296c9f5a6f29/static/library/indesign.svg",
//     name: "indesign",
//   },
//   {
//     href: "https://lightroom.adobe.com/",
//     icon: "https://raw.githubusercontent.com/gilbarbara/logos/29e8719bf78915c7a82a26a6c203f53c4cb8fff2/logos/adobe-lightroom.svg",
//     name: "lightroom",
//   },
//   {
//     href: "https://www.blender.org",
//     icon: "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/blender.svg",
//     name: "blender",
//   },
//   {
//     href: "https://www.solidworks.com/",
//     icon: "https://iconape.com/wp-content/png_logo_vector/solidworks-logo.png",
//     name: "solidworks",
//   },
//   {
//     href: "https://web.autocad.com/",
//     icon: "https://upload.wikimedia.org/wikipedia/commons/6/6e/AutoCad_new_logo.svg",
//     name: "AutoCad",
//   },
// ];

const projects = [
  {
    name: "portfolio",
    description:
      "This is my portfolio website, built using React and Three.js. It showcases my skills and expertise in web development.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "pink-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/yongqi8899/Yongqi.portfolio",
    deploy_link: "https://zhang-yongqi.onrender.com",
  },
  {
    name: "printmystride",
    description:
      "PrintMyStride is an innovative 3D printing shoe store that offers custom footwear tailored to each customer’s unique foot shape. After making a purchase, customers receive a foot impression, which is then used by the store to create personalized shoes using advanced 3D printing technology. This project is a full-stack application with the backend built using Express and the frontend developed with React.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: printmystride,
    source_code_link: "https://github.com/yongqi8899/FE_PrintMyStride",
    deploy_link: "https://fe-printmystride.onrender.com/",
  },
  {
    name: "printmystride CMS",
    description:
      "PrintMyStride CMS is the content management system designed to support PrintMyStride. It allows for the management of the store's operations, including creating, reading, updating, and deleting (CRUD) information related to products, orders, and customer data. This CMS ensures efficient and streamlined management of the custom shoe-making process.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
      {
        name: "MongoDB",
        color: "blue-text-gradient",
      },
    ],
    image: printmystride,
    source_code_link: "https://github.com/yongqi8899/CMS_PrintMyStride",
    deploy_link: "https://cms-printmystride.onrender.com/",
  },
  {
    name: "3D Map",
    description:
      "The 3D Interactive Flight Map is a dynamic, real-time visualization tool designed for large-screen displays, showcasing flight routes across China. Featuring an immersive 3D map, the system allows users to click on any airport or location to instantly display all active flights departing from at that point. Flight paths are smoothly animated across the map, providing a clear and engaging view of air traffic. This interactive tool is ideal for aviation monitoring, control centers, or public information displays, offering a user-friendly experience and comprehensive insights into China's airspace and flight patterns.",
    tags: [
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
      {
        name: "threejs",
        color: "green-text-gradient",
      },
    ],
    image: map_3d,
    source_code_link: "https://github.com/yongqi8899/map",
  },
  {
    name: "CMS for IT Deutschland Immobilien",
    description:
      "Project CMS for IT Deutschland Immobilien is a specialized digital platform designed to centralize and optimize real estate management in Germany. It streamlines property management by consolidating data, documents, and processes into a user-friendly system. Key features include comprehensive Property and Tenant Management, Financial Tracking, and secure Document Management. The platform ensures compliance with local regulations through automated reporting and offers real-time insights into asset performance. This CMS enhances operational efficiency, reduces costs, and improves service quality, making it an essential tool for managing residential, commercial, and industrial real estate portfolios.",
    tags: [
      {
        name: "nuxt",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: it,
  },
  {
    name: "Canine Cuisine",
    description:
      "This project highlights UI/UX design, leveraging the psychological principle that eye direction in images can subtly influence where users focus their attention. Scientific studies show that when a person in an image looks in a certain direction, viewers are subconsciously guided to follow that gaze. This concept is often used in marketing to direct attention to products or key information. Inspired by this, the website design incorporates visual elements that guide users naturally. The focus is on optimizing user interaction, alongside performance enhancements such as route lazy loading, caching with keep-alive, and image lazy loading, creating a seamless browsing experience.",
    tags: [
      {
        name: "vue",
        color: "blue-text-gradient",
      },
      {
        name: "vuex",
        color: "green-text-gradient",
      },
      {
        name: "sass",
        color: "pink-text-gradient",
      },
    ],
    image: dog_food,
    source_code_link: "https://github.com/yongqi8899/hundfutter",
    deploy_link: "https://hundfutter.netlify.app",
  },
  {
    name: "RhythmWave 3D",
    description:
      "This website is my first venture into the world of 3D web design using Three.js, reflecting the growing trend of 3D websites. It's a music-focused platform where the visual experience is as dynamic as the audio. The highlight of the site is a wave animation that moves in sync with the rhythm of the music, creating an immersive experience where sound and visuals blend seamlessly. This project showcases the potential of 3D elements in web design, adding a unique, interactive layer to the user experience.",
    tags: [
      {
        name: "Vue",
        color: "blue-text-gradient",
      },
      {
        name: "Three.js",
        color: "green-text-gradient",
      },
      {
        name: "SASS",
        color: "pink-text-gradient",
      },
    ],
    image: music,
    source_code_link: "https://github.com/yongqi8899/first-3D-Web",
    deploy_link: "https://first-3d-web.netlify.app/",
  },
];

export { navLinks, bio, technologies, projects };
