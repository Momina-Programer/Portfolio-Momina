
import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: web,
    },

    {
      title: "Mearn Stack Developer",
      icon: web,
    },
   
    {
      title: "Backend Developer",
      icon: backend,
    },
   
  ];
  
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
    // {
    //   name: "Laravel",
    //   icon: laravel,
    // },
 
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
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
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "Internpedia",
      icon: starbucks,
      iconBg: "#383E56",
      date: "1 March - 31 March 2024",
      points: [
        "Developing and maintaining web applications using HTML, CSS, Javascript and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    // {
    //   title: "React Native Developer",
    //   company_name: "Tesla",
    //   icon: tesla,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2021 - Feb 2022",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
    {
      title: "Java Developer",
      company_name: "Internpedia",
      icon: shopify,
      iconBg: "#383E56",
      date: "1 June 2024 - 31 June 2024",
      points: [
        "Developing and maintaining web applications using Java, GUI and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React.Js Developer",
      company_name: "Socail Swirl",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "September 2024 - November 2024",
      points: [
        "Developing and maintaining web applications using React.js, Bootstrap, Tailwind CSS  and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "We are pleased to provide feedback on your performance during your Web Development internship at [Internpdia].You showcased strong skills in web technologies like HTML, CSS, JavaScript, and frameworks such as React.Js.",
      name: "Brinda G ",
      designation: "Manager",
      company: "Internpedia",
      image: "https://up.yimg.com/ib/th?id=OIP.XlZsJurlViM0UjcVFwIpgQAAAA&pid=Api&rs=1&c=1&qlt=95&w=113&h=113",
    },
    {
      testimonial:
      "We are pleased to share feedback on your performance during your Java internship at [Internpedia].You demonstrated a strong understanding of Java programming concepts and applied them effectively in real-world projects. " ,
      name: "Brinda G ",
      designation: "Manager",
      company: "Internpedia",
      image: "https://up.yimg.com/ib/th?id=OIP.XlZsJurlViM0UjcVFwIpgQAAAA&pid=Api&rs=1&c=1&qlt=95&w=113&h=113",
    },
    {
      testimonial:
        "We are pleased to acknowledge your outstanding performance during your internship at [Social Swirl]. Your dedication, quick learning, and problem-solving abilities were impressive.",

     name: "Sir Waleed",
      designation: "HR ",
      company: "Soical Swirl",
      image: "https://scontent.fkhi17-1.fna.fbcdn.net/v/t39.30808-1/449188344_982050580594297_2873290209957382261_n.jpg?stp=dst-jpg_s200x200_tt6&_nc_cat=110&ccb=1-7&_nc_sid=f4b9fd&_nc_ohc=ecEot9Oi2ccQ7kNvgGeaARS&_nc_zt=24&_nc_ht=scontent.fkhi17-1.fna&_nc_gid=A20YJq6gmWE22gLEcBYNGzU&oh=00_AYDh-IjqB_0R0evaVlVwAXpgWZlSxwugCtpeubW6qudm_g&oe=675A1492",
    },
  ];
  
  const projects = [
    {
      name: "Online-Cloth",
      description:
        "Momina Khan's online clothing project, built with React.js, HTML, CSS, and Tailwind CSS, features a modern, responsive design with dynamic product displays, interactive filters, and a smooth shopping experience, offering users an elegant and user-friendly fashion platform.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/Momina-Programer/Project-Online-cloth-.git",
    },
    {
      name: "Online-Electron",
      description:
        "Momina Khan's electronics e-commerce project, built with React.js, HTML, CSS, and Tailwind CSS, features responsive design, interactive product displays, dynamic filtering, and a smooth shopping cart system, offering users a modern, fast, and user-friendly online shopping experience.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/Momina-Programer/Electronics.git",
    },
    {
      name: "Resturant",
      description:
        "Momina Khan's restaurant project, built with React.js, HTML, CSS, and Tailwind CSS, features a modern, responsive design with interactive menus, online reservations, customer reviews, and dynamic animations, offering users a smooth and visually appealing dining experience online.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "Tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/Momina-Programer/Restaurant-website.git",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };