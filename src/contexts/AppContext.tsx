import React, { createContext, useContext, useState, useEffect } from "react";
import { Lang, tr } from "@/i18n/translations";

type Theme = "dark" | "light";

interface AppContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  theme: Theme;
  setTheme: (theme: Theme) => void;
  t: (key: string) => string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = localStorage.getItem("tir-lang");
    return (saved as Lang) || "pl";
  });

  const [theme, setThemeState] = useState<Theme>(() => {
    const saved = localStorage.getItem("tir-theme");
    return (saved as Theme) || "dark";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("tir-lang", l);
  };

  const setTheme = (t: Theme) => {
    setThemeState(t);
    localStorage.setItem("tir-theme", t);
  };

  useEffect(() => {
    document.documentElement.classList.toggle("light", theme === "light");
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const translate = (key: string) => tr(key, lang);

  return (
    <AppContext.Provider value={{ lang, setLang, theme, setTheme, t: translate }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be inside AppProvider");
  return ctx;
};
