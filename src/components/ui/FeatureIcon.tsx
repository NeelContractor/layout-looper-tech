import {
  Copy,
  FolderOpen,
  LayoutGrid,
  Layers,
  PenLine,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Text } from "./Typography";

const icons: Record<string, LucideIcon> = {
  shield: ShieldCheck,
  layers: Layers,
  copy: Copy,
  grid: LayoutGrid,
  folder: FolderOpen,
  pencil: PenLine,
};

type FeatureItemProps = {
  icon: string;
  label: string;
  /** Icon tile size in px — change to scale the badge. */
  boxSize?: number;
  className?: string | undefined;
};

/** Small "icon tile + two-line label" pair used in the hero and feature rows. */
export function FeatureItem({ icon, label, boxSize = 32, className }: FeatureItemProps) {
  const Icon = icons[icon] ?? ShieldCheck;
  return (
    <div className={cn("flex min-w-0 items-center gap-3", className)}>
      <span
        className="grid shrink-0 place-items-center rounded-icon bg-brand-ink text-primary-foreground"
        style={{ width: boxSize, height: boxSize }}
      >
        <Icon style={{ width: boxSize * 0.55, height: boxSize * 0.55 }} strokeWidth={2} />
      </span>
      <Text size="small" className="min-w-0">
        {label}
      </Text>
    </div>
  );
}
