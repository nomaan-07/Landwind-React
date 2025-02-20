import { useContext } from "react";
import ToggleMenuContext from "../contexts/ToggleMenuContext";

export function useToggleMenu() {
  return useContext(ToggleMenuContext);
}
