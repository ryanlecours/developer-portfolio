import techList from "@/data/tech-stack.json";
import { TECH_ICON_REGISTRY, type TechKey } from "./tech-icons";
import clsx from "clsx";

type TechItem = {
  id: TechKey;
  url: string;
  label?: string;
  color?: string; // optional override
};

type Props = {
  items?: TechItem[];       // default: reads from JSON
  size?: number;            // icon size in pixels (default 36)
  showLabels?: boolean;     // default true
  openInNewTab?: boolean;   // default true
  gapClassName?: string;    // override spacing (default gap-6)
  className?: string;       // wrapper classes
};

export default function TechIconGrid({
  items,
  size = 36,
  showLabels = true,
  openInNewTab = true,
  gapClassName = "gap-6",
  className,
}: Props) {
  const data: TechItem[] = items ?? (techList as TechItem[]);

  return (
    <div
      className={clsx(
        "flex flex-wrap items-center justify-center",
        gapClassName,
        className
      )}
    >
      {data.map(({ id, url, label, color }) => {
        const meta = TECH_ICON_REGISTRY[id];
        if (!meta) {
          // Fail-safe: skip unknown ids to avoid runtime errors
          console.warn(`[TechIconGrid] Unknown tech id: ${id}`);
          return null;
        }
        const Icon = meta.icon;
        const name = label ?? meta.label;
        const brand = color ?? meta.color;

        return (
          <a
            key={id}
            href={url}
            aria-label={name}
            title={name}
            target={openInNewTab ? "_blank" : undefined}
            rel={openInNewTab ? "noopener noreferrer" : undefined}
            className={clsx(
              "group inline-flex flex-col items-center text-center",
              "transition-transform hover:scale-110 focus:scale-110",
              "outline-none focus-visible:ring-2 focus-visible:ring-emerald-500/60 rounded-lg p-1"
            )}
          >
            <Icon
              size={size}
              className="transition-colors"
              style={{
                color: brand,
                filter: "var(--icon-filter, none)",
              }}
            />
            {showLabels && (
              <span className="mt-1 text-xs text-gray-700 dark:text-gray-300">
                {name}
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
