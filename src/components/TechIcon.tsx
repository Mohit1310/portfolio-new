export const TechIcon = ({ component }: { component: React.ElementType }) => {
  const Component = component;
  return (
    <>
      <Component className="size-8 fill-[url(#tech-icon-gradient)]" />
      <svg className="size-0 absolute">
        <linearGradient id="tech-icon-gradient">
          <stop offset="0%" stopColor="rgb(124 87 43)" />
          <stop offset="100%" stopColor="rgb(179 138 88)" />
        </linearGradient>
      </svg>
    </>
  );
};
