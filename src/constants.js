// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import sassLogo from './assets/tech_logo/sass.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import angularLogo from './assets/tech_logo/angular.png';
import reduxLogo from './assets/tech_logo/redux.png';
import nextjsLogo from './assets/tech_logo/nextjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import springbootLogo from './assets/tech_logo/springboot.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import pythonLogo from './assets/tech_logo/python.png';
import typescriptLogo from './assets/tech_logo/typescript.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import mcLogo from './assets/tech_logo/mc.png';
import figmaLogo from './assets/tech_logo/figma.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import postgreLogo from './assets/tech_logo/postgre.png';
import csharpLogo from './assets/tech_logo/csharp.png';


// Education Section Logo's
import glaLogo from './assets/education_logo/gla_logo.png';
import bsaLogo from './assets/education_logo/BSA_LOGO.jpeg';

// Project Section Logo's
import todoLogo from './assets/work_logo/ToDo_List.png';
import ticTacToeLogo from './assets/work_logo/Tic Tac Toe.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Angular', logo: angularLogo },
     
      { name: 'Next JS', logo: nextjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
     
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Springboot', logo: springbootLogo },
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
     
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
    
      { name: 'Java', logo: javaLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'C-Sharp', logo: csharpLogo },
      { name: 'JavaScript', logo: javascriptLogo },
     
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Compass', logo: mcLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];

  
  export const education = [
    {
      id: 0,
      img: glaLogo,
      school: "GLA University, Mathura",
      date: "Aug 2023 - present",
    
      desc: "I am currently pursuing a Bachelor of Technology (B.Tech) in Computer Science and Engineering at GLA University, Mathura. Throughout my academic journey, I have developed a strong foundation in programming, data structures, algorithms, database management systems, and web development. I am passionate about software development and continuously enhancing my technical skills through projects and hands-on learning.",
      degree: "Bachelor of Technology - B.Tech (Computer Science and Engineering)",
    },
    {
  id: 1,
  img: bsaLogo,
  school: "Brij Sthali Academy Senior Secondary School, Mathura",
  date: "Apr 2022 - Mar 2023",
  desc: "I completed my Class 12 education from Brij Sthali Academy Senior Secondary School, Mathura, under the CBSE board, where I studied Physics, Chemistry, Mathematics (PCM), and Computer Science.",
  degree: "CBSE (XII) - PCM with Computer Science",
},
   {
  id: 2,
  img: bsaLogo,
  school: "Brij Sthali Academy Senior Secondary School, Mathura",
  date: "Apr 2020 - Mar 2021",
  desc: "I completed my Class 10 education from Brij Sthali Academy Senior Secondary School, Mathura, under the CBSE board.",
  degree: "CBSE (X)",
}
  ];
  
  export const projects = [
  {
    id: 0,
    title: "To-Do List App",
    description:
      "A simple and user-friendly task management application that helps users organize daily tasks. Users can add, edit and delete tasks efficiently.",
    image: todoLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prince-Raghav/ToDo_LIST.git",
    webapp: "https://velvety-beignet-bd7d7b.netlify.app/",
  },
   {
    id: 1,
    title: "Tic Tac Toe Game",
    description:
      "An interactive Tic Tac Toe game with a clean and responsive interface where players can compete and reset the game anytime.",
    image: ticTacToeLogo,
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Prince-Raghav/Tic-Tac-Toe.git",
    webapp: "https://tic-tac-toe-indol-ten-75.vercel.app/",
  },
];  