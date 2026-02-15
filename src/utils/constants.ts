import bugbookLandingPage from '@/assets/images/bugbook-landing-page.png';
import netflixLandingPage from '@/assets/images/netflix-landing-page.png';
import youtubeLandingPage from '@/assets/images/youtube-landing-page.png';

export const portfolioProjects = [
  {
    company: 'Project',
    year: '2023',
    title: 'Bugbook a 𝕏 clone',
    results: [
      {
        title:
          'Built with Next.js, Tailwind CSS, Prisma, and React Query to deliver a fast, modern UI with reliable client-server state handling.',
      },
      {
        title:
          'Implemented core social interactions inspired by 𝕏, including timeline-driven content flow and responsive engagement patterns.',
      },
      {
        title:
          'Structured data models and API usage for maintainability, enabling cleaner scaling as feature complexity and user activity grow.',
      },
    ],
    link: 'https://bugbook-62ez.vercel.app/',
    image: bugbookLandingPage,
  },
  {
    company: 'Project',
    year: '2023',
    title: 'Netflix with GPT search',
    results: [
      {
        title:
          'Developed a React-based Netflix clone using Tailwind CSS and Firebase, with smooth browsing flows and reusable UI sections.',
      },
      {
        title:
          'Integrated GPT-assisted search to improve content discovery by translating user intent into more relevant movie suggestions.',
      },
      {
        title:
          'Connected TMDB APIs for dynamic catalog data, giving users up-to-date movie details, posters, and category-based exploration.',
      },
    ],
    link: 'https://nettflixgpt.netlify.app',
    image: netflixLandingPage,
  },
  {
    company: 'Project',
    year: '2024',
    title: 'Youtube Clone',
    results: [
      {
        title:
          'Created a React YouTube clone with Tailwind CSS, focusing on a familiar layout, clear content hierarchy, and responsive behavior.',
      },
      {
        title:
          'Added debounced search and live suggestions to reduce unnecessary requests while keeping the search experience quick and fluid.',
      },
      {
        title:
          'Designed nested comment threads to mirror real discussion structures and improve readability for longer conversation chains.',
      },
    ],
    link: 'https://advancedyoutube.netlify.app',
    image: youtubeLandingPage,
  },
];

export const toolBoxItems = [
  {
    title: 'HTML5',
  },
  {
    title: 'CSS3',
  },
  {
    title: 'JavaScript',
  },
  {
    title: 'Github',
  },
  {
    title: 'React',
  },
  {
    title: 'NextJs',
  },
  {
    title: 'Tailwind',
  },
  {
    title: 'Strapi',
  },
  {
    title: 'NestJs',
  },
  {
    title: 'MongoDB',
  },
  {
    title: 'AI',
  },
];

export const words = [
  'Performant',
  'Accessible',
  'Secure',
  'Interactive',
  'Scalable',
  'User Friendly',
  'Maintainable',
  'Responsive',
  'Search Optimized',
  'Usable',
  'Reliable',
];

export const footerLinks = [
  {
    title: 'LinkedIn',
    href: 'https://www.linkedin.com/in/mohit1310/',
  },
  {
    title: 'Twitter',
    href: 'https://x.com/Mohit13_10',
  },
];
