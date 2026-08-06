import {
  Ruler,
  Home,
  PenTool,
  FileInput,
  Box,
  FileStack,
  Layers,
  Compass,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Ruler,
  Home,
  PenTool,
  FileInput,
  Box,
  FileStack,
  Layers,
  Compass,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Compass;
}
