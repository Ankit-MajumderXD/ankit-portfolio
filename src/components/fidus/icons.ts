import {
  Bot,
  CalendarDays,
  ChartColumn,
  CreditCard,
  Hospital,
  Landmark,
  LockKeyhole,
  MessageSquare,
  Stethoscope,
  User,
  Users,
  type LucideIcon,
} from "lucide-react";

// Icons standing in for the emoji the original Fidus titles used
// (🏥 💬 📅 📊 👤 🤖 🩺 🔐 👨‍⚕️ 🏛 💳). Decorative only.
export const FIDUS_ICONS = {
  hospital: Hospital,
  chat: MessageSquare,
  calendar: CalendarDays,
  chart: ChartColumn,
  patient: User,
  patients: Users,
  bot: Bot,
  doctor: Stethoscope,
  privacy: LockKeyhole,
  government: Landmark,
  insurance: CreditCard,
} satisfies Record<string, LucideIcon>;
