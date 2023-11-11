import React from "react"
import { useNavigate } from "react-router-dom";

import * as St from "./style"

interface category {
  icon: JSX.Element;
  label: string;
  location: string
}

const MainIcon = ({ icon, label, location }: category) => {
  const navigate = useNavigate();
  return (
    <St.SectionLi
      onClick={() => navigate(`/lecture/${encodeURIComponent(location)}`)}
    >
      <St.CategoryIcon>{icon}</St.CategoryIcon>
      <p>{label}</p>
    </St.SectionLi>
  );
};
export default MainIcon;