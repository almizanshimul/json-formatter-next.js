import { motion } from "framer-motion";
import { Sparkles, Trash2, ClipboardPaste } from "lucide-react";

interface JsonInputProps {
  value: string;
  onChange: (value: string) => void;
  onFormat: () => void;
  onClear: () => void;
  onPaste: () => void;
  displayLayout: string;
}

export function JsonInput({
  value,
  onChange,
  onFormat,
  onClear,
  onPaste,
  displayLayout,
}: JsonInputProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      className="flex flex-col h-full p-5 rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10 shadow-card"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <motion.div
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10"
            animate={{ rotate: [0, 5, -5, 0] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
          >
            <ClipboardPaste className="h-4 w-4 text-primary" />
          </motion.div>
          <span className="text-sm font-semibold text-primary">JSON Input</span>
        </div>
      </div>

      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full flex-1 border-2 border-border p-4 rounded-xl font-mono text-sm bg-input-bg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/50 transition-all duration-200 placeholder:text-muted-foreground resize-none ${
          displayLayout === "side-by-side" ? "min-h-[350px]" : "min-h-[200px]"
        }`}
        placeholder='Paste JSON here (e.g., {"key": "value"})'
      />

      {/* Action Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mt-5">
        <motion.button
          onClick={onFormat}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-primary-foreground shadow-button transition-all duration-300 min-w-[140px]"
          style={{ background: "var(--gradient-primary)" }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Sparkles className="h-5 w-5" />
          Format
        </motion.button>

        <motion.button
          onClick={onClear}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold bg-muted text-muted-foreground hover:bg-muted/80 shadow-lg transition-all duration-300 min-w-[140px]"
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <Trash2 className="h-5 w-5" />
          Clear
        </motion.button>

        <motion.button
          onClick={onPaste}
          className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-secondary-foreground shadow-lg transition-all duration-300 min-w-[140px]"
          style={{ background: "var(--gradient-secondary)" }}
          whileHover={{ scale: 1.03, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <ClipboardPaste className="h-5 w-5" />
          Paste
        </motion.button>
      </div>
    </motion.div>
  );
}
