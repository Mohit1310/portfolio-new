import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import JavaScriptIcon from '@/assets/icons/square-js.svg';
import HtmlIcon from '@/assets/icons/html5.svg';
import CssIcon from '@/assets/icons/css3.svg';
import ReactIcon from '@/assets/icons/react.svg';
import ChromeIcon from '@/assets/icons/chrome.svg';
import GithubIcon from '@/assets/icons/github.svg';
import mapImage from '@/assets/images/map.png';
import simileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolboxItems';

const toolBoxItems = [
  {
    title: 'JavaScript',
    iconType: JavaScriptIcon,
  },
  {
    title: 'HTML5',
    iconType: HtmlIcon,
  },
  {
    title: 'CSS3',
    iconType: CssIcon,
  },
  {
    title: 'React',
    iconType: ReactIcon,
  },
  {
    title: 'Chrome',
    iconType: ChromeIcon,
  },
  {
    title: 'Github',
    iconType: GithubIcon,
  },
];

const hobbies = [
  {
    title: 'Painting',
    emoji: '🎨',
    left: '5%',
    top: '5%',
  },
  {
    title: 'Photography',
    emoji: '📷',
    left: '50%',
    top: '5%',
  },
  {
    title: 'Hiking',
    emoji: '🥾',
    left: '35%',
    top: '45%',
  },
  {
    title: 'Gaming',
    emoji: '🎮',
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
    title: 'Fitness',
    emoji: '🏋️‍♀️',
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

export const AboutSection = () => {
  return (
    <div className="py-20 lg:py-28">
      <div className="container">
        <SectionHeader
          eyebrow="About Me"
          title="Glimpse into my world"
          description="Learn about whho I am, what I do, and what inspires me."
        />
        <div className="mt-20 flex flex-col gap-8">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] md:col-span-2 lg:col-span-1">
              <CardHeader
                title="My Reads"
                description="Explore the books shaping my perspective."
              />
              <div className="w-40 mx-auto mt-2 md:mt-0">
                <Image src={bookImage} alt="Book Cover" />
              </div>
            </Card>
            <Card className="h-[320px] md:col-span-3 lg:col-span-2">
              <CardHeader
                title="My Toolbox"
                description="Explore the technologies and tools I use to craft exceptional digital experiences."
              />
              <ToolBoxItems items={toolBoxItems} />
              <ToolBoxItems
                className="mt-6"
                items={toolBoxItems}
                itemsWrapperClassName="-translate-x-1/2"
              />
            </Card>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
            <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
              <CardHeader
                title="Beyond the Code"
                description="Explore my interests and Hobbies beyond digital realm."
                className="px-6 py-6"
              />
              <div className="relative flex-1">
                {hobbies.map((hobby) => (
                  <div
                    key={hobby.title}
                    className="inline-flex items-center gap-2 px-6 bg-gradient-to-r from-emerald-300 to-sky-400 rounded-full py-1.5 absolute"
                    style={{
                      left: hobby.left,
                      top: hobby.top,
                    }}
                  >
                    <span className="font-medium text-gray-950">
                      {hobby.title}
                    </span>
                    <span>{hobby.emoji}</span>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1">
              <Image
                src={mapImage}
                alt="Map of my location"
                className="h-full w-full object-cover object-left-top"
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-emerald-300 to-sky-400 after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-gray-950/30">
                <Image
                  src={simileMemoji}
                  alt="Map of India"
                  className="size-20"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};
