import { useTranslation } from "react-i18next";
import { useState } from "react";
import { GrLanguage } from "react-icons/gr";

const LanguageSelector = () => {
  const lngs = {
    en: { nativeName: "English" },
    de: { nativeName: "Deutsch" },
    zh: { nativeName: "中文" },
  };
  const { i18n } = useTranslation();

  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (lng) => {
    i18n.changeLanguage(lng);
    setIsOpen(false);  
  };

  return (
    <div className="relative items-center">
      <button
        className="flex"
        onClick={() => setIsOpen(!isOpen)}
      >
        <GrLanguage size={30}/>
      </button>
      {isOpen && (
        <div className="absolute z-50 p-2 mt-2 transform -translate-x-1/2 left-1/2 bg-neutral">
          {Object.keys(lngs).map((lng) => (
            <button
              key={lng}
              className={` block  w-full text-left px-4 py-2 ${
                i18n.resolvedLanguage === lng ? "font-bold text-secondary" : "font-normal "
              }`}
              onClick={() => handleLanguageChange(lng)}
            >
              {lngs[lng].nativeName}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
