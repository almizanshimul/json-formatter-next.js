import { motion, AnimatePresence } from "framer-motion";
import { Settings2, Save, Trash2, Check, X } from "lucide-react";

interface SettingsPanelProps {
  isOpen: boolean;
  onToggle: () => void;
  settings: {
    displayLayout: string;
    selectedFormatterDataTypes: string;
    selecteddisplayObjectSize: string;
    selectedIconStyle: string;
    selectedTheme: string;
    fontSize: number;
  };
  onSettingChange: (key: string, value: string | number) => void;
  onSave: () => void;
  onClear: () => void;
  showSaveSuccess: boolean;
}

const themeOptions = [
  "rjv-default",
  "apathy",
  "apathy:inverted",
  "ashes",
  "bespin",
  "brewer",
  "bright",
  "bright:inverted",
  "chalk",
  "codeschool",
  "colors",
  "eighties",
  "embers",
  "flat",
  "google",
  "grayscale",
  "grayscale:inverted",
  "greenscreen",
  "harmonic",
  "hopscotch",
  "isotope",
  "marrakesh",
  "mocha",
  "monokai",
  "ocean",
  "paraiso",
  "pop",
  "railscasts",
  "shapeshifter",
  "shapeshifter:inverted",
  "solarized",
  "summerfruit",
  "summerfruit:inverted",
  "threezerotwofour",
  "tomorrow",
  "tube",
  "twilight",
];

export function SettingsPanel({
  isOpen,
  onToggle,
  settings,
  onSettingChange,
  onSave,
  onClear,
  showSaveSuccess,
}: SettingsPanelProps) {
  const selectClass =
    "w-full px-4 py-2.5 rounded-lg border border-border bg-card text-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-200";

  const labelClass = "block text-sm font-medium text-primary mb-2";

  return (
    <>
      {/* Trigger Button */}
      <motion.button
        onClick={onToggle}
        className="flex items-center gap-2 px-5 py-2.5 rounded-xl border border-border bg-card text-primary font-medium shadow-card transition-colors hover:bg-accent"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <Settings2 className="h-5 w-5" />
        <span>Display Settings</span>
      </motion.button>

      {/* Modal */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onToggle}
            />

            {/* Centering Wrapper */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Modal Box */}
              <motion.div
                initial={{ scale: 0.95, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 20 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full max-w-4xl rounded-2xl border border-border bg-card p-6 shadow-2xl"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-primary flex items-center gap-2">
                    <Settings2 className="h-6 w-6" />
                    Display Settings
                  </h2>

                  <motion.button
                    onClick={onToggle}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-muted text-muted-foreground hover:bg-destructive hover:text-destructive-foreground"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <X className="h-5 w-5" />
                  </motion.button>
                </div>

                {/* Settings Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  <div>
                    <label className={labelClass}>Display Layout</label>
                    <select
                      value={settings.displayLayout}
                      onChange={(e) =>
                        onSettingChange("displayLayout", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="side-by-side">Side by Side</option>
                      <option value="up-down">Up & Down</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Data Types</label>
                    <select
                      value={settings.selectedFormatterDataTypes}
                      onChange={(e) =>
                        onSettingChange(
                          "selectedFormatterDataTypes",
                          e.target.value,
                        )
                      }
                      className={selectClass}
                    >
                      <option value="true">Show</option>
                      <option value="false">Hide</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Object Size</label>
                    <select
                      value={settings.selecteddisplayObjectSize}
                      onChange={(e) =>
                        onSettingChange(
                          "selecteddisplayObjectSize",
                          e.target.value,
                        )
                      }
                      className={selectClass}
                    >
                      <option value="true">Show</option>
                      <option value="false">Hide</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Icon Style</label>
                    <select
                      value={settings.selectedIconStyle}
                      onChange={(e) =>
                        onSettingChange("selectedIconStyle", e.target.value)
                      }
                      className={selectClass}
                    >
                      <option value="triangle">Triangle</option>
                      <option value="circle">Circle</option>
                      <option value="square">Square</option>
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>Color Scheme</label>
                    <select
                      value={settings.selectedTheme}
                      onChange={(e) =>
                        onSettingChange("selectedTheme", e.target.value)
                      }
                      className={selectClass}
                    >
                      {themeOptions.map((theme) => (
                        <option key={theme} value={theme}>
                          {theme}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Font Size: {settings.fontSize}px
                    </label>
                    <div className="flex items-center gap-3">
                      <motion.button
                        onClick={() =>
                          onSettingChange(
                            "fontSize",
                            Math.max(10, settings.fontSize - 1),
                          )
                        }
                        className="flex-1 py-2 rounded-lg border border-border bg-card hover:bg-accent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        −
                      </motion.button>

                      <span className="w-12 text-center">
                        {settings.fontSize}px
                      </span>

                      <motion.button
                        onClick={() =>
                          onSettingChange(
                            "fontSize",
                            Math.min(72, settings.fontSize + 1),
                          )
                        }
                        className="flex-1 py-2 rounded-lg border border-border bg-card hover:bg-accent"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        +
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <motion.button
                    onClick={onSave}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold text-secondary-foreground"
                    style={{ background: "var(--gradient-secondary)" }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Save className="h-5 w-5" />
                    Save Settings
                  </motion.button>

                  <motion.button
                    onClick={onClear}
                    className="flex items-center gap-2 px-5 py-3 rounded-xl font-semibold bg-destructive text-destructive-foreground"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    <Trash2 className="h-5 w-5" />
                    Clear Settings
                  </motion.button>
                </div>

                {/* Success Message */}
                <AnimatePresence>
                  {showSaveSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="mt-4 p-4 rounded-xl bg-success/10 border border-success/20 flex items-center gap-3"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success">
                        <Check className="h-5 w-5 text-success-foreground" />
                      </div>
                      <span className="font-medium text-success">
                        Settings saved successfully!
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
