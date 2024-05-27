import { getItem, setItem } from "@/lib/utils/localStorage";
import { ReactNode, createContext, useEffect, useState } from "react";

interface ThemeProviderContextProps {
    theme: string;
    setTheme: (theme: string) => void;
}

const initialState: ThemeProviderContextProps = {
    theme: 'light',
    setTheme: () => null,
};

export const ThemeProviderContext = createContext(initialState);

interface ThemeProviderProps {
    children: ReactNode;
    defaultTheme?: string;
    storageKey?: string;
}

const ThemeProvider: React.FC<ThemeProviderProps> = ({
    children,
    defaultTheme = 'light',
    storageKey = 'project-react-theme',
    ...props
}) => {
    const [theme, setTheme] = useState<string>(() => getItem(storageKey) || defaultTheme);
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    useEffect(() => {
        const root = window.document.documentElement;

        root.classList.remove('light', 'dark');

        const newTheme = theme === 'system' ? systemTheme : theme;

        root.classList.add(newTheme);

        if (!getItem(storageKey)) {
            setItem(storageKey, newTheme);
        }
    }, [storageKey, systemTheme, theme]);

    const value = {
        theme,
        setTheme: (theme: string) => {
            const newTheme = theme === 'system' ? systemTheme : theme;
            setItem(storageKey, newTheme);
            setTheme(newTheme);
        },
    };

    return (
        <ThemeProviderContext.Provider {...props} value={value}>
            {children}
        </ThemeProviderContext.Provider>
    );
};

export default ThemeProvider;

