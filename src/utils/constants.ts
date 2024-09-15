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
import memojiAvatar4 from '@/assets/images/memoji-avatar-4.png';
import memojiAvatar5 from '@/assets/images/memoji-avatar-5.png';
import { title } from 'process';

export const portfolioProjects = [
  {
    company: 'Project',
    year: '2023',
    title: 'Bugbook a X clone',
    results: [
      { title: 'Modern stack: Next.js, Tailwind, Prisma, React Query' },
      { title: 'Real-time social features mirroring X functionality' },
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

export const hobbies = [
  {
    title: 'Exploring',
    emoji: '🤯',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Movies',
    emoji: '🎬',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Devotion',
    emoji: '🙏',
    left: '35%',
    top: '45%',
  },
  {
    title: 'Animation',
    emoji: '🎞️',
    left: '10%',
    top: '35%',
  },
  {
    title: 'Music',
    emoji: '🎵',
    left: '70%',
    top: '45%',
  },
  {
    title: 'Hatha Yoga',
    emoji: '🧘',
    left: '5%',
    top: '65%',
  },
  {
    title: 'Reading',
    emoji: '📚',
    left: '45%',
    top: '70%',
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
    text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
    avatar: memojiAvatar1,
  },
  {
    name: 'Olivia Green',
    position: 'Head of Design @ GreenLeaf',
    text: 'Working with Alex was a pleasure. His expertise in frontend development brought our designs to life in a way we never imagined. The website has exceeded our expectations.',
    avatar: memojiAvatar2,
  },
  {
    name: 'Daniel White',
    position: 'CEO @ InnovateCo',
    text: "Alex's ability to create seamless user experiences is unmatched. Our website has seen a significant increase in conversions since launching the new design. We couldn't be happier.",
    avatar: memojiAvatar3,
  },
  {
    name: 'Emily Carter',
    position: 'Product Manager @ GlobalTech',
    text: "Alex is a true frontend wizard. He took our complex product and transformed it into an intuitive and engaging user interface. We're already seeing positive feedback from our customers.",
    avatar: memojiAvatar4,
  },
  {
    name: 'Michael Brown',
    position: 'Director of IT @ MegaCorp',
    text: "Alex's work on our website has been nothing short of exceptional. He's a talented developer who is also a great communicator. We highly recommend him.",
    avatar: memojiAvatar5,
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
  {
    title: 'Instagram',
    href: 'https://www.instagram.com/mohit13_10/',
  },
];
