'use client';

import { Card } from '@/components/Card';
import { SectionHeader } from '@/components/SectionHeader';
import bookImage from '@/assets/images/book-cover.png';
import Image from 'next/image';
import mapImage from '@/assets/images/map.png';
import smileMemoji from '@/assets/images/memoji-smile.png';
import { CardHeader } from '@/components/CardHeader';
import { ToolBoxItems } from '@/components/ToolboxItems';
import { motion } from 'motion/react';
import { hobbies, toolBoxItems } from '@/utils/constants';
import { Reveal } from '@/components/Reveal';

export const AboutSection = () => {
  return (
    <section className="py-16 lg:py-24" id="about">
      <div className="container">
        <div className="section-divider pt-14 lg:pt-18">
          <SectionHeader
            eyebrow="About"
            title="The craft behind the interface"
            description="A narrative view of how I think, what I use, and what shapes my product execution."
          />

          <div className="mt-10 md:mt-14 space-y-7">
            <Reveal>
              <Card className="rounded-[2rem] p-6 md:p-8">
                <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                  <div>
                    <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                      Chapter 01
                    </p>
                    <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] mt-4 text-[var(--ink)]">
                      Taste and judgment are built before they are coded.
                    </h3>
                    <p className="mt-4 text-[var(--text-muted)] md:text-lg">
                      I spend time on design references and product writing to
                      improve implementation quality, not just visual styling.
                    </p>
                  </div>
                  <motion.div whileHover={{ rotate: -2, y: -3 }} className="mx-auto">
                    <Image src={bookImage} alt="Book Cover" className="w-44 md:w-52" />
                  </motion.div>
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.08}>
              <Card className="rounded-[2rem] p-0 overflow-hidden">
                <div className="p-6 md:px-8 md:pt-8 md:pb-6">
                  <CardHeader
                    title="Toolbox"
                    description="A curated stack for maintainable, production-focused frontend delivery."
                    className="p-0"
                  />
                </div>
                <div className="pb-7 md:pb-8">
                  <ToolBoxItems
                    items={toolBoxItems}
                    itemsWrapperClassName="animate-move-left [animation-duration:30s] hover:[animation-play-state:paused]"
                  />
                  <ToolBoxItems
                    className="mt-5"
                    items={toolBoxItems}
                    itemsWrapperClassName="animate-move-right [animation-duration:18s] hover:[animation-play-state:paused]"
                  />
                </div>
              </Card>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="grid md:grid-cols-[0.85fr_1.15fr] gap-7 items-stretch">
                <Card className="rounded-[2rem] p-0 relative overflow-hidden min-h-[360px]">
                  <Image
                    src={mapImage}
                    alt="Map of my location"
                    className="h-full w-full object-cover object-left-top"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(24,20,15,0.62)_0%,transparent_58%)]"></div>
                  <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-[#e8ddcc66] bg-[#2f2720b5] backdrop-blur-sm p-3 flex items-center gap-3">
                    <Image src={smileMemoji} alt="Memoji Avatar" className="size-12" />
                    <div>
                      <p className="text-xs uppercase tracking-[0.18em] text-[var(--accent-soft)]">
                        Base Location
                      </p>
                      <p className="text-[#f5eee3]">India</p>
                    </div>
                  </div>
                </Card>

                <Card className="rounded-[2rem] p-6 md:p-8">
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--accent)] font-medium">
                    Chapter 02
                  </p>
                  <h3 className="font-serif text-3xl md:text-5xl leading-[1.05] mt-4 text-[var(--ink)]">
                    Curiosity outside work improves product decisions.
                  </h3>
                  <p className="mt-4 text-[var(--text-muted)] md:text-lg">
                    Outside coding, these interests help me maintain creativity,
                    patience, and a sharper sense for user behavior.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-2.5">
                    {hobbies.map((hobby) => (
                      <motion.div
                        key={hobby.title}
                        whileHover={{ y: -2 }}
                        className="inline-flex items-center gap-2 px-4 py-2 border border-[var(--line)] bg-[var(--surface-strong)] rounded-full micro-lift"
                      >
                        <span className="text-sm text-[var(--ink)]">{hobby.title}</span>
                        <span>{hobby.emoji}</span>
                      </motion.div>
                    ))}
                  </div>
                </Card>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
};
