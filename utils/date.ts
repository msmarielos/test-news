export function formatDate(date: string, locale: string = 'ru-RU'): string {
  const formateDate = new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(new Date(date));

  return formateDate.split(" ").slice(0, 3).join(" ");
}
