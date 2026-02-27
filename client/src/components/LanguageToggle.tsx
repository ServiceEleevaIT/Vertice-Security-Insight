import * as React from "react";
import { useTranslation } from "react-i18next";
import { Globe, ChevronDown } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const languages = {
    pt: { label: "PT", fullLabel: "Português (BR)" },
    en: { label: "EN", fullLabel: "English" },
};

export function LanguageToggle() {
    const { i18n } = useTranslation();
    const currentLang = i18n.language.split("-")[0]; // Get 'pt' from 'pt-BR'

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng);
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <button
                    className="inline-flex items-center gap-2 rounded-xl border border-border/70 bg-card/40 px-3 py-2 text-sm font-semibold text-foreground hover:bg-muted/50 transition-colors"
                    aria-label="Alterar idioma"
                >
                    <Globe className="h-4 w-4" />
                    <span>{languages[currentLang as keyof typeof languages]?.label || "PT"}</span>
                    <ChevronDown className="h-3 w-3 opacity-50" />
                </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-[160px]">
                <DropdownMenuItem
                    onClick={() => changeLanguage("pt")}
                    className="cursor-pointer"
                >
                    <span className={currentLang === "pt" ? "font-semibold" : ""}>
                        {languages.pt.fullLabel}
                    </span>
                </DropdownMenuItem>
                <DropdownMenuItem
                    onClick={() => changeLanguage("en")}
                    className="cursor-pointer"
                >
                    <span className={currentLang === "en" ? "font-semibold" : ""}>
                        {languages.en.fullLabel}
                    </span>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
