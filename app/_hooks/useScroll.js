import { useContext } from "react";
import { ScrollContext } from "../_components/ScrollControls";

export function useScroll() {
  return useContext(ScrollContext);
}
