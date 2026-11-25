/** A work's year and medium, each on its own line. */
export function Meta({ year, medium }: { year: string; medium: string }) {
  return (
    <p className="meta">
      <span>{year}</span>
      <span>{medium}</span>
    </p>
  );
}
