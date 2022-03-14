import { useState } from "react";
import { useNavigate } from "react-router-dom"

export const useCelebrities = () => {
  const baseUrl = "https://raw.githubusercontent.com/grasielaGomes/images/main";
  const [titleColor, setTitleColor] = useState("white");
  const navigate = useNavigate();

  const handleButtonClick = (celebrityName: string) => {
    navigate(`/${celebrityName}`);
  }

  return {
    titleColor,
    setTitleColor,
    baseUrl,
    handleButtonClick,
    navigate,
  };
}