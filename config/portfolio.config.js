import cssSelectorsGame from '../public/css-selectors-game.png';
import minesweeperGame from '../public/minesweeper-game.png';
import socialNetwork from '../public/social-network.png';
import inMemories from '../public/in-memories.png';
import solimare from '../public/solimare.png';
import shelter from '../public/shelter.png';
import planner from '../public/planer-5d.png';

export const portfolio = [
    {
        title: 'E-commerce application',
        description: 'Postcards online store, created with Commercetools. Customer can sign up, search products using ' +
            'sort and filter features, explore product details, add chosen items to the cart, apply a discount code',
        technologies: [
            'React JS', 'Redux Toolkit', 'TypeScript', 'Sass', 'Ant Design', 'Commercetools', 'Jest', 'ESLint', 'Prettier', 'Husky', 'Jira'
        ],
        picture: inMemories,
        deployLink: 'https://in-memories-shop.netlify.app',
        codeLink: 'https://github.com/MashaBogdanova/ecommerce-application',
    },
    {
        title: 'Solimare Grota Solna & Sauna',
        description: 'Website for Warsaw SPA center with server-side rendering and adaptive landing',
        technologies: [
            'NextJS', 'TypeScript', 'Sass', 'ESLint', 'Prettier'
        ],
        picture: solimare,
        deployLink: 'https://solimare.pl/',
        codeLink: 'https://github.com/MashaBogdanova/solimare',
    },
    {
        title: 'CSS Selectors Game',
        description: 'CSS training game on pure JS. Player can set a level of difficulty, track and reset his progress',
        technologies: [
            'HTML5', 'Sass', 'TypeScript', 'Webpack', 'Jest', 'ESLint',
        ],
        picture: cssSelectorsGame,
        deployLink: 'https://rolling-scopes-school.github.io/mashabogdanova-JSFE2023Q1/css-selectors/dist/',
        codeLink: 'https://github.com/MashaBogdanova/pet-projects/tree/css-selectors',
    },
    {
        title: 'Minesweeper Game',
        description: 'Legendary game on pure JS. Player can set different levels of difficulty, ' +
            'view previous results, including the number of moves and the time taken',
        technologies: [
            'HTML5', 'Sass', 'JavaScript', 'Webpack',
        ],
        picture: minesweeperGame,
        deployLink: 'https://rolling-scopes-school.github.io/mashabogdanova-JSFE2023Q1/minesweeper/',
        codeLink: 'https://github.com/MashaBogdanova/pet-projects/tree/minesweeper',
    },
    {
        title: 'Social Network',
        description: 'Social Network implemented with React and Redux. User can sign in, add friends, ' +
            'send message in a chat, edit profile data',
        technologies: [
            'React JS', 'Redux Toolkit', 'TypeScript', 'Ant Design', 'Axios', 'React Hook Form', 'Jest',
        ],
        picture: socialNetwork,
        deployLink: 'https://mashabogdanova.github.io/way-of-samuraj-project/',
        codeLink: 'https://github.com/MashaBogdanova/way-of-samuraj-project',
    },
    {
        title: 'Shelter',
        description: 'Pixel Perfect adaptive landing',
        technologies: [
            'HTML5', 'CSS', 'JavaScript', 'Webpack', 'Figma', 'Pixel Perfect'
        ],
        picture: shelter,
        deployLink: 'https://cheery-queijadas-ccf690.netlify.app/shelter/src/sass/pages/main/#',
        codeLink: 'https://github.com/MashaBogdanova/pet-projects/tree/shelter-part3/',
    },
    {
        title: 'Planner-5D',
        description: 'Pixel Perfect landing with Sass',
        technologies: [
            'HTML5', 'Sass', 'Pixel Perfect', 'ESLint', 'Prettier', 'Husky'
        ],
        picture: planner,
        deployLink: 'https://planner-5d.netlify.app/',
        codeLink: 'https://github.com/MashaBogdanova/planner-5d',
    },
]
