import { createContext, useState, useEffect, useCallback } from 'react'
import en from '../translations/en'
import vi from '../translations/vi'

type Language = 'en' | 'vi'

const translations: Record<Language, Record<string, string>> = { en, vi }

interface LanguageContextType {
    language: Language
    setLanguage: (lang: Language) => void
    t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguageState] = useState<Language>(() => {
        try {
            const saved = localStorage.getItem('iwg-lang')
            if (saved === 'en' || saved === 'vi') return saved
        } catch { /* ignore localStorage errors */ }
        return 'en'
    })

    useEffect(() => {
        try {
            localStorage.setItem('iwg-lang', language)
        } catch { /* ignore localStorage errors */ }
    }, [language])

    const setLanguage = useCallback((lang: Language) => {
        setLanguageState(lang)
    }, [])

    const t = useCallback(
        (key: string): string => {
            return translations[language][key] || translations['en'][key] || key
        },
        [language]
    )

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export default LanguageContext
