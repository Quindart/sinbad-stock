import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';
import useGlobalStore from '@/stores/use-global-store';
import { AVAILABLE_LANGUAGE, type Language } from '@/constants/languages';

export default function LanguageDropdown() {
  const { setSelectedLanguageCode, selectedLanguageCode } = useGlobalStore();

  const [selectedLang, setSelectedLang] = useState<Language | undefined>(
    AVAILABLE_LANGUAGE.find((lang: Language) => {
      return lang.code === selectedLanguageCode.split('-')[0];
    }),
  );
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const handleSelect = (lang: Language) => {
    setSelectedLang(lang);
    const base = lang.code.split('-')[0];
    const nextCode =
      base === 'vi'
        ? selectedLanguageCode && selectedLanguageCode.startsWith('vi-')
          ? selectedLanguageCode
          : 'vi-north'
        : base;

    // Log language switch event
    setSelectedLanguageCode(nextCode);
    setOpen(false);
    i18n.changeLanguage(nextCode);
  };

  return (
    <DropdownMenu open={open} onOpenChange={setOpen} modal={false}>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full">
          <img
            src={selectedLang?.flag}
            alt={selectedLang?.code}
            className="h-full w-full rounded-full"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-400 w-40">
        {AVAILABLE_LANGUAGE.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => handleSelect(lang)}
            className="flex items-center gap-2"
          >
            <img
              src={lang.flag}
              alt={lang.code}
              className="h-6 w-6 rounded-full"
            />
            <span>{t(`language.${lang.code}`)}</span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
