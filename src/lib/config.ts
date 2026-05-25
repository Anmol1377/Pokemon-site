/**
 * Single source of truth for outbound URLs and the APK download path.
 *
 * The APK is shipped with the site under public/, so it's served from the
 * same origin — no GitHub Releases dependency, no cross-repo lookup. The
 * BASE_URL prefix makes the path work for both local dev (/) and the
 * project-site deploy (/Pokemon-site/).
 */
export const LINKS = {
  apkDownload: `${import.meta.env.BASE_URL}pokemon-safari.apk`,
  /** Set to a Play Store URL once published; null hides the button. */
  playStore: null as string | null,
  /** Personal profiles only — no per-repo source links here. */
  github: "https://github.com/Anmol1377",
  linkedin: "https://www.linkedin.com/in/anmol18/",
} as const;
