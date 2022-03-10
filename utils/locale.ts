export function humanizeLocale(locale: string = "ru-RU"): string {
  const localeLabels: Record<string, string> = {
    "ru-RU": "Рус",
    "en-US": "Eng",
  };

  return localeLabels[locale] ?? localeLabels["ru-RU"];
}

export function getLocaleIcon(locale: string = "ru-RU"): string {
  const localeIcons: Record<string, string> = {
    "ru-RU": "/ru.svg",
    "en-US": "/gb.svg",
  };

  return localeIcons[locale] ?? localeIcons["ru-RU"];
}

export function getLocaleId(locale: string = "ru-RU"): string {
  const localIds: Record<string, string> = {
    "ru-RU": "1",
    "en-US": "2",
  };

  return localIds[locale] ?? localIds["ru-RU"];
}

export function getLocaleTitle(locale: string = "ru-RU"): string {
  const localIds: Record<string, string> = {
    "ru-RU": "Новости и события",
    "en-US": "News and events",
  };

  return localIds[locale] ?? localIds["ru-RU"];
}
