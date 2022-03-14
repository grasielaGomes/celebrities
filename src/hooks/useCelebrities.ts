import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { CelebrityObj } from "helper/CelebrityObj";

export const useCelebrities = () => {
  const baseUrl = "https://raw.githubusercontent.com/grasielaGomes/images/main";
  const [titleColor, setTitleColor] = useState("white");
  const navigate = useNavigate();
  const { celebrity } = useParams();

  const handleButtonClick = (celebrityName: string) => {
    navigate(`/${celebrityName}`);
  };

  return {
    titleColor,
    setTitleColor,
    baseUrl,
    handleButtonClick,
    navigate,
    celebrity,
    CelebrityObj,
  };
};
