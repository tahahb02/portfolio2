export const CV_FILES = {
  fr: "/Taha_HilalBik_CV.pdf",
  en: "/CV_HILAL_BIK_Taha_EN_version.pdf",
  de: "/CV_HILAL_BIK_Taha_DE_version.pdf",
};

export function cvUrlFor(lang) {
  return CV_FILES[lang] || CV_FILES.fr;
}