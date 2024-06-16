const convertBreadcrumb = (breadcrumb: string) => {
  return breadcrumb
    .replace(/-/g, " ")
    .replace(/oe/g, "ö")
    .replace(/ae/g, "ä")
    .replace(/ue/g, "ü")
    .toLowerCase();
};

export { convertBreadcrumb };
