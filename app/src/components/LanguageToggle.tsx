import { useLanguage } from '../contexts/LanguageContext'
import { Globe } from 'lucide-react'

function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    const toggle = () => {
        setLanguage(language === 'en' ? 'vi' : 'en')
    }

    return (
        <button
            onClick={toggle}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg
        bg-white/[0.08] hover:bg-white/[0.15]
        text-white/70 hover:text-white
        border border-white/[0.1] hover:border-white/[0.2]
        transition-all duration-300 ease-smooth
        text-caption font-semibold tracking-wide
        cursor-pointer select-none"
            aria-label={language === 'en' ? 'Switch to Vietnamese' : 'Chuyển sang Tiếng Anh'}
            title={language === 'en' ? 'Chuyển sang Tiếng Việt' : 'Switch to English'}
        >
            <Globe className="w-3.5 h-3.5 opacity-70" />
            <span className="relative overflow-hidden w-5 h-4 flex items-center justify-center">
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${language === 'en'
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 -translate-y-3'
                        }`}
                >
                    EN
                </span>
                <span
                    className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${language === 'vi'
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-3'
                        }`}
                >
                    VI
                </span>
            </span>
        </button>
    )
}

export default LanguageToggle
