type Props = { title: string; subtitle?: string; right?: React.ReactNode };
export default function SectionHeader({ title, subtitle, right }: Props) {
  return (
    <header className="mb-4 flex items-center justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        {subtitle ? <p className="text-sm text-foreground/60">{subtitle}</p> : null}
      </div>
      {right}
    </header>
  );
}
