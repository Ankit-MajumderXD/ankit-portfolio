import { CloudSun, Coins, GraduationCap, Search, Sparkles, Wheat, type LucideIcon } from "lucide-react";

// Icons standing in for the emoji the original module titles used
// (🌾 🌦 💰 🎓 🌟 🔍). Shared by CompanionModules and Architecture.
export const MODULE_ICONS = {
  crop: Wheat,
  weather: CloudSun,
  finance: Coins,
  education: GraduationCap,
  fortune: Sparkles,
  search: Search,
} satisfies Record<string, LucideIcon>;
