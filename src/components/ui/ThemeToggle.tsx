import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../theme/theme-context";

type ThemeToggleProps = {
  className?: string;
};

export default function ThemeToggle({ className = "" }: ThemeToggleProps) {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  const label = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={label}
      title={label}
      className={`inline-flex h-10 w-10 items-center justify-center rounded-control border border-line text-fg-muted transition-colors duration-200 hover:border-line-strong hover:bg-surface-2 hover:text-fg ${className}`}
    >
      {isDark ? (
        <Sun aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" className="h-4.5 w-4.5" strokeWidth={1.75} />
      )}
    </button>
  );
}
