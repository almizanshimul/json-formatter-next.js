import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, X } from "lucide-react";

interface ErrorAlertProps {
  error: string | null;
  parsedJson: object | null;
  onDismiss?: () => void;
}

export function ErrorAlert({ error, parsedJson, onDismiss }: ErrorAlertProps) {
  const shouldShow = error && !parsedJson;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          transition={{ duration: 0.3 }}
          className="mt-6 p-4 rounded-xl border-2 border-destructive/30 bg-destructive/5 flex items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <motion.div
              animate={{ rotate: [0, 5, -5, 0] }}
              transition={{ duration: 0.5, repeat: 3 }}
              className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10"
            >
              <AlertCircle className="h-5 w-5 text-destructive" />
            </motion.div>
            <p className="text-destructive font-medium">{error}</p>
          </div>
          {onDismiss && (
            <motion.button
              onClick={onDismiss}
              className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-destructive/10 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-4 w-4 text-destructive" />
            </motion.button>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
