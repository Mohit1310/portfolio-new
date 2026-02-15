import bugbookLandingPage from '@/assets/images/bugbook-landing-page.png';
import netflixLandingPage from '@/assets/images/netflix-landing-page.png';
import youtubeLandingPage from '@/assets/images/youtube-landing-page.png';
import JavaScriptIcon from '@/assets/icons/javascript.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import GithubIcon from '@/assets/icons/github.svg';
import StrapiIcon from '@/assets/icons/strapi.svg';
import NestJsIcon from '@/assets/icons/nestjs.svg';
import NodeJsIcon from '@/assets/icons/nodejs.svg';
import TailwindCssIcon from '@/assets/icons/tailwindcss.svg';
import CPlusPlusIcon from '@/assets/icons/cpp.svg';
import NextJsIcon from '@/assets/icons/nextjs.svg';
import VueIcon from '@/assets/icons/vue.svg';
import NuxtIcon from '@/assets/icons/nuxt.svg';
import AiIcon from '@/assets/icons/ai.svg';
import MongoDbIcon from '@/assets/icons/mongodb.svg';
import memojiAvatar1 from '@/assets/images/memoji-avatar-1.png';
import memojiAvatar2 from '@/assets/images/memoji-avatar-2.png';
import memojiAvatar3 from '@/assets/images/memoji-avatar-3.png';

export const portfolioProjects = [
  {
    company: 'Project',
    year: '2023',
    title: 'Bugbook a 𝕏 clone',
    results: [
      { title: 'Modern stack: Next.js, Tailwind, Prisma, React Query' },
      { title: 'Real-time social features mirroring 𝕏 functionality' },
      { title: 'Scalable architecture with efficient data management' },
    ],
    link: 'https://bugbook-62ez.vercel.app/',
    image: bugbookLandingPage,
  },
  {
    company: 'Project',
    year: '2023',
    title: 'Netflix with GPT search',
    results: [
      { title: 'React-powered Netflix clone with Tailwind and Firebase' },
      { title: 'AI-enhanced search for intuitive movie discovery' },
      { title: 'Comprehensive movie database integration using TMDB API' },
    ],
    link: 'https://nettflixgpt.netlify.app',
    image: netflixLandingPage,
  },
  {
    company: 'Project',
    year: '2024',
    title: 'Youtube Clone',
    results: [
      { title: 'React-based YouTube clone with Tailwind CSS styling' },
      { title: 'Debounced search with live suggestion functionality' },
      { title: 'Static nested comments mimic lively user interactions' },
    ],
    link: 'https://advancedyoutube.netlify.app',
    image: youtubeLandingPage,
  },
];

export const toolBoxItems = [
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'NextJs',
    iconType: NextJsIcon,
  },
  {
    title: 'Tailwind',
    iconType: TailwindCssIcon,
  },
  {
    title: 'Vue',
    iconType: VueIcon,
  },
  {
    title: 'Nuxt',
    iconType: NuxtIcon,
  },
  {
    title: 'Strapi',
    iconType: StrapiIcon,
  },
  {
    title: 'NodeJs',
    iconType: NodeJsIcon,
  },
  {
    title: 'NestJs',
    iconType: NestJsIcon,
  },
  {
    title: 'C++',
    iconType: CPlusPlusIcon,
  },
  {
    title: 'MongoDB',
    iconType: MongoDbIcon,
  },
  {
    title: 'AI',
    iconType: AiIcon,
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

export const testimonials = [
  {
    name: 'Alex Turner',
    position: 'Marketing Manager @ TechStartups',
    text: 'The final UI was fast, polished, and aligned with our brand from day one.',
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Excellent collaboration and strong frontend execution across the full product.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: 'The interface quality and performance improvements exceeded expectations.',
    avatar: memojiAvatar3,
  },
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
