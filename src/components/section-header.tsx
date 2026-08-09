interface SectionHeaderProps {
  title: string;
  description: string;
}

export const SectionHeader = ({ title, description }: SectionHeaderProps) => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-12">
      <h2 className="text-3xl font-medium tracking-tight md:text-4xl">
        {title}
      </h2>
      <p className="text-(--text-muted) md:pt-2">{description}</p>
    </div>
  );
};
