'use client';
import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import mapImage from '@/assets/images/map.png';
import simileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolboxItems';
import { motion } from 'motion/react';
import { useRef } from 'react';
import { hobbies, toolBoxItems } from '@/utils/constants';

export const AboutSection = () => {
  const constratintRef = useRef(null);
  return (
    <section className="py-20 lg:py-28" id="about">
      <div className="container">
        <div className="section-divider pt-16 lg:pt-20">
          <SectionHeader
            eyebrow="Inside the Practice"
            title="How I think and build"
            description="A quick look at the tools, interests, and habits that shape my approach to product-focused frontend engineering."
          />
          <div className="mt-14 flex flex-col gap-8">
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] md:col-span-2 lg:col-span-1 bg-[var(--surface-strong)]">
                <CardHeader
                  title="Current Read"
                  description="Books that influence my product decisions and design taste."
                />
                <div className="w-40 mx-auto mt-2 md:mt-0 rotate-[-5deg]">
                  <Image src={bookImage} alt="Book Cover" />
                </div>
              </Card>
              <Card className="h-[320px] md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Technical Stack"
                  description="Reliable tools I use to craft maintainable products and smooth user experiences."
                />
                <ToolBoxItems
                  items={toolBoxItems}
                  itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
                />
                <ToolBoxItems
                  className="mt-6"
                  items={toolBoxItems}
                  itemsWrapperClassName="animate-move-right [animation-duration:18s] hover:[animation-play-state:paused]"
                />
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-3 gap-8">
              <Card className="h-[320px] p-0 flex flex-col md:col-span-3 lg:col-span-2">
                <CardHeader
                  title="Beyond Work"
                  description="Interests that keep me creative and improve the way I solve product problems."
                  className="px-6 py-6"
                />
                <div className="relative flex-1" ref={constratintRef}>
                  {hobbies.map((hobby) => (
                    <motion.div
                      key={hobby.title}
                      className="inline-flex items-center gap-2 px-5 bg-[linear-gradient(120deg,#d8e8f7_0%,#f4dfcc_100%)] border border-[#13204324] rounded-full py-1.5 absolute"
                      style={{
                        left: hobby.left,
                        top: hobby.top,
                      }}
                      drag
                      dragConstraints={constratintRef}
                    >
                      <span className="font-medium text-[var(--ink)]">
                        {hobby.title}
                      </span>
                      <span>{hobby.emoji}</span>
                    </motion.div>
                  ))}
                </div>
              </Card>
              <Card className="h-[320px] p-0 relative md:col-span-2 lg:col-span-1 overflow-hidden">
                <Image
                  src={mapImage}
                  alt="Map of my location"
                  className="h-full w-full object-cover object-left-top"
                />
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(19,32,67,0.55)_0%,transparent_50%)]"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full after:content-[''] after:absolute after:inset-0 after:outline after:outline-2 after:-outline-offset-2 after:rounded-full after:outline-[#13204359]">
                  <div className="absolute inset-0 rounded-full bg-[#7caad8] -z-20 animate-ping [animation-duration:2s]"></div>
                  <div className="absolute inset-0 rounded-full bg-[#e9ccb4] -z-10"></div>
                  <Image
                    src={simileMemoji}
                    alt="Memoji Avatar"
                    className="size-20"
                  />
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
