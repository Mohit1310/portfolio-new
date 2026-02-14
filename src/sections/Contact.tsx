import ArrowUpRightIcon from '@/assets/icons/arrow-up-right.svg';
import grainImage from '@/assets/images/grain.jpg';

export const ContactSection = () => {
  return (
    <section className="py-16 pt-12 lg:py-24 lg:pt-20" id="contact">
      <div className="container">
        <div className="rounded-[2rem] py-9 px-8 md:px-10 text-[#f8f4eb] text-center md:text-left relative z-0 overflow-hidden bg-[linear-gradient(140deg,#132043_0%,#1f3f68_60%,#0e5cad_100%)] border border-[#1320433d] shadow-[0_32px_60px_-42px_rgba(10,25,48,0.9)]">
          <div
            className="absolute inset-0 overflow-hidden -z-10 opacity-10"
            style={{ backgroundImage: `url(${grainImage.src})` }}
          ></div>
          <div className="absolute -top-20 -right-16 h-48 w-48 rounded-full bg-[#e9ccb44f] blur-3xl"></div>
          <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-end justify-between">
            <div className="max-w-xl">
              <h2 className="font-serif text-3xl md:text-5xl leading-tight">
                Let&apos;s design your next product experience.
              </h2>
              <p className="text-sm md:text-base mt-3 text-[#f8f4ebd4]">
                If you&apos;re building a product and need frontend execution that
                feels thoughtful, fast, and conversion-ready, I&apos;d be glad to
                collaborate.
              </p>
            </div>
            <div>
              <a href="mailto:mohitdayma.dev@gmail.com" target="_blank" rel="noopener noreferrer">
                <button className="text-[var(--ink)] bg-[#f8f4eb] inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-[#f8f4eb] hover:bg-[#e9dccb] transition-colors">
                  <span className="font-semibold">Contact Me</span>
                  <ArrowUpRightIcon className="size-4" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
