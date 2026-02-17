import { useLanguage } from '../contexts/useLanguage'
import { Globe } from 'lucide-react'

function LanguageToggle() {
    const { language, setLanguage } = useLanguage()

    const toggle = () => {
        setLanguage(language === 'en' ? 'vi' : 'en')
    }

    return (
        <button
            onClick={toggle}
            className="flex items-center gap-2 px-3 py-2 rounded-lg
        bg-gray-100 hover:bg-gray-200
        text-gray-700 hover:text-dtu-red-600
        border border-gray-200 hover:border-dtu-red-200
        transition-all duration-300 ease-smooth
        text-caption font-semibold tracking-wide
        cursor-pointer select-none min-h-[40px] min-w-[60px]"
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
