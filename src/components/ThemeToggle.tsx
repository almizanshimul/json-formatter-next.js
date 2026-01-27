import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";

interface ThemeToggleProps {
  isDark: boolean;
  onToggle: () => void;
}

export function ThemeToggle({ isDark, onToggle }: ThemeToggleProps) {
  return (
    <motion.button
      onClick={onToggle}
      className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card shadow-card transition-colors hover:bg-accent"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 180 : 0,
          scale: isDark ? 0.8 : 1,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {isDark ? (
          <Moon className="h-5 w-5 text-primary" />
        ) : (
          <Sun className="h-5 w-5 text-primary" />
        )}
      </motion.div>
      <motion.div
        className="absolute inset-0 rounded-xl"
        initial={false}
        animate={{
          boxShadow: isDark
            ? "0 0 20px hsla(271, 80%, 60%, 0.3)"
            : "0 0 20px hsla(40, 100%, 60%, 0.3)",
        }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
}
