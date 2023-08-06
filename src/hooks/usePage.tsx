import { useContext } from "react";
import { PageContext } from "../context/pageProvider";

export const usePage = () => {
  const pageContext = useContext(PageContext);
  return pageContext;
};
