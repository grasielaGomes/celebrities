import { useState } from "react";

export const useCelebrites = () => {
  const baseUrl = "https://raw.githubusercontent.com/grasielaGomes/images/main";
  const [titleColor, setTitleColor] = useState("white");
  return { titleColor, setTitleColor, baseUrl };
}