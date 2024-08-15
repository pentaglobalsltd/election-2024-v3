export const deviceDetecrByWidth = (width) => {
  if (width <= 320) return "SmMobile";
  else if (width > 320 && width <= 425) return "LgMobile";
  else if (width > 425 && width <= 768) return "Tab";
  else if (width > 768 && width <= 1024) return "SmLaptop";
  else if (width > 1024 && width <= 1200) return "LgLaptop";
  else return "Desktop";
};
