export function withBase(path: string): string {
  if (!path) return path;

  const isExternal =
    /^(?:[a-z][a-z0-9+.-]*:)?\/\//i.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:") ||
    path.startsWith("#");

  if (isExternal) return path;

  const base = import.meta.env.BASE_URL || "/";
  const normalizedBase = base === "/" ? "" : base.replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;

  if (!normalizedBase) return normalizedPath;

  if (
    normalizedPath === normalizedBase ||
    normalizedPath.startsWith(`${normalizedBase}/`)
  ) {
    return normalizedPath;
  }

  return `${normalizedBase}${normalizedPath}`;
}
