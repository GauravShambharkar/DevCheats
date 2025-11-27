import BreadCrumb from "../BreadCrumbs/BreadCrumb";
import CodeBlock from "../ui/CodeBlock";

type breadCrumbType = {
  breadCrumb: string;
};

type GuideStep = {
  title: string;
  description: string;
  fileName: string;
  code: string;
  language?: string;
};

const contextSteps: GuideStep[] = [
  {
    title: "Create a context + provider",
    description:
      "The provider keeps the shared state and exposes whatever helpers children should be able to call.",
    fileName: "src/context/ThemeContext.tsx",
    language: "tsx",
    code: [
      'import { createContext, useContext, useState, type ReactNode } from "react";',
      "",
      'type Theme = "light" | "dark";',
      "",
      "type ThemeContextValue = {",
      "  theme: Theme;",
      "  toggleTheme: () => void;",
      "};",
      "",
      "const ThemeContext = createContext<ThemeContextValue | null>(null);",
      "",
      "export const ThemeProvider = ({ children }: { children: ReactNode }) => {",
      '  const [theme, setTheme] = useState<Theme>("light");',
      "",
      "  const toggleTheme = () =>",
      '    setTheme((prev) => (prev === "light" ? "dark" : "light"));',
      "",
      "  return (",
      "    <ThemeContext.Provider value={{ theme, toggleTheme }}>",
      "      {children}",
      "    </ThemeContext.Provider>",
      "  );",
      "};",
      "",
      "export const useTheme = () => {",
      "  const context = useContext(ThemeContext);",
      "  if (!context) {",
      '    throw new Error("useTheme must be used within <ThemeProvider>");',
      "  }",
      "  return context;",
      "};",
    ].join("\n"),
  },
  {
    title: "Wrap the app once",
    description:
      "The provider should sit high in the tree (often in main.tsx) so that any page can consume the context.",
    fileName: "src/main.tsx",
    language: "tsx",
    code: [
      'import React from "react";',
      'import ReactDOM from "react-dom/client";',
      'import App from "./App";',
      'import { ThemeProvider } from "./context/ThemeContext";',
      "",
      'ReactDOM.createRoot(document.getElementById("root")!).render(',
      "  <React.StrictMode>",
      "    <ThemeProvider>",
      "      <App />",
      "    </ThemeProvider>",
      "  </React.StrictMode>",
      ");",
    ].join("\n"),
  },
  {
    title: "Consume context in any child",
    description:
      "useTheme exposes both the data and the action. No prop drilling—just import the hook where you need it.",
    fileName: "src/components/Header.tsx",
    language: "tsx",
    code: [
      'import { useTheme } from "../context/ThemeContext";',
      "",
      "const Header = () => {",
      "  const { theme, toggleTheme } = useTheme();",
      "",
      "  return (",
      '    <header className="flex items-center justify-between rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm">',
      '      <span className="text-lg font-semibold">Theme: {theme}</span>',
      '      <button className="btn" onClick={toggleTheme}>',
      "        Toggle theme",
      "      </button>",
      "    </header>",
      "  );",
      "};",
      "",
      "export default Header;",
    ].join("\n"),
  },
  {
    title: "Compose multiple contexts",
    description:
      "Wrap providers like regular components. Keeping each concern slim makes testing and reasoning simpler.",
    fileName: "src/context/AppProviders.tsx",
    language: "tsx",
    code: [
      'import { ReactNode } from "react";',
      'import { ThemeProvider } from "./ThemeContext";',
      'import { AuthProvider } from "./AuthContext";',
      "",
      "export const AppProviders = ({ children }: { children: ReactNode }) => (",
      "  <AuthProvider>",
      "    <ThemeProvider>{children}</ThemeProvider>",
      "  </AuthProvider>",
      ");",
    ].join("\n"),
  },
];

const ContextAPI: React.FC<breadCrumbType> = ({ breadCrumb }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 py-2 overflow-auto">
      <BreadCrumb breadCrumb={breadCrumb} />
      <p className="text-sm text-slate-600">
        Context API is the native way to share data without threading props
        through every level. Think of it as a mini global store for focused
        concerns like themes, auth, or feature flags.
      </p>
      <div className="flex flex-col gap-4">
        {contextSteps.map((step, index) => (
          <section
            key={step.title}
            className="rounded-2xl border border-indigo-200 bg-white p-4 shadow-sm"
          >
            <div className="mb-3 flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-wide text-indigo-500">
                Step {index + 1}
              </span>
              <h3 className="text-lg font-semibold text-slate-900">
                {step.title}
              </h3>
              <p className="text-sm text-slate-600">{step.description}</p>
            </div>
            <CodeBlock
              code={step.code}
              fileName={step.fileName}
              language={step.language}
            />
          </section>
        ))}
      </div>
    </div>
  );
};

export default ContextAPI;
