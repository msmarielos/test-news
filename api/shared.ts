export function getApiUrl(
  path: string,
  query: Record<string, string | number | boolean>
): string {
  const search = new URLSearchParams({ ver: process.env.API_VERSION ?? "2.0" });

  Object.entries(query).forEach(([key, value]) => {
    search.append(key, encodeURIComponent(value));
  });

  return `${process.env.API_URL}${path}?${search.toString()}`;
}
