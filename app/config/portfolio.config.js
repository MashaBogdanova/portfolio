import cssSelectorsGame from '../../public/projejects-screenshots/css-selectors-game.png';
import minesweeperGame from '../../public/projejects-screenshots/minesweeper-game.png';
import socialNetwork from '../../public/projejects-screenshots/social-network.png';
import inMemories from '../../public/projejects-screenshots/in-memories.png';
import solimare from '../../public/projejects-screenshots/solimare.png';
import shelter from '../../public/projejects-screenshots/shelter.png';
import planner from '../../public/projejects-screenshots/planer-5d.png';
import graphiql from '../../public/projejects-screenshots/graphiql.png';
import react from '../../public/technologies-icons/react.svg';
import next from '../../public/technologies-icons/nextjs.svg';
import redux from '../../public/technologies-icons/redux.svg';
import sass from '../../public/technologies-icons/sass.svg';
import javascript from '../../public/technologies-icons/javascript.svg';
import typescript from '../../public/technologies-icons/typescript.svg';
import email from '../../public/contacts-icons/email.svg';
import cv from '../../public/contacts-icons/cv.svg';
import github from '../../public/contacts-icons/github.svg';
import linkedin from '../../public/contacts-icons/linkedin.svg';
import telegram from '../../public/contacts-icons/telegram.svg';
import mainPhoto from '../../public/main-photo.jpg';

export const mainInfo = {
  name: 'MARIA BOGDANOVA',
  speciality: 'Frontend Software Engineer',
  summary: 'I’m a proactive frontend developer with expertise in\n' +
    'JavaScript, React, Redux, Next.js, and TypeScript.\n' +
    'Experienced in testing, I’m dedicated to writing highquality code. I enjoy working in collaborative teams and\n' +
    'have experience in teamwork and mentorship. I’m a fast\n' +
    'learner, hardworking, and self-organized, driven by a\n' +
    'passion for continuous growth and learning.',
  photo: mainPhoto,
};
export const technologiesList = [
  {
    title: 'NextJS',
    link: 'https://nextjs.org/',
    icon: next,
  },
  {
    title: 'React',
    link: 'https://react.dev/',
    icon: react,
  },
  {
    title: 'Redux',
    link: 'https://redux.js.org/',
    icon: redux,
  },
  {
    title: 'JavaScript',
    link: 'https://www.javascript.com',
    icon: javascript,
  },
  {
    title: 'TypeScript',
    link: 'https://www.typescriptlang.org/',
    icon: typescript,
  },
  {
    title: 'Sass',
    link: 'https://sass-lang.com/',
    icon: sass,
  },
];
export const contactsList = [
  {
    title: 'CV',
    link: '/cv.pdf',
    icon: cv,
    download: 'CV Maria Bogdanova Frontend Developer.pdf',
  },
  {
    title: 'E-mail',
    link: 'mailto:mashabogdanoff@gmail.com',
    icon: email,
  },
  {
    title: 'Telegram',
    link: 'https://t.me/mashabogdanoff',
    icon: telegram,
  },
  {
    title: 'GitHub',
    link: 'http://github.com/mashabogdanova',
    icon: github,
  },
  {
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/maria-bogdanova-16407a99/',
    icon: linkedin,
  },
];
export const portfolio = [
  {
    title: 'Grota Solna Solimare',
    description:
      'Website for Warsaw SPA center',
    technologies: ['NextJS', 'TypeScript', 'Sass', 'ESLint', 'Prettier'],
    picture: solimare,
    deployLink: 'https://solimare.pl/',
    codeLink: 'https://github.com/MashaBogdanova/solimare',
  },
  {
    title: 'GraphiQL',
    description:
      'GraphQL playground with additional features such as authentication, authorization, and the ability to work with\n' +
      'any user-specified open GraphQL endpoint',
    technologies: [
      'NextJS',
      'TypeScript',
      'Sass',
      'GraphQL',
      'Firebase',
      'Vitest',
      'ESLint',
      'Prettier',
      'Husky',
      'Jira',
      'Figma',
    ],
    picture: graphiql,
    deployLink: 'https://graphiql-editor-dev.netlify.app',
    codeLink: 'https://github.com/MashaBogdanova/graphiql',
    figmaLink: 'https://www.figma.com/file/scpWoZcFi4iT7i5eCBK0T8/GraphiQL?type=design&mode=design'
  },
  {
    title: 'E-commerce store',
    description:
      'Postcards online store, created with Commercetools. Customer can sign up, search products using ' +
      'sort and filter features, explore product details, add chosen items to the cart, apply a discount code',
    technologies: [
      'React JS',
      'Redux Toolkit',
      'TypeScript',
      'Sass',
      'Ant Design',
      'Commercetools',
      'Jest',
      'ESLint',
      'Prettier',
      'Husky',
      'Jira',
    ],
    picture: inMemories,
    deployLink: 'https://in-memories-shop.netlify.app',
    codeLink: 'https://github.com/MashaBogdanova/ecommerce-application',
  },
  {
    title: 'CSS Selectors Game',
    description:
      'CSS training game on pure JS. Player can set a level of difficulty, track and reset his progress',
    technologies: ['HTML5', 'Sass', 'TypeScript', 'Webpack', 'Jest', 'ESLint'],
    picture: cssSelectorsGame,
    deployLink:
      'https://rolling-scopes-school.github.io/mashabogdanova-JSFE2023Q1/css-selectors/dist/',
    codeLink:
      'https://github.com/MashaBogdanova/pet-projects/tree/css-selectors',
  },
  {
    title: 'Minesweeper',
    description:
      'Legendary game on pure JS. Player can set different levels of difficulty, ' +
      'view previous results, including the number of moves and the time taken',
    technologies: ['HTML5', 'Sass', 'JavaScript', 'Webpack'],
    picture: minesweeperGame,
    deployLink:
      'https://rolling-scopes-school.github.io/mashabogdanova-JSFE2023Q1/minesweeper/',
    codeLink: 'https://github.com/MashaBogdanova/pet-projects/tree/minesweeper',
  },
  {
    title: 'Social Network',
    description:
      'Social Network implemented with React and Redux. User can sign in, add friends, ' +
      'send message in a chat, edit profile data',
    technologies: [
      'React JS',
      'Redux Toolkit',
      'TypeScript',
      'Ant Design',
      'Axios',
      'React Hook Form',
      'Jest',
    ],
    picture: socialNetwork,
    deployLink: 'https://mashabogdanova.github.io/way-of-samuraj-project/',
    codeLink: 'https://github.com/MashaBogdanova/way-of-samuraj-project',
  },
  {
    title: 'Shelter',
    description: 'Pixel Perfect adaptive landing',
    technologies: [
      'HTML5',
      'CSS',
      'JavaScript',
      'Webpack',
      'Figma',
      'Pixel Perfect',
    ],
    picture: shelter,
    deployLink:
      'https://cheery-queijadas-ccf690.netlify.app/shelter/src/sass/pages/main/#',
    codeLink:
      'https://github.com/MashaBogdanova/pet-projects/tree/shelter-part3/',
    figmaLink: 'https://www.figma.com/file/Yk6EnbY63FyG2PJTFkJDMh/shelter?type=design&node-id=94-43&mode=design'
  },
  {
    title: 'Planner-5D',
    description: 'Pixel Perfect landing with Sass',
    technologies: [
      'HTML5',
      'Sass',
      'Pixel Perfect',
      'ESLint',
      'Prettier',
      'Husky',
    ],
    picture: planner,
    deployLink: 'https://planner-5d.netlify.app/',
    codeLink: 'https://github.com/MashaBogdanova/planner-5d',
  },
];
